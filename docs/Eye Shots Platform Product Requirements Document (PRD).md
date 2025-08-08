# **Eye Shots Platform Product Requirements Document (PRD)**

### **Goals and Background Context**

**Goals:**

* To centralize project management, client collaboration, and internal workflows into a single, efficient platform.  
* To provide clients with a transparent and intuitive portal for tracking project progress and providing feedback.  
* To significantly reduce the time and effort required for creative asset review and approval cycles.  
* To establish a scalable technical foundation for future expansion into CRM, advanced finance, and marketing modules.

Background Context:  
The Eye Shots Platform is being developed to address the operational inefficiencies of using multiple, disconnected tools for managing a creative agency. The core problem is the friction in the client collaboration loop, especially during the creative review process. This platform will provide a unified solution, with the MVP focusing on the most critical workflow: creating projects, managing files, and streamlining the asset approval process, thereby delivering immediate value to both the internal team and clients.  
Change Log:  
| Date | Version | Description | Author |  
|------------|---------|--------------------------|--------|  
| 2025-08-09 | 1.0 | Initial Draft of PRD | John (PM) |

### **Requirements**

#### **Functional**

* **FR1:** The system shall support two main user roles: Internal Team Members and Clients, with distinct permissions.  
* **FR2:** Internal Team Members shall be able to create and manage projects of two types: "One-Time" and "Recurring".  
* **FR3:** Each project shall have an automatically created, dedicated file storage folder.  
* **FR4:** Both Internal Team and Client users shall be able to upload and download files within their assigned projects.  
* **FR5:** Designated administrative roles (Admin, Project Manager) shall have exclusive rights to rename, delete, and manage the visibility of files and folders.  
* **FR6:** The system shall feature a multi-stage asset review and approval system.  
* **FR7:** Admins and Project Managers shall be able to create and manage custom "Reviewer Groups" for different stages of approval.  
* **FR8:** Reviewers shall be able to view assets, add comments, and approve or request changes.  
* **FR9:** The system shall be able to generate basic invoices associated with projects.  
* **FR10:** Clients shall be able to view their project dashboards and invoices through a dedicated client portal.

#### **Non-Functional**

* **NFR1:** The platform shall be built using the Ecme Next.js TypeScript starter template.  
* **NFR2:** All user interfaces must be responsive and function correctly on modern web browsers on desktop and mobile devices.  
* **NFR3:** The application will leverage the Ecme template's built-in components and styling (Tailwind CSS) to ensure a consistent look and feel.

### **User Interface Design Goals**

The UI will adhere to the clean, modern aesthetic of the Ecme template. The primary goal is to create an intuitive and efficient user experience, especially within the Asset Review module. The design should prioritize clarity, with a logical information hierarchy that allows users to quickly find projects, files, and review statuses. Progressive disclosure will be used to avoid overwhelming users, showing detailed controls only when needed.

### **Technical Assumptions**

* **Repository Structure:** A monorepo structure is assumed, as it is a common pattern for full-stack Next.js applications and is well-supported by modern tooling.  
* **Service Architecture:** The application will start as a monolith, leveraging Next.js API routes for the backend. This is the simplest approach for the MVP and aligns with the Ecme template's structure.  
* **Testing Requirements:** Development will include unit and integration tests. The focus will be on ensuring the reliability of the core Asset Review and file management functionalities.

### **Epic List**

* **Epic 1: Foundational Setup & Core User Management:** Establish the project foundation using the Ecme template, set up authentication, and manage user roles.  
* **Epic 2: Core Project & File Management:** Implement the ability to create projects and manage the associated file/folder structure and permissions.  
* **Epic 3: Asset Review & Approval System:** Build the core multi-stage review system for creative assets.  
* **Epic 4: Basic Invoicing & Client Portal Integration:** Develop basic invoicing functionality and ensure all client-facing features are accessible through the portal.

### **Epic 1: Foundational Setup & Core User Management**

**Goal:** To set up the initial application infrastructure based on the Ecme template and implement a robust user and role management system.

* **Story 1.1: Initial Project Setup**  
  * **As a** developer,  
  * **I want** to initialize the project using the Ecme Next.js TypeScript starter template,  
  * **so that** I have the foundational codebase, components, and configurations in place.  
  * **Acceptance Criteria:**  
    1. The project is created from the "starter" version of the Ecme template.  
    2. All dependencies are installed successfully (npm install).  
    3. The development server runs without errors (npm run dev).  
    4. The default login page is accessible in a browser.  
* **Story 1.2: User Authentication Setup**  
  * **As an** administrator,  
  * **I want** to manage user accounts for both internal team members and clients,  
  * **so that** only authorized users can access the platform.  
  * **Acceptance Criteria:**  
    1. The system integrates with the template's useAuth provider.  
    2. Users can sign up for a new account.  
    3. Users can sign in with their credentials.  
    4. Users can sign out.  
    5. The system can differentiate between "Internal Team" and "Client" user types upon registration or by admin assignment.  
* **Story 1.3: Role-Based Access Control (RBAC)**  
  * **As an** administrator,  
  * **I want** to assign specific roles (e.g., Admin, Project Manager, Creative, Client) to users,  
  * **so that** I can control their access to different features and data.  
  * **Acceptance Criteria:**  
    1. A role system is implemented in the backend.  
    2. An admin interface exists to view and change a user's role.  
    3. The application's routing (protectedRoutes) respects the assigned roles, blocking access to unauthorized pages.

### **Epic 2: Core Project & File Management**

**Goal:** To enable the creation and management of projects and their associated file structures, providing the basic organizational layer for all collaborative work.

* **Story 2.1: Project Creation**  
  * **As a** Project Manager,  
  * **I want** to create new projects with key details,  
  * **so that** I can organize work for different clients and initiatives.  
  * **Acceptance Criteria:**  
    1. A "Create Project" form is available to authorized internal users.  
    2. The form captures: Project Name, Project Type (One-Time/Recurring), Client, Start/End Dates, Project Lead, and Team Assigned.  
    3. Upon successful creation, a new project is saved to the database.  
    4. A top-level folder for the project is automatically created in the file storage system.  
* **Story 2.2: Project Dashboard & View**  
  * **As a** team member,  
  * **I want** to view a list of all projects and a dashboard for a selected project,  
  * **so that** I can get an overview of the work and access project details.  
  * **Acceptance Criteria:**  
    1. A page displays a list of all projects the user has access to.  
    2. Clicking a project leads to its dashboard view.  
    3. The project dashboard displays the project's name, description, key milestones, and assigned team members.  
* **Story 2.3: File & Folder Management**  
  * **As a** user (team or client),  
  * **I want** to upload, download, and organize files within a project's folder,  
  * **so that** we can collaborate on project assets.  
  * **Acceptance Criteria:**  
    1. The project dashboard includes a file browser interface for the project's root folder.  
    2. Both team and client users can create sub-folders.  
    3. Both team and client users can upload files to any folder they have access to.  
    4. Both team and client users can download files.  
    5. Only Admins and Project Managers can rename or delete files and folders.  
    6. Only Admins and Project Managers can change the visibility of a file/folder (e.g., internal only, client visible).

### **Epic 3: Asset Review & Approval System**

**Goal:** To build the platform's core feature: a powerful, multi-stage system for reviewing creative assets that streamlines feedback and accelerates approvals.

* **Story 3.1: Review Groups Management**  
  * **As a** Project Manager,  
  * **I want** to create and manage custom reviewer groups for a project,  
  * **so that** I can define the specific stages of our approval workflow (e.g., Internal Review, Client Review).  
  * **Acceptance Criteria:**  
    1. In the project settings, an Admin/PM can create a new "Reviewer Group" by giving it a name.  
    2. The Admin/PM can add specific platform users (internal or client) to a reviewer group.  
    3. The review screen displays these groups as columns in a sequential order.  
* **Story 3.2: Submitting Assets for Review**  
  * **As a** creative team member,  
  * **I want** to upload a file and submit it to the first review group,  
  * **so that** the approval process can begin.  
  * **Acceptance Criteria:**  
    1. In the file browser, a team member can select a file and choose to "Submit for Review".  
    2. The file appears in a "Staging" or "To Be Reviewed" column on the Asset Review screen.  
    3. A "Start Review" button is visible to members of the first reviewer group.  
* **Story 3.3: Asset Review Interface**  
  * **As a** reviewer,  
  * **I want** to open an asset in a dedicated review interface and provide feedback,  
  * **so that** I can clearly communicate required changes or give my approval.  
  * **Acceptance Criteria:**  
    1. Clicking "Start Review" opens the asset in a new view/modal.  
    2. The interface includes a media player (for video/images) and a comments panel.  
    3. Users can add general comments to the asset.  
    4. (Annotation is a stretch goal, not for MVP story) Users can click "Approve" or "Request Changes".  
    5. All comments and the final decision are saved and associated with that version of the asset.  
* **Story 3.4: Review Workflow Progression**  
  * **As a** Project Manager,  
  * **I want** the asset to move through the review stages based on approvals,  
  * **so that** I can track its progress towards final sign-off.  
  * **Acceptance Criteria:**  
    1. If a reviewer "Requests Changes", the asset is flagged for the creative team to re-upload a new version.  
    2. If all reviewers in a group "Approve" an asset, the asset becomes available for review by the next group in the sequence.  
    3. A "Start Review" button appears for the asset under the next reviewer group's column.  
    4. A clear visual history shows all previous versions and their associated feedback.

### **Epic 4: Basic Invoicing & Client Portal Integration**

**Goal:** To provide essential invoicing capabilities and ensure a seamless, integrated experience for clients accessing the platform.

* **Story 4.1: Invoice Creation**  
  * **As an** administrator,  
  * **I want** to create a basic invoice for a project,  
  * **so that** I can bill the client for the work completed.  
  * **Acceptance Criteria:**  
    1. An "Invoices" section is available within a project for internal team members.  
    2. A form allows the creation of an invoice with line items, amounts, and a due date.  
    3. The created invoice is saved and associated with the project.  
* **Story 4.2: Client Portal View**  
  * **As a** client,  
  * **I want** to log in and see a dashboard with all my projects and relevant information,  
  * **so that** I have a single place to track everything.  
  * **Acceptance Criteria:**  
    1. When a client user logs in, they are taken to a client-specific dashboard.  
    2. The dashboard lists all projects they are associated with.  
    3. Clients can navigate from the dashboard to their project's file management and asset review screens.  
    4. A dedicated section in the client portal allows them to view all their invoices.