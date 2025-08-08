
# Ecme Documentation

## Introduction
Ecme is not just another web template—it's a meticulously crafted masterpiece that stands out in a market flooded with generic, poorly designed options. Every aspect of Ecme, from its elegant UI to its robust code architecture, has been thoughtfully designed to ensure unparalleled flexibility and scalability for your projects.

Unlike other templates that rely on common open-source libraries, Ecme features a comprehensive suite of custom-built UI components. These components are not only rich in functionality but also offer greater control, allowing you to tailor every detail to meet your specific needs.

Ecme is equipped with advanced features like multi-language support, dark and light mode, right-to-left layout, theme color customization, and the ability to switch seamlessly between six pre-designed layouts. Whether you're building a global platform or a niche application, Ecme's versatility has you covered.

Moreover, the included application examples are grounded in real-world use cases, giving you practical, ready-to-use solutions for your projects. With Ecme, you're not just buying a template—you're investing in a powerful, flexible foundation for your web development success.

#### Core libraries used
Here's a list of the core libraries we use in Ecme:  
**TypeScript**

---

## Installation
###### Prerequisites
Before getting started with Ecme, ensure your development environment has the following tools installed:
*   Node.js
*   npm

###### Installing Ecme
After extracting the downloaded `.zip` file, you'll find two folders: `TypeScript` and `JavaScript`. Each folder contains the following sub-directories:

*   **demo**  
    This folder contains the full demo of the project, including everything you see in the live preview. It's meant for reference only and _NOT_ recommended for development.
*   **starter**  
    The starter pack provides the basic setup for the template. This is where you should begin your development, creating pages and adding your code. We recommend copying this folder into your workspace.
*   **documentation**  
    This folder includes an `index.html` file that redirects to the online documentation.

Once you've chosen your desired package, navigate to the project's root directory (where `package.json` is located) and run the following command in your console:
```bash
npm install
```
This will install all necessary dependencies in the `node_modules` directory, allowing you to start development.

---

## TailwindCSS
Tailwind CSS is a utility-first CSS framework that provides predefined classes for building and designing UI directly within JSX. Ecme utilizes Tailwind as its core CSS framework, with most UI elements built entirely using its features. You can easily update the theme and base styles by modifying the `tailwind.config.cjs` file located in the root directory.

##### Tooling
If you use VS Code as your IDE, we recommend installing the [Tailwind CSS IntelliSense plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). This plugin provides autocomplete, syntax highlighting, and linting based on your Tailwind configuration, which can significantly speed up your development process.

> **Note**
> Some of our UI components use semantic classes with the Tailwind `@apply` directive. In certain cases, applying Tailwind classes directly to these components may not work as expected. You might need to use the `!important` modifier to override the default high specificity selectors.
> To make any utility class important, simply add an `!` character at the beginning, e.g.:

```jsx
<Dropdown className="bg-red-500!" />
```

For more information on utility classes and Tailwind configuration, visit the official documentation: https://tailwindcss.com/docs/utility-first

---

## CSS
While we primarily use Tailwind CSS, we also have additional custom styles written in standard CSS, located in the `src/assets/styles/*` directory. Because Tailwind depends on certain CSS processing features, we're using PostCSS as our preprocessor.

Here's an overview of our styles folder structure:
```
├── styles                     
|   ├── components               # styles for base UI components
|   ├── docs                     # styles for documentation components
|   ├── tailwind                 # Tailwind entry & base styles
|   ├── template                 # styles for template components
|   ├── vendors                  # styles for third-party libraries
|   └── index.css                # main entry CSS
```
Each folder inside the `styles` directory contains an `index.css` file that imports all other CSS files within the same folder. Eventually, all these `index.css` files are imported into the main entry CSS.

##### Custom CSS
If Tailwind doesn't cover all your styling needs, you can add custom CSS in this folder. We recommend using Tailwind's functions and directives when adding custom styles, such as `@apply`, `@layer`, and `theme()`.

For more details on how to use these features, you can check the official Tailwind documentation.

---

## Starter
As mentioned in the Installation section, we've provided a starter version with the essential core components and basic functionality setup. We highly recommend that developers use this version as the foundation for building their apps.

When you open the starter pack in your local environment, you'll be directed to the login page. You can sign in using the credentials _user: admin | password: 123Qwe_.

_Note: The starter version has the mock API enabled by default. All API calls will point to the mock server. If you want to disable this feature or learn more about the mock API, check out the Mock API documentation._

##### Default Configurations
Below are some of the default configurations for the starter version. You can modify these settings to suit your needs.

**AppConfig - [Documentation]**

**Typescript** / **Javascript**
```ts
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'cookies',
    enableMock: true,
    activeNavTranslation: false
}
```

**ThemeConfig - [Documentation]**

**Typescript** / **Javascript**
```ts
export const themeConfig: ThemeConfig = {
    schema: 'default',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}
```
**RoutesConfig - [Documentation]**
```js
const publicRoutes = [
    {
        key: 'signIn',
        path: '/sign-in',
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: '/sign-up',
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: '/forgot-password:id',
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: '/reset-password',
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
]
export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
]
```

**NavConfig - [Documentation]**
```js
const navigationConfig = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        submenu: []
    }
]
```
### Updating
Since the platform doesn't include a built-in version control system, updating your templates can be challenging. However, here are some tips to help you keep your templates up to date more easily.
1. Before starting a new project, consider hosting the original template in your own repository.
2. Create a branch from the repository to use as your workspace.
3. When a new update is released, push the latest version's content to your repository.
4. Merge your workspace branch with the original branch to incorporate the latest changes.
  
---

## Development
### Development Server
Once you've installed all the dependencies, you can start the development server by running the following command in your terminal:
```bash
npm run dev
```
Open your browser and go to http://localhost:5173/. The app will automatically reload whenever you make changes to the source files.

### Folder Structure
In this section you will find the basic folder structure and everything you need to get the template up and running. Both the demo and starter versions have the same structure, except that the starter version will have fewer files & folders than the demo version as they are not required in the starter.

Below is a schematic diagram of directory structure:

**Typescript** / **Javascript**
```
├── public                        # Static resource
|   ├── img                       # Images
|   ├── data                      # Static data
|   └── ...                       # Other static files
├── src
│   ├── @types                    # type files that share across the temeplate
│   │   ├── ...                   
│   ├── assets                    # App static resource
│   │   ├── maps                  # Map meta data 
│   │   ├── markdown              # Markdown files
│   │   ├── styles                # Global CSS files
│   │   └── svg	                  # SVG files
│   ├── components                # General components
│   │   ├── docs                  # Documentations related components
│   │   ├── layout                # Layout components
│   │   ├── route                 # Components related to route
│   │   ├── shared                # Upper level components built on top of ui components
│   │   ├── template              # Template components, such as Header, Footer, Nav, etc...
│   │   └── ui                    # Bottom level components, such as Button, Dropdown, etc...
│   ├── configs                   # Configuration files        
│   │   └── ...          
│   ├── constants                 # Constant files
│   │   └── ...      
│   ├── locales                   # Localization configuration
│   │   ├── lang
│   │   |   └── ...               # Language JSON files
│   │   └── index.ts              # Localization entry file
│   ├── mock                      # Mock data for fake API Calls
│   │   ├── data                  # Mock data
│   │   |   └── ...               # Mock data TS files
│   │   ├── fakeApi               # Fake API configuration
│   │   |   └── ...               # Fake API TS files
│   │   └── index.ts              # Mock entry file
│   ├── services                  # Service files for managing API integrations
│   │   ├── ApiService.ts         # Api request & response handler
│   │   ├── axios                 # Axios configs & interceptors
|   |   |   └── ...
│   │   └── ...                   # Other service files
│   ├── store                     # Zustand store hooks for the template core states
│   │   └── ...                    
│   ├── utils                     # All reusable function & hooks
│   │   ├── hooks                 # Hooks
│   │   |   └── ...      					
│   │   └── ...                   # Reusable functions 
│   ├── views                     # View files that render all the pages
│   |   ├── ...                   # All view files
│   |   └── index.ts              # View entry point
│   |   └── View.tsx              # View component
│   |   App.tsx                   # App setup
│   |   index.css                 # Css entry
│   |   main.tsx                  # React entry
│   |   mdDynamicImporter.tsx     # Dynamic md file import handling
│   └── vite-env.d.ts             # Vite environment declaration
├── .env                          # File to stores environment configuration and secrets
├── .gitignore                    # Ignore file for git
├── .prettierignore               # Ignore file for prettier
├── .prettierrc                   # Prettier config 
├── eslint.config.js              # eslint config
├── index.html                    # Entry file for the web
├── package.json                  
├── package.lock.json            
├── postcss.config.cjs            # PostCss configuration file
├── README.md 
├── tailwind.config.cjs           # TailwindCSS configuration file
├── tsconfig.eslint.json          # Typescript config for eslint
├── tsconfig.json                 # Project Typescript configuration file
├── tsconfig.eslint.json          # Typescript config for node
└── vite.config.ts                # Config file for vite
```
This folder structure provides a clear organization of resources, components, configuration, and assets, making it easier to manage and scale your project. Each folder and file is purposefully placed to ensure a clean and maintainable codebase.

## Routing
Ecme uses React Router as its core routing system. In this guide, you'll learn how to create new routes and understand how existing routes work.

##### Overview
The router configuration for the template can be found in `src/configs/routes.config/index.ts`. There are two main groups of routes:
```js
export const publicRoutes = [
    ...
]
export const protectedRoutes = [
    ...
]
```
*   **publicRoutes:** This group includes all routes that are accessible to all users.
*   **protectedRoutes:** This group contains routes that require authentication to access.

##### Adding a New Route
To add a new route, simply include the following code in the appropriate route group, depending on the access level you want to assign:
```js
export const protectedRoutes = [
    {
        key: 'a-unique-id-for-this-view',
        path: 'my-new-view-path',
        component: lazy(() => import('@/views/MyNewComponent')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless'
        }
    },			
]
```

##### Authority
Ecme routes support simple role-based access control. You can specify the roles that have access to a route by using the `authority` field. For example, the following route is only accessible to users with the `'admin'` or `'user'` roles. If the `authority` field is left as an empty array, the route will be open to all roles.
```js
export const protectedRoutes = [
    {
        ...
        authority: ['admin', 'user'],
    },			
]
```
The default `AuthorityGuard` checks the current user's role from the Zustand state (`auth.user.authority`). You can use this as a base to extend or customize your access control.

##### Meta
The `meta` field allows you to pass additional information to the `PageContainer` or the view component associated with the route.
```js
export const protectedRoutes = [
    {
        ...
        meta: {
            pageContainerType: 'gutter',
            header: {
                title: 'My tittle',
                description: 'Some description'
                contained: false,
                extraHeader: lazy(() => import('/SomeComponent')),
            },
            footer: false,
            layout: 'blank',
        }
    },			
]
```
The view component will be able to access all the `meta` data specified.

<table style="min-width: 100px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>properties</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>pageContainerType</strong></p></td><td colspan="1" rowspan="1"><p><strong>Defines the type of the view container</strong></p></td><td colspan="1" rowspan="1"><p><code>'default'</code><strong> | </strong><code>'gutterless'</code><strong> | </strong><code>'contained'</code></p></td><td colspan="1" rowspan="1"><p><code>'default'</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>pageBackgroundType</strong></p></td><td colspan="1" rowspan="1"><p><strong>Define the type of the page background</strong></p></td><td colspan="1" rowspan="1"><p><code>'default'</code><strong> | </strong><code>'plain'</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>header</strong></p></td><td colspan="1" rowspan="1"><p><strong>Specifies the page header &amp; further configuration</strong></p></td><td colspan="1" rowspan="1"><p><code>{ title?: string | ReactNode | LazyExoticComponent&lt;() =&gt; JSX.Element&gt; description?: string | ReactNode contained?: boolean extraHeader?: string | ReactNode | LazyExoticComponent&lt;() =&gt; JSX.Element&gt; }</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>footer</strong></p></td><td colspan="1" rowspan="1"><p><strong>Determines whether to display the footer</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p><code>true</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>layout</strong></p></td><td colspan="1" rowspan="1"><p><strong>Overrides the current layout for this page</strong></p></td><td colspan="1" rowspan="1"><p><code>'blank'</code><strong> | </strong><code>'collapsibleSide'</code><strong> | </strong><code>'stackedSide'</code><strong> | </strong><code>'topBarClassic'</code><strong> | </strong><code>'framelessSide'</code><strong> | </strong><code>'contentOverlay'</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr></tbody></table>

## State management
In this template, we've integrated Zustand for state management. Zustand is a small, fast, and scalable state management solution that allows you to manage state outside of the React component tree, providing a more efficient way to handle global state across your application.

We use Zustand to manage some of the core states in the template, but it's entirely optional for you to continue using it in your projects. If you prefer a different state management library or even the built-in React state, you can easily switch to what best suits your needs.

##### Creating a Zustand State
Creating a Zustand store is straightforward. Below is an example of how you can create a global state to manage a simple counter:

**Typescript**
```ts
import create from 'zustand'

type CouterState = {
    count: number
}

type CouterAction = {
    increaseCount: () => void
    decreaseCount: () => void
}
// Define the store
const useCounterStore = create<CouterState & CouterAction>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore
```

**Javascript**
```js
import create from 'zustand'

// Define the store
const useCounterStore = create((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore
```

##### Using Zustand State in a Component
Once you've created the store, using it in a component is simple. Here's how you can integrate the `useCounterStore` into a React component:
```tsx
import useCounterStore from './path/to/store'

const Counter = () => {
    const { count, increaseCount, decreaseCount } = useCounterStore()
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}

export default Counter
```
This is just a basic example to get you started. Zustand is flexible and can be used for more complex state management scenarios as your application grows. If you want to explore more advanced usage, we recommend checking out the official Zustand documentation.

## API Integration
In this guide, you'll learn how to integrate your backend API with the template. We'll cover everything from configuring your environment to setting up a proxy, and creating service files for seamless API communication.

##### Turning off mock api
> **Important:**
> Before you begin, make sure to turn off the mock API by setting `enableMock` to `false` in `src/configs/app.config.ts`. The template defaults to mock API, so disabling this will allow your app to connect to your actual backend endpoints.

##### Setting Up a Proxy
If your backend API is hosted on a different server than your frontend, you'll need to set up a proxy to avoid issues with cross-origin requests. You can configure the proxy either through the `package.json` file or via `vite.config.ts` for more flexibility.

*   **Option 1: Manual Setup in Vite**  
    For a more customized setup, configure the proxy in `vite.config.ts`:
    ```ts
    export default defineConfig({
        plugins: ...,
        server: {
            proxy: {
                '/api': {
                    // Update the target URL with your backend server's URL
                    target: 'http://yourDevDomain.com',
                    changeOrigin: true,
                    secure: false,
                }
            }
        }
    })
    ```
    
*   **Option 2: Using `package.json`**  
    Add the following line to your `package.json` file to quickly set up a proxy:
    ```json
    "proxy": "http://yourDevDomain.com"
    ```
    
##### Configuring the API Prefix
You can define a prefix for your API endpoints in `src/configs/app.config.ts` using the `apiPrefix` property. This prefix will be prepended to all API requests, allowing for a consistent and manageable API structure.
```ts
const appConfig: AppConfig = {
    apiPrefix: '/api',
    // other configurations...
}
```

##### Step-by-Step integration
Follow the steps below to make backend api linkage working.

1.  Start by creating a new service file specific to your feature or module. For instance, if you're working on user management, create a file named `UserManagementService.ts` in the `services` directory.
    
2.  Inside the service file, declare an asynchronous function to handle the API request. This function should utilize `ApiService.fetchData`, accepting two generic types: Response and Request, along with the Axios configuration. Here's an example:
    
    **Typescript**
    ```ts
    type MyApiResponse = {
        someResponseData: string
        someResponseData2: boolean
    }
    
    type MyApiRequest = {
        someRequestData: string
    }
    
    export async function myApi (data: MyApiRequest) {
        return ApiService.fetchData<MyApiResponse, MyApiRequest>({
            url: '/my-api-url',
            method: 'post',
            data
        })
    }
    ...
    ```
    or forwarding the type to generic from consumer level:
    
    **Typescript**
    ```ts
    import ApiService from "./ApiService"
    
    export async function myApi<TResponse, TRequest>(data: TRequest) {
        return ApiService.fetchData<TResponse, TRequest>({
            url: '/my-api-url',
            method: 'post',
            data
        })
    }
    ...
    ```
    **Javascript**
     ```js
    import ApiService from "./ApiService"
    
    export async function myApi(data) {
        return ApiService.fetchData({
            url: '/my-api-url',
            method: 'post',
            data
        })
    }
    ...
    ```

3.  And now you can hook up this API in your component.
    
    **Typescript**
    ```tsx
    import { useEffect } from 'react'
    import { myApi } from './MyService.ts'
    
    type MyApiResponse = {
        someResponseData: string
        someResponseData2: boolean
    }
    
    type MyApiRequest = {
        someRequestData: string
    }

    const MyComponent = props => {
    
        const fetchData = async () => {
            const reqeustParam: MyApiRequest = { key: 'value'}
            try {
                const resp = await myApi<MyApiResponse, MyApiRequest>(reqeustParam)
                if (resp.data) {
                    // ...do something
                }
            } catch (errors) {
                // ...handle errors
            }
        }
        
        useEffect(() => {
            fetchData()
        }, [])
    
        return (
            {/* ... */}
        )
    }
    ```
    **Javascript**
    ```jsx
    import { useEffect } from 'react'
    import { myApi } from './MyService.js'

    const MyComponent = props => {
        const fetchData = async () => {
            const reqeustParam = { key: 'value'}
            try {
                const resp = await myApi(reqeustParam)
                if (resp.data) {
                    // ...do something
                }
            } catch (errors) {
                // ...handle errors
            }
        }
        
        useEffect(() => {
            fetchData()
        }, [])
    
        return (
            {/* ... */}
        )
    }
    ```
> Note: You can also use data-fetching libraries like SWR or TanStack Query for a more declarative approach to data fetching. The choice depends on your specific needs.
    
## Authentication
This guide provides an overview of the authentication system implemented in the template.

##### useAuth
The authentication system is managed through the `AuthProvider` component, which should wrap your application or relevant parts of it. It manages auth states and provides the following methods via the `useAuth` hook:

<table style="min-width: 100px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>properties</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>authenticated</strong></p></td><td colspan="1" rowspan="1"><p><strong>A boolean indicating whether the user is currently authenticated.</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>user</strong></p></td><td colspan="1" rowspan="1"><p><strong>An object containing the user's details, such as </strong><code>userName</code><strong>, </strong><code>email</code><strong>, and </strong><code>authority</code></p></td><td colspan="1" rowspan="1"><p><code>{ userId: string userName: string authority: string[] avatar: string email: string }</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>signIn</strong></p></td><td colspan="1" rowspan="1"><p><strong>A method to sign in a user with their credentials</strong></p></td><td colspan="1" rowspan="1"><p><code>(values: {email: string, password: string}) =&gt; Promise&lt;{status: 'success' | 'failed', message: string}&gt;</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>signUp</strong></p></td><td colspan="1" rowspan="1"><p><strong>A method to register a new user</strong></p></td><td colspan="1" rowspan="1"><p><code>(values: {userName: string, email: string, password: string}) =&gt; Promise&lt;{status: 'success' | 'failed', message: string}&gt;</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>signOut</strong></p></td><td colspan="1" rowspan="1"><p><strong>A method to sign out the current user</strong></p></td><td colspan="1" rowspan="1"><p><code>() =&gt; void</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>oAuthSignIn</strong></p></td><td colspan="1" rowspan="1"><p><strong>A method to handle OAuth sign-in callbacks for third-party authentication providers.</strong></p></td><td colspan="1" rowspan="1"><p><code>callback: (payload: { onSignIn: (tokens: Token, user?: User) =&gt; void redirect: () =&gt; void }) =&gt; void</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr></tbody></table>

Here's how you can use the `useAuth` hook in components:
```tsx
import { useAuth } from '@/auth'

const YourComponent = () => {
    const { signIn, signOut, user, authenticated } = useAuth();

    const handleLogin = async () => {
        const credentials = { email: 'user@example.com', password: 'password' };
        const result = await signIn(credentials);
        if (result?.status === 'success') {
            console.log('Logged in successfully');
        }
        if (result?.status === 'failed') {
            console.error('Failed to login')
        }
    };

    const handleLogout = () => {
        signOut();
    };

    return (
        <div>
            {authenticated ? <p>Welcome, {user.userName}</p> : <p>Please log in</p>}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
```
    
##### OAuth Sign-In
If you're implementing OAuth with third-party providers, the `oAuthSignIn` method will be essential. You can use it within your OAuth callback to complete the sign-in process and manage tokens.
```tsx
import { useAuth } from '@/auth'
import SomeOauthSdkSignInMethod from 'SomeOauthSdk'

const YourComponent = () => {
    const { oAuthSignIn } = useAuth();

    const handleOAuthSignIn = () => {
        oAuthSignIn(async ({redirect, onSignIn}) => {
            try {
                const resp = await SomeOauthSdkSignInMethod()
                if (resp) {
                    /** extract token & user information for the response */ 
                    const { token, user } = resp
                    onSignIn({accessToken: token}, user)
                    redirect()
                }
            } catch (error) {
                console.error('Failed to login')
            }
        })
    }

    const handleLogout = () => {
        signOut();
    };

    return (
        <button onClick={handleOAuthSignIn}>Login with OAuth</button>
    );
};
```
    
##### Customizing the Data Models
Since not all applications have the same data model, you can customize the data structures in `@/types/auth.ts` and `@/auth/AuthProvider.ts` to suit your needs. Adjust the types and interfaces defined for `User`, `Token`, and other authentication-related entities according to your application's requirements.

```ts
// Example: Modifying the User type
export type User = {
    userId?: string | null
    avatar?: string | null
    userName?: string | null
    email?: string | null
    authority?: string[]
    // Add your custom fields here
    role?: string | null
};
```
    
##### Diving into AuthProvider
If the default authentication implementation doesn't meet your needs, feel free to dive into the `AuthProvider` to make any necessary modifications. This component handles the core logic for authentication, including token management, session handling, and more. Customizing this logic can help you better align the authentication system with your application's specific requirements.
    
**Typescript** / **Javascript**
```ts
import { apiSignIn, apiSignOut, apiSignUp } from '@/services/AuthService'

function AuthProvider({ children }: AuthProviderProps) {
    
    // ...

    const handleSignIn = (...) => {
        // ... /** Your implementation here */
    }

    const handleSignOut = () => {
        // ... /** Your implementation here */
    }

    const signIn = async (values: SignInCredential): AuthResult => {
        try {
            const resp = await apiSignIn(values)
            if (resp) {
                handleSignIn(...)
            }
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const signOut = async () => {
        try {
            await apiSignOut()
        } finally {
            handleSignOut()
            navigate(appConfig.unAuthenticatedEntryPath)
        }
    }
    // ...   
    
    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            // ...
        }}>
            {children}
        </AuthContext.Provider>
    )
}
```
    
### Mock Api
A mock API is a tool that simulates the behavior of a real API, providing data responses as if they were from an actual server. This can be extremely useful in situations where the real API is not yet fully developed, or when you need to simulate API calls for unit testing.

Ecme utilizes the [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) library to handle API mocking. All API interactions in our demo operate through this adapter.

##### Disabling Mock API
By default, the mock API is enabled in the starter-kit. If you want to disable it, simply set the `enableMock` field to `false` in `src/configs/app.config.ts`.
```ts
const appConfig = {
    // ...,
    enableMock: false
}
```
    
##### Using the Mock API
If you intend to use the mock API, follow these steps to create fake database data and APIs:

1.  **Setup**  
    Go to `src/mock/MockAdapter.ts`. This file contains the basic configuration for the mock API.
    ```ts
    import MockAdapter from 'axios-mock-adapter'
    import AxiosBase from '@/services/axios/AxiosBase'

    export const mock = new MockAdapter(AxiosBase)
    ```
    
2.  **Create a Mock API**  
    To create a mock API, add it to `src/mock/MockAdapter.ts`. For example, you can create `userFakeApi.ts`. Remember to import the mock instance from `MockAdapter.ts` to create a route.
    ```ts
    import { mock } from '../MockAdapter'

    mock.onGet('/api/users').reply(() => {
        return [200, [
            { id: '1', name: 'Carolyn Perkins' },
            { id: '2', name: 'Terrance Moreno' },
            { id: '3', name: 'Ron Vargas' },
        ]];
    })
    ```
    
3.  **Next, import your `userFakeApi.ts` file into the mock entry file `src/mock/index.ts`.**
    ```ts
    import { mock } from './MockAdapter'
    import './fakeApi/userFakeApi'
    // ...
    mock.onAny().passThrough();
    ```

Now, you can make requests to this mock API and receive the static data you set up as the response.

**Typescript**
```ts
// service
import ApiService from "./ApiService"

type GetUserResponse = {
    id: string
    name: string
    email: string
}[]

export async function apiGetUsers () {
    return ApiService.fetchData<GetUserResponse>({
        url: '/api/getUsers',
        method: 'get'
    })
}
```
**Javascript**
```js
// service
import ApiService from "./ApiService"

export async function apiGetUsers () {
    return ApiService.fetchData({
        url: '/api/getUsers',
        method: 'get'
    })
}
```

```tsx
// component
import { useEffect } from 'react'
import { apiGetUsers } from './YourService'

const YourComponent = () => {
    const fetchData = async () => {
        try {
            const resp = await apiGetUsers()
            console.log(resp.data)
        } catch (errors) {
            // handle errors
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        // your component JSX
    )
}
```
For more information on using `axios-mock-adapter`, visit the official GitHub repository.

## Firebase
Firebase is a platform developed by Google that provides a wide range of tools and services to help you build mobile and web applications. It offers backend services like authentication, real-time databases, cloud storage, and hosting, making it a powerful choice for developers.

Our template includes basic Firebase integration out of the box. If your application uses Firebase, this guide will help you seamlessly incorporate Firebase into the template.

##### Prerequisites
*   **Create a Firebase project in the Firebase Console.**
    1.  Go to the Firebase Console and create a new project.  
    2.  Once your project is set up, click the "Web" option to add a web app to your project.
    3.  Follow the instructions to register the app and obtain your Firebase configuration object.
   
##### Set Up Firebase Configuration
*   Navigate to the `firebase.config.ts` file in the `/configs` directory of the template. Place your Firebase configuration details in this file, which you can find in your Firebase Console. For better security, it's recommended to store these values in a `.env` file.
    ```js
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
    
    export default firebaseConfig
    ```
    
*   Example firebase config in `.env` file.
    ```env
    VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxx
    VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxxxx.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=xxxxxxxxxx
    VITE_FIREBASE_STORAGE_BUCKET=xxxxxxxxxx.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxx
    VITE_FIREBASE_APP_ID=xxxxxxxxxx
    VITE_FIREBASE_MEASUREMENT_ID=G-xxxxxxxxxx
    ```

##### Initialize Firebase
We have initialized a basic Firebase instance in `src/services/firebase/FirebaseApp.ts`. This initialization serves as a base for setting up other Firebase services like Firebase Authentication and Firebase Firestore. You can add additional Firebase packages as needed.
```ts
import { initializeApp } from "firebase/app"
import firebaseConfig from '@/configs/firebase.config';

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp
```

##### Integrate Firebase
This section will guide you through examples of signing in with Firebase and retrieving data from Firebase.

*   **Sign in with Firebase OAuth**  
    Firebase supports various authentication methods, including passwords, phone numbers, and popular identity providers like Google, Facebook, and Twitter.
    
    Below is an example of integrating Google OAuth. First, create a file named `FirebaseGoogleAuth.ts` and set up a `signInWithFirebaseGoogle` method:
    ```ts
    import {
        GoogleAuthProvider,
        signInWithPopup,
    } from 'firebase/auth'
    import FirebaseAuth from './FirebaseAuth';
    
    const googleAuthProvider = new GoogleAuthProvider();
    
    export const signInWithFirebaseGoogle = async () => {
        try {
            const resp = await signInWithPopup(FirebaseAuth, googleAuthProvider);
            const token = await resp.user.getIdToken()
            return {
                token,
                user: resp.user
            }
        } catch (error) {
            throw error
        }
    }
    ```
    
    Next, import this method into `OAuthService.ts` under the `apiGoogleOauthSignIn` function:
    ```ts
    import { signInWithFirebaseGoogle } from './firebase/FirebaseGoogleAuth'
    
    export async function apiGoogleOauthSignIn() {
        return await signInWithFirebaseGoogle()
    }
    ```
    
    Now, integrate it with your sign-in button. Ensure that `apiGoogleOauthSignIn` is called within the `oAuthSignIn` method from the `useAuth` hook to update the state after OAuth login is complete.
    ```tsx
    import Button from '@/components/ui/Button'
    import { useAuth } from '@/auth'
    import { apiGoogleOauthSignIn } from '@/services/OAuthServices'
    
    const OauthSignIn = () => {
        const { oAuthSignIn } = useAuth()
    
        const handleGoogleSignIn = async () => {
            oAuthSignIn(async ({redirect, onSignIn}) => {
                try {
                    const resp = await apiGoogleOauthSignIn()
                    if (resp) {
                        const { token, user } = resp
                        onSignIn({accessToken: token}, user)
                        redirect()
                    }
                } catch (error) {
                    console.error(error)
                }
            })
        }
    
        return (
            <Button className="flex-1" onClick={handleGoogleSignIn} type="button">
                <div className="flex items-center justify-center gap-2">
                    <span>Sign in with Google</span>
                </div>
            </Button>
        )
    }
    
    export default OauthSignIn
    ```
    
*   **Sign in with Firebase Email & Password**  
    If you want to use sign-in with email and password with Firebase, you can use the `signInWithEmailAndPassword` method within `apiSignIn` in `AuthService.ts`. Here’s an example:
    ```ts
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import FirebaseAuth from './firebase/FirebaseAuth';
    
    export async function apiSignIn(data: SignInCredential) {
        try {
            const resp = await signInWithEmailAndPassword(FirebaseAuth, data.email, data.password);
            const token = await resp.user.getIdToken();
            return {
                token,
                user: resp.user,
            };
        } catch (error) {
            throw new Error('Sign in failed:' + error);
        }
    }
    ```
    
*   **Retrieve Data from Firebase**  
    Here's an example of how to retrieve data from Firebase Firestore. In this example, we fetch a user's data from the Firestore database and display it in a component.
    
    **Typescript** / **Javascript**    
    ```tsx
    import { doc, getDoc } from "firebase/firestore"; 
    import db from "@/services/firebase/FirebaseDB";
    import { useEffect, useState } from "react";
    
    const Example = () => {
    
        const [data, setData] = useState<{firstName?: string, lastName?: string}>({})
    
        useEffect(() => {
            const getData = async () => {
                try {
                    const docRef = doc(db, "users", "1");
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setData(docSnap.data())
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error('Error fetching document:', error)
                }
            }
            getData()
        }, [])
    
        return (
            <div>
                {data?.firstName} {data?.lastName} 
            </div>
        )
    }
    
    export default Example
    ```
    
##### Removing Firebase
If your app does not require Firebase, you can delete `firebase.config.ts` & the entire `/firebase` folder under `src/services`.

##### Conclusion
You can now leverage Firebase's powerful features to enhance the functionality and user experience of your application.

For more detailed information on using Firebase services, be sure to refer to the [Firebase documentation](https://firebase.google.com/docs).

---

## Configuration

***Demo Configuration***

**Typescript** / **Javascript**
```ts
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/dashboards/ecommerce',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'localStorage',
    enableMock: true,
    activeNavTranslation: true
}
```

***Starter Configuration***

**Typescript** / **Javascript**
```ts
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'cookies',
    enableMock: true,
    activeNavTranslation: false
}
```

##### Configuration Metadata
<table style="min-width: 125px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>Property</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default (Demo)</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default (Starter)</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>apiPrefix</strong></p></td><td colspan="1" rowspan="1"><p><strong>The base path for all API requests.</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p_><code>'/api'</code></p_></td><td colspan="1" rowspan="1"><p><code>'/api'</code></p_></td></tr><tr><td colspan="1" rowspan="1"><p><strong>authenticatedEntryPath</strong></p></td><td colspan="1" rowspan="1"><p><strong>The path users are redirected to after successful authentication.</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p_><code>'/app/sales/dashboard'</code></p_></td><td colspan="1" rowspan="1"><p><code>'/home'</code></p_></td></tr><tr><td colspan="1" rowspan="1"><p><strong>unAuthenticatedEntryPath</strong></p></td><td colspan="1" rowspan="1"><p><strong>The path users are redirected to if they are not authenticated.</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p_><code>'/sign-in'</code></p_></td><td colspan="1" rowspan="1"><p><code>'/sign-in'</code></p_></td></tr><tr><td colspan="1" rowspan="1"><p><strong>locale</strong></p></td><td colspan="1" rowspan="1"><p><strong>The default language/locale for the app.</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p_><code>'en'</code></p_></td><td colspan="1" rowspan="1"><p><code>'en'</code></p_></td></tr><tr><td colspan="1" rowspan="1"><p><strong>enableMock</strong></p></td><td colspan="1" rowspan="1"><p><strong>Enables or disables API requests being routed to a mock server.</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p_><code>true</code></p_></td><td colspan="1" rowspan="1"><p><code>true</code></p_></td></tr><tr><td colspan="1" rowspan="1"><p><strong>accessTokenPersistStrategy</strong></p></td><td colspan="1" rowspan="1"><p><strong>The choice of storage where auth token store.</strong></p></td><td colspan="1" rowspan="1"><p><code>'localStorage' | 'sessionStorage' | 'cookies'</code></p></td><td colspan="1" rowspan="1"><p_><code>'cookies'</code></p_></td><td colspan="1" rowspan="1"><p><code>'cookies'</code></p_></td></tr><tr><td colspan="1" rowspan="1"><p><strong>activeNavTranslation</strong></p></td><td colspan="1" rowspan="1"><p><strong>Enables or disables the tranlation fucntionality that implmented in navigation.</strong></p></td><td colspan="1" rowspan="1"><p><code>Boolean</code></p></td><td colspan="1" rowspan="1"><p_><code>true</code></p_></td><td colspan="1" rowspan="1"><p><code>false</code></p_></td></tr></tbody></table>
    
### Layouts
Ecme provide 6 types of post login layouts & 3 types of auth layouts, all layouts component can be found under directory `src/components/layouts/PostLoginLayout/components*` and all the components used within layouts can be found under `src/components/template/*`.

The following are the post-login layouts that we have:
*   Collapsible side - `'collapsibleSide'`
*   Stacked side - `'stackedSide'`
*   Top bar classic - `'topBarClassic'`
*   Frameless side - `'framelessSide'`
*   Content overlay - `'contentOverlay'`
*   Blank - `'blank'`
    
##### Configuring Layout
You can config the initial layout in `src/configs/theme.config.ts` with the string value above.
```js
export const themeConfig = {
    // ...
    layout: {
        type: 'framelessSide',
        // ...
    },
}
```
Here's available values & key for configuring the `layout` field:

<table style="min-width: 100px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>properties</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>type</strong></p></td><td colspan="1" rowspan="1"><p><strong>Type of the application layout</strong></p></td><td colspan="1" rowspan="1"><p><code>'blank'</code><strong> | </strong><code>'collapsibleSide'</code><strong> | </strong><code>'stackedSide'</code><strong> | </strong><code>'topBarClassic'</code><strong> | </strong><code>'framelessSide'</code><strong> | </strong><code>'contentOverlay'</code></p></td><td colspan="1" rowspan="1"><p><code>'modern'</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>sideNavCollapse</strong></p></td><td colspan="1" rowspan="1"><p><strong>Whether to collapse the side navigation (only applicable when </strong><code>type</code><strong> is </strong><code>'classic'</code><strong> or </strong><code>'modern'</code><strong>)</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p><code>false</code></p></td></tr></tbody></table>

##### Overriding layouts
In general, all route views will follow the settings of the layout in `theme.config.ts`. However, if there are some cases where you want to show a different layout in a certain route view, you can use the layout value you wish under the route `meta` to override the current layout as we mentioned in the Routing guide.
```js
export const protectedRoutes = [
    {
        key: 'a-unique-id-for-this-view'
        path: 'path',
        component: React.lazy(() => import('views/Component')),
        authority: [],
        meta: {
            // ...
            layout: 'blank'
        }
    },			
]
```

##### Auth layouts
Configuring auth layout is slightly different from the above. Just visit `src/components/layouts/AuthLayout/AuthLayout.ts` and replace the wrapper component. For example, switching `side` to `simple`:

**Typescript** / **Javascript**
```tsx
import { useMemo, lazy } from 'react'
import type { CommonProps } from '@/@types/common'
import type { LazyExoticComponent } from 'react'

type LayoutType = 'simple' | 'split' | 'side'
type Layouts = Record<LayoutType, LazyExoticComponent<<T extends CommonProps>(props: T) => JSX.Element>>

// const currentLayoutType: LayoutType = 'side'
const currentLayoutType: LayoutType = 'simple' // Changed line

const layouts: Layouts = {
    simple: lazy(() => import('./Simple')),
    split: lazy(() => import('./Split')),
    side: lazy(() => import('./Side')),
}

const AuthLayout = ({ children }: CommonProps) => {
    const Layout = useMemo(() => {
        return layouts[currentLayoutType]
    }, [])

    return (
        <Layout>{children}</Layout>
    )
}

export default AuthLayout
```

### Navigation Config
We form our navigation structure as an array of objects & render it into the UI eventually. You can change or customize the app navigation very easily by accessing `src/configs/navigation.config/index.ts`.

Here is the type for a single menu item:
```ts
export type HorizontalMenuMeta = {
    layout: 'default'
} | {
    layout: 'columns'
    showColumnTitle?: boolean
    columns: 1 | 2 | 3 | 4 | 5
} | {
    layout: 'tabs'
    columns: 1 | 2 | 3 | 4 | 5
}

export interface NavigationTree {
    key: string
    path: string
    isExternalLink?: boolean
    title: string
    translateKey: string
    icon: string
    type: 'title' | 'collapse' | 'item'
    authority: string[]
    subMenu: NavigationTree[]
    description?: string
    meta?: {
        horizontalMenu?: HorizontalMenuMeta
        description?: {
            translateKey: string
            label: string
        }
    }
}
```

<table style="min-width: 100px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>properties</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>key</strong></p></td><td colspan="1" rowspan="1"><p><strong>A unique key that needs to match the route this menu navigates to</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>path</strong></p></td><td colspan="1" rowspan="1"><p><strong>A URL that this menu item links to</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>isExternalLink</strong></p></td><td colspan="1" rowspan="1"><p><strong>Whether to open the link in a new tab upon click</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>title</strong></p></td><td colspan="1" rowspan="1"><p><strong>Rendered text of this menu item</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>translateKey</strong></p></td><td colspan="1" rowspan="1"><p><strong>Translate key to translate the rendered text in the menu item, fallback to </strong><code>title</code><strong> if empty or invalid</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>icon</strong></p></td><td colspan="1" rowspan="1"><p><strong>Render icon in menu item, string value must tally with object key in </strong><code>navigation-icon.config.tsx</code></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>type</strong></p></td><td colspan="1" rowspan="1"><p><strong>To define the type of the current menu item</strong></p></td><td colspan="1" rowspan="1"><p><code>'title'</code><strong> | </strong><code>'collapse'</code><strong> | </strong><code>'item'</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>authority</strong></p></td><td colspan="1" rowspan="1"><p><strong>Display menu items to users who have the roles given, there will be no access block if this field is undefined or an empty array</strong></p></td><td colspan="1" rowspan="1"><p><code>string[]</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>subMenu</strong></p></td><td colspan="1" rowspan="1"><p><strong>Whether this menu item has a child, it will render a menu group under this menu item. If the </strong><code>type</code><strong> is </strong><code>'title'</code><strong> or </strong><code>'collapse'</code><strong>, this field accepts properties within this table</strong></p></td><td colspan="1" rowspan="1"><p><code>navigationConfig[]</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>meta</strong></p></td><td colspan="1" rowspan="1"><p><strong>This is an optional configuration field for navigation. It can include additional information that's only needed in specific use cases</strong></p></td><td colspan="1" rowspan="1"><p><code>{ horizontalMenu?: HorizontalMenuMeta description?: { translateKey: string label: string } }</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>meta.horizontalMenu</strong></p></td><td colspan="1" rowspan="1"><p><strong>Further configuration for horizontal menu, e.g </strong><code>layout</code><strong>, </strong><code>columns</code><strong> &amp; etc.</strong></p></td><td colspan="1" rowspan="1"><p><code>{ layout: 'default' } | { layout: 'columns' showColumnTitle?: boolean columns: 1 | 2 | 3 | 4 | 5 } | { layout: 'tabs' columns: 1 | 2 | 3 | 4 | 5 }</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>meta.description</strong></p></td><td colspan="1" rowspan="1"><p><strong>Description of the page, description only available when </strong><code>themeConfig.layout.type</code><strong> is </strong><code>'contentOverlay'</code></p></td><td colspan="1" rowspan="1"><p><code>navigationConfig[]</code></p></td><td colspan="1" rowspan="1"><p><strong>-</strong></p></td></tr></tbody></table>

An example of a structured navigation config:
```ts
const navigationConfig = [
    {
        key: 'uiComponent',
        path: '',
        title: 'Ui Component',
        translateKey: 'nav.uiComponents',
        icon: 'uiComponents',
        type: 'title',
        authority: ['admin', 'user'],
        /** We can define menu config here if we are using horizontal menu */
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            {
                key: 'uiComponent.common',
                path: '',
                title: 'Common',
                translateKey: 'nav.uiComponentsCommon.common',
                icon: 'common',
                type: 'collapse',
                authority: ['admin', 'user'],
                subMenu: [
                    {
                        key: 'uiComponent.common.button',
                        path: '/button',
                        title: 'Button',
                        translateKey: 'nav.uiComponentsCommon.button',
                        icon: '',
                        type: 'item',
                        authority: ['admin', 'user'],
                        subMenu: []
                    },
                    {
                        key: 'uiComponent.common.typography',
                        path: '/typography',
                        title: 'Typography',
                        translateKey: 'nav.uiComponentsCommon.typography',
                        icon: '',
                        type: 'item',
                        authority: ['admin', 'user'],
                        subMenu: []
                    }
                ]
            }
        ]
    }
]
```

##### Configuring navigation icon
Navigation icon configuration is placed in a separate file in `src/configs/navigation-icon.config.tsx`.

In the above example, we use the string value `uiComponents` in the `icon` field. We must then use this value in `navigation-icon.config.ts` to define the icon for the callout.

First, import the icon you want from `react-icons`:
```ts
import { FaBeer } from 'react-icons/fa'

const navigationIcon = {}
```

Set the value used in the `icon` field as the key and the imported icon component as the value:
```tsx
import { FaBeer } from 'react-icons/fa'

const navigationIcon = {
    uiComponents: <FaBeer />
}
```
Now the corresponding menu item will render `FaBeer` as the menu icon.

## Theming
We manage the theme color scheme using CSS variables, making it easy to customize and extend the theme. You can modify the theme colors by editing the CSS variables in the file located at: `assets/styles/tailwind/index.css`.

Here is the default setup for the light and dark modes:
```css
:root {
    --neutral: #ffffff;
    --primary: #2a85ff;
    --primary-deep: #0069f6;
    --primary-mild: #4996ff;
    --primary-subtle: #2a85ff1a;
    --error: #ff6a55;
    --error-subtle: #ff6a551a;
    --success: #10b981;
    --success-subtle: #05eb7624;
    --info: #2a85ff;
    --info-subtle: #2a85ff1a;
    --warning: #f59e0b;
    --warning-subtle: #ffd40045;
    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-200: #e5e5e5;
    --gray-300: #d4d4d4;
    --gray-400: #a3a3a3;
    --gray-500: #737373;
    --gray-600: #525252;
    --gray-700: #404040;
    --gray-800: #262626;
    --gray-900: #171717;
    --gray-950: #0a0a0a;
}

.dark {
    --neutral: #ffffff;
    --primary: #2a85ff;
    --primary-deep: #0069f6;
    --primary-mild: #4996ff;
    --primary-subtle: #2a85ff1a;
    --error: #ff6a55;
    --error-subtle: #ff6a551a; 
    --success: #10b981;
    --success-subtle: #05eb7624;
    --info: #2a85ff;
    --info-subtle: #2a85ff1a;
    --warning: #f59e0b;
    --warning-subtle: #ffd40045;
    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-200: #e5e5e5;
    --gray-300: #d4d4d4;
    --gray-400: #a3a3a3;
    --gray-500: #737373;
    --gray-600: #525252;
    --gray-700: #404040;
    --gray-800: #262626;
    --gray-900: #171717;
    --gray-950: #0a0a0a;
}
```
   
##### Setting Up a Dynamic Theme
If you want to enable dynamic theme switching in your application, you'll need to take a few extra steps. First, configure your theme schema in the `configs/theme.config.ts` file:

**Typescript** / **Javascript**
```ts
export type Variables = 
  | "primary"
  | "primaryDeep"
  | "primaryMild"
  | "primarySubtle"
  | "neutral";

export type ThemeVariables = Record<
  "light" | "dark", 
  Record<Variables, string>
>

/** Default theme schema should correspond to the CSS variables */
const defaultTheme: ThemeVariables = {
    light: {
        primary: "#2a85ff",
        primaryDeep: "#0069f6",
        primaryMild: "#4996ff",
        primarySubtle: "#2a85ff1a",
        neutral: "#ffffff",
    },
    dark: {
        primary: "#2a85ff",
        primaryDeep: "#0069f6",
        primaryMild: "#4996ff",
        primarySubtle: "#2a85ff1a",
        neutral: "#ffffff",
    },
}

/** Example of a custom green theme schema */
const greenTheme: ThemeVariables = {
    light: {
        primary: "#0CAF60",
        primaryDeep: "#088d50",
        primaryMild: "#34c779",
        primarySubtle: "#0CAF601a",
        neutral: "#ffffff",
    },
    dark: {
        primary: "#0CAF60",
        primaryDeep: "#088d50",
        primaryMild: "#34c779",
        primarySubtle: "#0CAF601a",
        neutral: "#ffffff",
    },
}

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
    default: defaultTheme,
    green: greenTheme,
}

export default presetThemeSchemaConfig
```

Now that your theme schemas are set up, you can use the `useThemeStore` hook to switch between different theme colors. Here's an example of how you might implement a theme switcher:
```tsx
import classNames from '@/utils/classNames'
import { TbCheck } from 'react-icons/tb'
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config'
import { useThemeStore } from '@/store/themeStore'

const ThemeSwitcher = () => {
    const schema = useThemeStore((state) => state.themeSchema)
    const setSchema = useThemeStore((state) => state.setSchema)
    const mode = useThemeStore((state) => state.mode)

    return (
        <div className="inline-flex items-center gap-2">
            {Object.entries(presetThemeSchemaConfig).map(([key, value]) => (
                <button
                    key={key}
                    className={classNames(
                        'h-8 w-8 rounded-full flex items-center justify-center border-2 border-white',
                        schema === key && 'ring-2 ring-primary',
                    )}
                    style={{ backgroundColor: value[mode].primary || '' }}
                    onClick={() => setSchema(key)}
                >
                    {schema === key ? (
                        <TbCheck className="text-neutral text-lg" />
                    ) : (
                        <></>
                    )}
                </button>
            ))}
        </div>
    )
}

export default ThemeSwitcher
```
This guide should help you effectively manage and switch themes within your application. You can extend the theme schemas as needed to fit your design requirements.

## Internationalization
Ecme uses [react-i18next](https://react.i18next.com/) for internationalization, making it easy to manage and translate text across different languages. The relevant files are located in the `src/locales/` directory.

##### Translating text
To translate text within your components, you can use the `useTranslation` hook provided by Ecme. This hook wraps the standard `useTranslation` from `react-i18next` and allows you to access the translation function `t` for translating keys defined in your locale files.
```tsx
import { useTranslation } from '@/utils/hooks/useTranslation'

const Component = () => {
    const { t } = useTranslation()

    return (
        <div>{t('your.translate.key')}</div>
    )
}

export default Component
```

##### Changing language
If you need to switch languages dynamically, you can use the `i18n` object provided by the `useTranslation` hook to change the current language.
```tsx
import { useTranslation } from 'react-i18next'

const Component = () => {
    const { i18n } = useTranslation()

    return (
        <button onClick={() => i18n.changeLanguage('fr')}>Change language</button>
    )
}

export default Component
```

##### Add new locale
We store all the locale data under `src/locales/lang/*`. To add a new locale, create a JSON file under this directory. For example `fr.json`:
```json
{
    "your": {
        "translate": {
            "key": "votre clé de traduction"
        }
    }
}
```

Now you can import this file into `src/locales/index.ts` & inject it into the `resources` field. This is the entry file for all locales. Also, create an object to load date locale dynamically from `dayjs`.

**Typescript** / **Javascript**
```ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './lang/en.json'
import fr from './lang/fr.json'

const resources = {
    en: {
        translation: en
    },
    fr: { // <--- this key will be the value you use on the changeLanguage method
        translation: fr
    },
}

// Ensure the key is consistent with the resource to load the relevant locale from day.js
export const dateLocales: {
    [key: string]: () => Promise<ILocale>;
} = {
    en: () => import('dayjs/locale/en'),
    fr: () => import('dayjs/locale/fr'),
}
```

And, the new locale is basically set.

##### Setting the Default Language
To set the default language, you might need to visit `src/configs/app.config.ts` and change the `locale` field value:

**Typescript** / **Javascript**
```ts
export const appConfig: AppConfig = {
    // ...
    locale: 'fr'
}
```

##### Turn on translation for navigation
We have embedded the translation feature into the navigation, but it is not active by default in the starter. To turn it on, you need to visit `src/configs/app.config.ts` and change the `activeNavTranslation` field to `true`.

**Typescript** / **Javascript**
```ts
const appConfig: AppConfig = {
    // ...
    activeNavTranslation: true
}
```

##### Inject locale to the App
Now you need to inject the locale setup into `App.tsx`:
```ts
// ...
import './locales'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            {/* ... */}
        </Theme>
    )
}

export default App
```

## Dark/Light Mode
To initialize dark or light mode for the app, simply set `mode` field as `'light'` or `'dark'` in `src/configs/theme.config.ts`. For example:
```ts
export const themeConfig = {
    // ...
    mode: 'dark'
}
```
   
##### Hook
You can access or update the mode in a component via our prepared hook.

**Typescript** / **Javascript**
```tsx
import React from 'react'
import Switcher from '@/components/ui/Switcher'
import useDarkMode from '@/utils/hooks/useDarkMode'

const ModeSwitcher = () => {

    const [isDark, setIsDark] = useDarkMode()

    const onSwitchChange = (checked: boolean) => {
        setIsDark(checked ? 'dark' : 'light')
    }

    return (
        <div>
            <Switcher 
                value={isDark}
                onChange={checked => onSwitchChange(checked)}
            />
        </div>
    )
}

export default ModeSwitcher
```
   
## Direction
To initialize the app direction, simply set the `direction` field as `'ltr'` or `'rtl'` in `src/configs/theme.config.ts`. For example:
```ts
export const themeConfig = {
	// ...
	direction: 'rtl'
}
```

##### Hook
You can access or update the direction in a component via our prepared hook.

**Typescript** / **Javascript**
```tsx
import Button from '@/components/ui/Button'
import InputGroup from '@/components/ui/InputGroup'
import useDirection from '@/utils/hooks/useDirection'
import type { Direction } from '@/@types/theme';

const dirList = [
	{ value: 'ltr', label: 'LTR' },
	{ value: 'rtl', label: 'RTL' }
]

const DirectionSwitcher = () => {

	const [direction, setDirection] = useDirection()

	const onDirChange = (val: Direction) => {
		setDirection(val)
	}

	return (
		<InputGroup size="sm">
			{
				dirList.map(dir => (
					<Button 
						key={dir.value}
						active={direction === dir.value}
						onClick={() => onDirChange(dir.value)}
					>
						{dir.label}
					</Button>
				))
			}
		</InputGroup>
	)
}

export default DirectionSwitcher
```

## Overall Theme Config
The file `src/configs/theme.config.ts` contains the default theme settings for the template. These configurations are predefined but can be customized to suit your needs.

> If you realize that the theme did not change after setting a new value to the configuration, you could consider clearing the `localStorage`. If you have no requirement to memorize users' preferred appearance in the app, you can remove the persist method from the store. Refer to the State Persistence section below.

**Typescript** / **Javascript**
```ts
import { THEME_ENUM } from '@/constants/theme.constant'
import {
    Direction,
    Mode,
    ControlSize,
    LayoutType,
} from '@/@types/theme'

export type ThemeConfig = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    controlSize: ControlSize
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

export const themeConfig: ThemeConfig = {
    themeSchema: '',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}
```

##### Configuration Properties
<table style="min-width: 100px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>Prop</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>themeSchema</strong></p></td><td colspan="1" rowspan="1"><p><strong>Sets the color scheme of the template. You can leave this field empty if you are having a dynamic theme in your app</strong></p></td><td colspan="1" rowspan="1"><p><code>string</code></p></td><td colspan="1" rowspan="1"><p><code>''</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>direction</strong></p></td><td colspan="1" rowspan="1"><p><strong>Defines the text direction for the template.</strong></p></td><td colspan="1" rowspan="1"><p><code>'ltr'</code><strong> | </strong><code>'rtl'</code></p></td><td colspan="1" rowspan="1"><p><code>'ltr'</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>mode</strong></p></td><td colspan="1" rowspan="1"><p><strong>Toggles between Light and Dark mode.</strong></p></td><td colspan="1" rowspan="1"><p><code>'light'</code><strong> | </strong><code>'dark'</code></p></td><td colspan="1" rowspan="1"><p><code>'light'</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>panelExpand</strong></p></td><td colspan="1" rowspan="1"><p><strong>Determines whether the side panel is expanded by default.</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p><code>false</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>controlSize</strong></p></td><td colspan="1" rowspan="1"><p><strong>Sets the initial size of control inputs.</strong></p></td><td colspan="1" rowspan="1"><p><code>'xs'</code><strong> | </strong><code>'sm'</code><strong> | </strong><code>'md'</code><strong> | </strong><code>'lg'</code></p></td><td colspan="1" rowspan="1"><p><code>'md'</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>layout.type</strong></p></td><td colspan="1" rowspan="1"><p><strong>Defines the overall layout style of the application.</strong></p></td><td colspan="1" rowspan="1"><p><code>'blank'</code><strong> | </strong><code>'collapsibleSide'</code><strong> | </strong><code>'stackedSide'</code><strong> | </strong><code>'topBarClassic'</code><strong> | </strong><code>'framelessSide'</code><strong> | </strong><code>'contentOverlay'</code></p></td><td colspan="1" rowspan="1"><p><code>'modern'</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>layout.sideNavCollapse</strong></p></td><td colspan="1" rowspan="1"><p><strong>Specifies whether the side navigation is collapsed. This option is only applicable when </strong><code>type</code><strong> is set to </strong><code>'collapsibleSide'</code><strong> or </strong><code>'framelessSide'</code><strong>.</strong></p></td><td colspan="1" rowspan="1"><p><code>boolean</code></p></td><td colspan="1" rowspan="1"><p><code>false</code></p></td></tr></tbody></table>

##### State Persistence
The `themeConfig` state is persisted by default, meaning your settings will be remembered by the browser. If you prefer not to persist the theme state for users, you can modify `src/store/themeStore.ts` by removing the `persist` method from the Zustand store.

The persisted state is also stored in the browser's `localStorage`. If you encounter issues where theme changes are not reflected, you may want to clear the `localStorage` key named `'theme'`. You can do this by running `localStorage.removeItem('theme')` in the browser console.

---

## Deployment
### Build production
Run the following command to build the application into the `/dist` directory (or `/build` depending on your `vite.config`):
```bash
npm run build
```
If you are having issues with deployment, try to check out the guide from the [Vite official docs](https://vitejs.dev/guide/static-deploy.html).

## Sources & Credits
<table style="min-width: 75px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p><strong>Name</strong></p></th><th colspan="1" rowspan="1"><p><strong>URL</strong></p></th><th colspan="1" rowspan="1"><p><strong>License</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>@floating-ui/react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/floating-ui/floating-ui</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@floating-ui/core</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/fullcalendar/fullcalendar</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@fullcalendar/daygrid</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/fullcalendar/fullcalendar</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@fullcalendar/interaction</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/fullcalendar/fullcalendar</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@fullcalendar/react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/fullcalendar/fullcalendar</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@fullcalendar/timegrid</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/fullcalendar/fullcalendar</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@hello-pangea/dnd</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/hello-pangea/dnd</strong></p></td><td colspan="1" rowspan="1"><p><strong>Apache</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@hookform/resolvers</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/react-hook-form/resolvers</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tailwindcss/typography</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/tailwindlabs/tailwindcss-typography</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tanstack/match-sorter-utils</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/tanstack/table</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tanstack/react-table</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/tanstack/table</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tanstack/react-virtual</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/TanStack/virtual</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@testing-library/jest-dom</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/testing-library/jest-dom</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@testing-library/react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/testing-library/react-testing-library</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@testing-library/user-event</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/testing-library/user-event</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tiptap/pm</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/ueberdosis/tiptap</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tiptap/react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/ueberdosis/tiptap</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@tiptap/starter-kit</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/ueberdosis/tiptap</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@visx/pattern</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/airbnb/visx</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>@vitejs/plugin-react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/vitejs/vite-plugin-react</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>axios</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/axios/axios</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>axios-mock-adapter</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/ctimmerm/axios-mock-adapter</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>classnames</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/JedWatson/classnames</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>dayjs</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/iamkun/dayjs/</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>d3-fetch</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/d3/d3-fetch</strong></p></td><td colspan="1" rowspan="1"><p><strong>ISC</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>d3-dsv</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/d3/d3-dsv</strong></p></td><td colspan="1" rowspan="1"><p><strong>ISC</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>d3-scale</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/d3/d3-scale</strong></p></td><td colspan="1" rowspan="1"><p><strong>ISC</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>firebase</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/firebase/firebase-js-sdk</strong></p></td><td colspan="1" rowspan="1"><p><strong>Apache</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>framer-motion</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/framer/motion</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>gantt-task-react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/MaTeMaTuK/gantt-task-react</strong></p></td><td colspan="1" rowspan="1"><p><strong>Apache</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>html-react-parser</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/remarkablemark/html-react-parser</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>js-cookies</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/js-cookie/js-cookie</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>lodash</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/lodash/lodash</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>marked</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/markedjs/marked</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>postcss-import</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/postcss/postcss-import</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/facebook/react/</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-apexcharts</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/apexcharts/react-apexcharts</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-dom</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/facebook/react</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-highlight-words</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/bvaughn/react-highlight-words</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-hook-form</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/react-hook-form/react-hook-form</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-apexcharts</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/apexcharts/react-apexcharts</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-i18next</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/i18next/react-i18next</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-icons</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/react-icons/react-icons</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-markdown</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/remarkjs/react-markdown</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-modal</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/reactjs/react-modal</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-number-format</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/s-yadav/react-number-format</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-router-dom</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/remix-run/react-router</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-scroll</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/fisshy/react-scroll</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-select</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/JedWatson/react-select</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-simple-maps</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/zcreativelabs/react-simple-maps</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-syntax-highlighter</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/react-syntax-highlighter/react-syntax-highlighter</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-tooltip</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/wwayne/react-tooltip</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>react-window</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/bvaughn/react-window</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>simplebar-react</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/grsmto/simplebar</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>swr</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/vercel/swr</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>autoprefixer</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/postcss/autoprefixer</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>postcss</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/postcss/postcss</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>postcss-preset-env</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>tailwindcss</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/tailwindlabs/tailwindcss</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>tailwind-merge</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/dcastil/tailwind-merge</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>typescript</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/microsoft/TypeScript</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>vite</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/vitejs/vite</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>vite-plugin-dynamic-import</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/vite-plugin/vite-plugin-dynamic-import</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>yet-another-react-lightbox</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/igordanchenko/yet-another-react-lightbox/tree/main</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>zod</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/colinhacks/zod</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>zustand</strong></p></td><td colspan="1" rowspan="1"><p><strong>https://github.com/pmndrs/zustand</strong></p></td><td colspan="1" rowspan="1"><p><strong>MIT</strong></p></td></tr></tbody></table>
```