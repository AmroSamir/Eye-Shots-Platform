# **DevOps & Maintenance (Self-Hosting on Contabo VPS)**

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