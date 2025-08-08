# **Eye Shots Platform Architecture Document**

### **Introduction**

This document outlines the final project architecture for the Eye Shots Platform MVP. It is based on the detailed requirements in the PRD and the specific technical foundation provided by the **Ecme Next.js TypeScript starter template**. This architecture integrates the Ecme template with a modern, hybrid stack consisting of **Convex Cloud**, **Clerk**, and self-hosted services on a **Contabo VPS**.  
**Starter Template:** The project will be initialized using the **Ecme Next.js TypeScript "starter" version**. This architecture is designed to adapt and extend that foundation.  
Change Log:  
| Date | Version | Description | Author |  
|------------|---------|---------------------------------------------------|--------|  
| 2025-08-09 | 3.0 | Final architecture with confirmed stack and DevOps considerations. | Winston (Architect) |  
| 2025-08-09 | 2.1 | Corrected architecture to integrate Ecme template with Convex, Clerk, & Contabo VPS. | Winston (Architect) |  
| 2025-08-09 | 2.0 | Major architectural pivot to Convex, Clerk, & Contabo VPS | Winston (Architect) |  
| 2025-08-09 | 1.0 | Initial Architecture Draft | Winston (Architect) |

### **High-Level Architecture**

Technical Summary:  
The Eye Shots Platform will be a full-stack application with a decoupled architecture. The frontend will be the Ecme Next.js template application, hosted on a Contabo VPS. The backend logic and database will be managed by Convex Cloud, providing real-time data synchronization. User authentication and subscription management will be handled by Clerk. For cost-effective file storage, a custom, secure file-serving API will be developed and hosted on the Contabo VPS, managing assets stored on the server's local storage. This hybrid architecture balances the power of managed backend services with the control and cost benefits of self-hosted infrastructure.  
**High-Level Project Diagram:**  
graph TD  
    subgraph Browser  
        A\[Client/Team User\]  
    end

    subgraph "Contabo VPS"  
        B\[Ecme Next.js Frontend App\]  
        C\[File Storage API & Storage\]  
    end

    subgraph "Managed Services"  
        D\[Clerk Authentication\]  
        E\[Convex Cloud Backend & Database\]  
    end

    A \-- HTTPS \--\> B  
    B \-- Auth Flow (via Clerk SDK) \--\> D  
    B \-- Real-time Data (via Convex SDK) \--\> E  
    B \-- Upload/Download Requests (via Axios) \--\> C  
    D \-- Webhooks/Auth State \--\> B  
    E \-- Functions can call \--\> D

**Architectural and Design Patterns:**

* **Decoupled Frontend/Backend:** The Next.js frontend is decoupled from the backend logic (Convex), communicating via the Convex client SDK. This allows for independent scaling and development.  
* **Backend as a Service (BaaS):** Leveraging Convex for the database and server functions abstracts away much of the backend infrastructure management.  
* **Self-Hosted Service:** A dedicated, simple API service (e.g., using Express.js) will be created on the VPS to handle file uploads, downloads, and permission checks, providing a secure interface to the local file system.

### **Tech Stack**

This is the definitive technology selection for the MVP.

| Category | Technology | Version | Purpose & Rationale |
| :---- | :---- | :---- | :---- |
| **Language** | TypeScript | \~5.3.3 | Primary language for type safety across frontend and backend (Convex). |
| **Framework** | Next.js | \~14.x.x | Core frontend framework, hosted on Contabo VPS. |
| **UI Library** | Ecme Custom Components | N/A | Leveraging the template's built-in, feature-rich component library is mandatory. |
| **Styling** | Tailwind CSS | \~3.4.1 | Utility-first CSS framework for rapid and consistent UI development. |
| **Hosting** | Contabo VPS | N/A | Self-hosted environment for the Next.js frontend and file storage service. |
| **Authentication** | Clerk | Latest | Manages all user sign-up, sign-in, session management, and future subscriptions. |
| **Backend/Database** | Convex Cloud | Latest | Real-time database and serverless functions for all application data logic. |
| **File Storage** | Contabo VPS Storage | N/A | Cost-effective local storage on the VPS, accessed via a custom secure API. |
| **API Client** | Convex Client SDK / Axios | Latest | Convex SDK for backend data; Axios (from template) for the self-hosted file API. |
| **Testing** | Jest & React Testing Library | Latest | Standard for unit and integration testing of React components. |

### **Database Schema (Convex)**

Schemas will be defined in the /convex/schema.ts file, which will be added to the root of the Ecme project structure.  
// /convex/schema.ts  
import { defineSchema, defineTable } from "convex/server";  
import { v } from "convex/values";

export default defineSchema({  
  users: defineTable({  
    clerkId: v.string(),  
    email: v.string(),  
    displayName: v.string(),  
    type: v.union(v.literal("Internal"), v.literal("Client")),  
    role: v.union(v.literal("Admin"), v.literal("Project Manager"), v.literal("Creative"), v.literal("Client")),  
  }).index("by\_clerk\_id", \["clerkId"\]),

  projects: defineTable({  
    name: v.string(),  
    // ... other project fields  
  }),

  files: defineTable({  
    projectId: v.id("projects"),  
    storagePath: v.string(), // Path on the Contabo VPS  
    // ... other file fields  
  }),  
    
  // ... other tables for versions, reviews, invoices etc.  
});

### **Source Tree**

This structure adapts the **Ecme starter template** to include Convex, Clerk, and the self-hosted file API.  
/  
├── src/                      \# Ecme template source  
│   ├── components/  
│   ├── configs/  
│   │   ├── app.config.ts     \# Update paths, disable mock API  
│   │   └── routes.config.ts  \# Define platform routes  
│   ├── services/  
│   │   ├── AuthService.ts    \# MODIFY to integrate with Clerk  
│   │   └── ...  
│   ├── store/                \# Zustand store  
│   ├── utils/  
│   └── views/                \# Platform pages  
├── convex/                   \# NEW: Convex backend functions and schema  
│   ├── schema.ts  
│   ├── users.ts  
│   ├── projects.ts  
│   └── http.ts               \# For webhook handlers (e.g., from Clerk)  
├── file-api/                 \# NEW: Simple Express.js API for file storage  
│   ├── index.ts  
│   ├── routes.ts  
│   └── package.json  
├── .env.local                \# Environment variables for Next.js, Clerk, Convex  
└── ...                       \# Other Ecme template root files

### **Infrastructure and Deployment**

* **Infrastructure as Code:** Not applicable. The Contabo VPS will be managed manually. Convex and Clerk are managed via their dashboards.  
* **Deployment Strategy:**  
  1. **Convex Backend:** Deployed via the Convex CLI (npx convex deploy).  
  2. **Next.js Frontend:** Deployed to the Contabo VPS. This will require:  
     * Setting up a reverse proxy (e.g., **Nginx**) to handle incoming traffic and SSL.  
     * Using a process manager (e.g., **PM2**) to keep the Next.js application running.  
     * A build script (npm run build) will be run on the server or locally, and the output (.next folder) will be transferred to the server.  
  3. **File Storage API:** The simple Express.js API will also be run on the VPS using PM2, listening on a local port and exposed securely through Nginx.  
* **Environments:**  
  * **Production:** The live setup on the Contabo VPS.  
  * **Development:** localhost for the Next.js app, connected to a dev deployment of Convex.

### **DevOps & Maintenance (Self-Hosting on Contabo VPS)**

This section addresses the risks associated with self-hosting and outlines the required responsibilities.

* **Server Provisioning & Setup:**  
  * An operating system (e.g., Ubuntu 22.04 LTS) must be installed and hardened.  
  * Required software must be installed: Node.js, Nginx, PM2, firewall (UFW).  
  * DNS records must be configured to point to the VPS IP address.  
* **Security:**  
  * **Firewall:** A firewall (UFW) must be configured to only allow necessary ports (e.g., 80 for HTTP, 443 for HTTPS, 22 for SSH).  
  * **SSL Certificate:** SSL certificates (e.g., from Let's Encrypt) must be installed and configured in Nginx to enable HTTPS.  
  * **Regular Updates:** The server's operating system and all installed packages must be updated regularly to patch security vulnerabilities.  
  * **SSH Access:** SSH access should be secured, preferably using key-based authentication instead of passwords.  
* **Backups:**  
  * A regular backup schedule must be established for the file storage directory on the VPS.  
  * Backup data should be stored off-server (e.g., in a separate cloud storage bucket or another VPS) to protect against server failure.  
* **Monitoring:**  
  * Basic server monitoring (CPU, RAM, disk space) should be set up to alert on potential issues.  
  * Application logs (from PM2) should be managed and rotated to prevent filling up disk space.