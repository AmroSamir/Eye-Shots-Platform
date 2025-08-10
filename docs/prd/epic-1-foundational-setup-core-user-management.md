# **Epic 1: Foundational Setup & Core User Management**

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
