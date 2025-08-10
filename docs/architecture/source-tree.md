# **Source Tree**

This structure adapts the **Ecme starter template** to include Convex, Clerk, and the self-hosted file API.  
/  
├── src/                      \# Ecme template source  
│   ├── components/  
│   ├── configs/  
│   │   ├── app.config.ts     \# Update paths, disable mock API  
│   │   └── routes.config.ts  \# Define platform routes  
│   ├── services/  
│   │   ├── AuthService.ts    \# MODIFY to integrate with Clerk  
│   │   └── ...  
│   ├── store/                \# Zustand store  
│   ├── utils/  
│   └── views/                \# Platform pages  
├── convex/                   \# NEW: Convex backend functions and schema  
│   ├── schema.ts  
│   ├── users.ts  
│   ├── projects.ts  
│   └── http.ts               \# For webhook handlers (e.g., from Clerk)  
├── file-api/                 \# NEW: Simple Express.js API for file storage  
│   ├── index.ts  
│   ├── routes.ts  
│   └── package.json  
├── .env.local                \# Environment variables for Next.js, Clerk, Convex  
└── ...                       \# Other Ecme template root files
