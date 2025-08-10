# **Epic 3: Asset Review & Approval System**

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
