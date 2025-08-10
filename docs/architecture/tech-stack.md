# **Tech Stack**

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
