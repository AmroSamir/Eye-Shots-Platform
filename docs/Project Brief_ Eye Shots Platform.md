# **Project Brief: Eye Shots Platform**

### **Executive Summary**

The Eye Shots Platform will be a comprehensive, web-based collaboration and management system designed for the Eye Shots creative agency and its clients. The platform aims to centralize project workflows, from client management and project planning to creative asset review and invoicing. It will provide a unified dashboard for the internal team to manage operations and a dedicated portal for clients to track progress and provide feedback, streamlining communication and increasing efficiency.

### **Problem Statement**

Creative agencies like Eye Shots often rely on a fragmented ecosystem of tools for CRM, project management, file sharing, client feedback, and invoicing. This disjointed approach leads to several pain points:

* **Inefficient Workflows:** Time is wasted switching between different applications and manually transferring information.  
* **Communication Gaps:** Important client feedback and project updates can get lost in long email threads or chat messages.  
* **Lack of Transparency:** Clients have limited visibility into project progress, leading to frequent status update requests.  
* **Difficult Collaboration:** Reviewing and approving creative assets (like videos with frame-specific feedback) is cumbersome with generic file-sharing tools.  
* **Administrative Overhead:** Managing recurring client projects, invoicing, and financial tracking is a manual and time-consuming process.

### **Proposed Solution**

The Eye Shots Platform will be an all-in-one solution that integrates these disparate functions into a single, cohesive platform built on a flexible Next.js template. The system will feature two primary user experiences:

1. **Internal Team Portal:** A powerful backend for Eye Shots employees to manage the entire client lifecycle, including sales, finance, project execution, and team collaboration.  
2. **Client Portal:** A secure, user-friendly interface for clients to view project dashboards, access files, participate in a structured asset review and approval process, and view their invoices.

The core of the platform will be its advanced "Asset Review & Approvals" module, allowing for detailed, contextual feedback on creative work, thereby accelerating the revision cycle.

### **Target Users**

#### **Public Website / Landing Pages**

* **Primary User Segment: Potential Clients**  
  * **Profile:** Marketing managers, business owners, and decision-makers looking to hire a creative agency for development, social media, or creative asset production.  
  * **Needs:** To quickly understand Eye Shots' capabilities, see the quality of their past work, and easily initiate contact.  
* **Secondary User Segment: Website Visitors & Industry Peers**  
  * **Profile:** Individuals interested in creative services, marketing trends, or the work of Eye Shots.  
  * **Needs:** To read insightful blog content and learn more about the agency.

#### **Collaboration Platform**

* **Primary User Segment: Internal Team Members**  
  * **Profile:** Project Managers, Creative Staff (designers, video editors), Sales/Account Managers, and Administrators at Eye Shots.  
  * **Needs:** A centralized system to manage projects, tasks, and client communication. Efficient tools for CRM, invoicing, and internal collaboration. A structured way to receive and act on client feedback.  
* **Secondary User Segment: Clients**  
  * **Profile:** Individuals or teams who have hired Eye Shots for one-time or recurring creative projects.  
  * **Needs:** A simple, transparent way to track the progress of their projects. An intuitive portal to review creative assets and provide clear, actionable feedback. Easy access to project files and financial documents like invoices.

### **Goals & Success Metrics**

* **Business Objectives:**  
  * Increase operational efficiency by centralizing core business functions.  
  * Improve client satisfaction and retention through enhanced transparency and collaboration.  
  * Reduce project revision cycles and accelerate delivery times.  
  * Create a scalable platform that can support future business growth.  
* **User Success Metrics:**  
  * Reduction in time spent on administrative tasks per project.  
  * Faster average turnaround time for client asset approvals.  
  * High adoption and engagement rate with the Client Portal.  
* **Key Performance Indicators (KPIs):**  
  * **Project Velocity:** Average time to complete a project from start to finish.  
  * **Client Satisfaction Score (CSAT/NPS):** Measured via surveys within the platform.  
  * **Portal Usage:** Percentage of active clients regularly logging in and using the review features.

### **MVP Scope**

To ensure a focused and timely launch, the MVP will concentrate on the core collaborative workflow.

* **Core Features (Must Have for MVP):**  
  * **User & Role Management:** Ability to create and manage accounts for Internal Team and Client users with distinct permissions.  
  * **Project Management:**  
    * Create/manage projects (one-time and recurring types).  
    * Define project details: Name, client, dates, lead, team, description.  
    * A basic project dashboard showing status, tasks, and milestones.  
  * **File Management:**  
    * Automatic creation of a top-level folder for each project.  
    * Ability for team and clients to upload/download files.  
    * Permission-based controls for renaming, deleting, and changing file/folder visibility (Admin/PM only).  
  * **Asset Review & Approvals:**  
    * A multi-column layout for managing review stages (e.g., Internal Review, Client Review).  
    * Ability for Admins/PMs to create custom review groups/stages.  
    * Core functionality for team members to submit assets for review.  
    * Core functionality for reviewers to comment on (and ideally, annotate) assets and approve or request changes.  
  * **Basic Invoicing:** Ability to generate and send simple invoices related to projects.  
* **Out of Scope for MVP (Post-MVP Vision):**  
  * Full CRM (leads, opportunities).  
  * Advanced Finance (accounting, expenses, spreadsheets, Sign).  
  * All Marketing Modules (automation, email, SMS, social, surveys).  
  * Advanced HR Modules (recruitment, time off, appraisals, referral).  
  * Advanced Services (Timesheet, Field Service, Helpdesk, Planning, Appointments).  
  * Productivity Tools (VOIP, Knowledge library).  
  * Advanced project status customization.

### **Technical Considerations**

* **Starter Template:** The project will be built using the **Ecme Next.js TypeScript "starter" version**.  
* **Core Technology:** The stack is defined by the template: **TypeScript, Next.js, React, and Tailwind CSS**.  
* **UI Components:** The platform will leverage the template's custom-built UI component library.  
* **State Management:** **Zustand** is the default state management library and will be used for managing global UI state.  
* **API Integration:** The template's pre-configured **Axios-based service layer** will be used for all API communication.  
* **Authentication:** The template's built-in authentication provider (useAuth) will be the starting point. **Firebase** integration is available and can be considered for backend services.

### **Constraints & Assumptions**

* **Constraints:**  
  * The entire platform must be developed within the architectural and tooling constraints of the provided Ecme template.  
  * The initial launch (MVP) must focus exclusively on the "In Scope" features to ensure a rapid release.  
* **Key Assumptions:**  
  * The core value proposition for clients is the streamlined project tracking and asset approval workflow.  
  * The Ecme template's components and architecture are sufficiently flexible to build the complex Asset Review module.  
  * A basic invoicing system is sufficient for the initial launch, with more advanced accounting features to follow.

### **Risks & Open Questions**

* **Key Risks:**  
  * **Scope Creep:** The vision is vast; there is a significant risk of trying to build too many features for the MVP, delaying launch.  
  * **Technical Complexity:** The "Asset Review & Approvals" feature, with per-frame commenting and drawing, is technically complex and may require significant development effort.  
* **Open Questions:**  
  * What are the specific requirements for the video/image player in the review tool (e.g., supported formats, performance needs)?  
  * What are the priority modules to develop after the MVP is launched (e.g., Sales, Finance, Marketing)?  
  * Are there any existing CRM or accounting systems that will need to be integrated with or migrated from in the future?

### **Next Steps**

* **Immediate Actions:**  
  1. Review and finalize this Project Brief.  
  2. Gain approval from all key stakeholders.  
  3. Proceed to the PRD (Product Requirements Document) creation phase.  
* PM Handoff:  
  This Project Brief provides the full context for the Eye Shots Platform. The next step is to engage the Product Manager (John) to begin creating the PRD. The PRD will break down the MVP scope into detailed functional requirements, user stories, and epics, providing a clear roadmap for the architecture and development phases.