# **High-Level Architecture**

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
