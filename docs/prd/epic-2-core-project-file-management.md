# **Epic 2: Core Project & File Management**

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
