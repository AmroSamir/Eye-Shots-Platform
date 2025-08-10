# **Infrastructure and Deployment**

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
