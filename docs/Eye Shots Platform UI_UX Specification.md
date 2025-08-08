# **Eye Shots Platform UI/UX Specification**

### **Introduction**

This document defines the user experience goals, information architecture, user flows, and core component specifications for the Eye Shots Platform MVP. It is based on the provided PRD and is designed to guide the development of a cohesive, user-centered interface using the Ecme Next.js template.  
Change Log:  
| Date | Version | Description | Author |  
|------------|---------|--------------------------|--------|  
| 2025-08-09 | 1.0 | Initial Draft of Spec | Sally (UX Expert) |

### **Overall UX Goals & Principles**

* **Target User Personas:**  
  * **Internal Team Members:** Project Managers, Creatives, Admins who are power users needing efficiency, clarity, and control over projects.  
  * **Clients:** External stakeholders who are often less tech-savvy and require a simple, transparent, and guided experience.  
* **Usability Goals:**  
  * **Efficiency:** Internal users can create a new project and upload the first file in under 2 minutes.  
  * **Clarity:** A client can determine the status of any review asset within 30 seconds of logging in.  
  * **Simplicity:** The interface should feel intuitive, minimizing the need for user training.  
* **Design Principles:**  
  1. **Clarity First:** Prioritize clear information and actions over visual complexity.  
  2. **Progressive Disclosure:** Show only what is necessary for the current task. Reveal more complex options as the user needs them.  
  3. **Consistent Patterns:** Leverage the Ecme template's components to create a predictable and learnable interface.  
  4. **Guided Collaboration:** The UI should actively guide users through the review and approval process.

### **Information Architecture (IA)**

Site Map / Screen Inventory:  
This map outlines the primary screens for the MVP.  
graph TD  
    A\[Login/Auth\] \--\> B{User Type?};  
    B \--\>|Internal Team| C\[Dashboard (Project List)\];  
    B \--\>|Client| D\[Client Portal (Project List)\];

    C \--\> E\[Project View\];  
    D \--\> E;

    E \--\> F\[Project Dashboard\];  
    E \--\> G\[File Manager\];  
    E \--\> H\[Asset Review Board\];  
    E \--\> I\[Invoices\];  
    E \--\> J\[Project Settings\];

    subgraph "Internal Only"  
        C  
        I  
        J  
    end

**Navigation Structure:**

* **Primary Navigation (Main Sidebar):** Dashboard (Home), Projects, Settings (Internal Only).  
* **Secondary Navigation (Project-level):** Once inside a project: Dashboard, Files, Reviews, Invoices, Settings.

### **User Flows**

**Flow 1: Project Creation (Internal Team)**

* **User Goal:** To quickly set up a new project for a client.  
* **Entry Point:** "Create Project" button on the main Dashboard.  
* **Success Criteria:** A new project is created, a root folder is generated, and the user is redirected to the new project's dashboard.

graph TD  
    A\[Click 'Create Project'\] \--\> B\[Open Project Creation Modal\];  
    B \--\> C{Fill in Project Details};  
    C \--\> D\[Submit Form\];  
    D \--\> E\[System Creates Project & Root Folder\];  
    E \--\> F\[Redirect to New Project Dashboard\];

**Flow 2: Asset Review & Approval (Client & Team)**

* **User Goal:** To facilitate a clear and efficient review cycle for a creative asset.  
* **Entry Point:** "Submit for Review" option on a file in the File Manager.  
* **Success Criteria:** An asset moves through all defined reviewer groups and is marked as "Approved".

sequenceDiagram  
    participant Creative  
    participant PM as Project Manager  
    participant Client  
    participant System

    Creative-\>\>System: Uploads file & Submits for Review  
    System-\>\>PM: Notifies "Internal Review" group  
    PM-\>\>System: Opens asset, adds comments, Approves  
    System-\>\>Client: Notifies "Client Review" group  
    Client-\>\>System: Opens asset, requests changes  
    System-\>\>Creative: Notifies of change request  
    Creative-\>\>System: Uploads new version  
    System-\>\>PM: Notifies "Internal Review" group of new version  
    PM-\>\>System: Approves new version  
    System-\>\>Client: Notifies "Client Review" group  
    Client-\>\>System: Approves final version  
    System-\>\>System: Marks asset as "Approved"

### **Core Components & Screen Layouts**

This section describes the key screens and the necessary components, which will be built using the Ecme template's UI library.  
**1\. Main Dashboard (Project List)**

* **Purpose:** To provide a high-level overview of all projects.  
* **Key Elements:**  
  * A prominent "Create New Project" button (Internal Only).  
  * A searchable, filterable list/grid of project cards.  
  * Each card displays: Project Name, Client, Status, and key team members.

**2\. Project View**

* **Purpose:** The main container for a single project, housing the secondary navigation.  
* **Key Elements:**  
  * **Header:** Displays Project Name and current status.  
  * **Sidebar/Tabs:** Secondary navigation for Dashboard, Files, Reviews, Invoices, Settings.  
  * **Main Content Area:** Renders the selected view (e.g., the File Manager).

**3\. File Manager**

* **Purpose:** To manage all files and folders for a project.  
* **Key Elements:**  
  * Breadcrumb navigation for folders.  
  * A grid or list view of files and folders.  
  * Controls for: Upload, Create Folder.  
  * Context menu (on right-click or kebab icon) for files with options: Download, Submit for Review, Rename, Delete, Change Visibility (permission-dependent).

**4\. Asset Review Board**

* **Purpose:** The central hub for the review and approval workflow.  
* **Key Elements:**  
  * **Kanban-style Board:** Columns representing each "Reviewer Group".  
  * **Asset Cards:** Each card represents a file submitted for review.  
  * The card displays a thumbnail, file name, version number, and current status.  
  * A "Start Review" button on cards for the active reviewer.

**5\. Asset Review Modal/Page**

* **Purpose:** The dedicated interface for viewing and commenting on an asset.  
* **Key Elements:**  
  * **Media Viewer:** A large area to display the image or play the video.  
  * **Commenting Panel:** A scrollable list of comments.  
  * **Feedback Input:** A text area for adding new comments.  
  * **Decision Buttons:** "Approve" and "Request Changes".  
  * **Version History:** A dropdown or tab to view feedback on previous versions.