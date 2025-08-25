# 🚀 TanStack Study Project

This project is for learning **TanStack Router**, **TanStack Query**, and **TanStack Form** together in a simple React app.

---

## 🛠 Tech Stack
- ⚛️ React 18 + TypeScript
- 🛤️ TanStack Router (v1)
- 📦 TanStack Query (v5)
- 📝 TanStack Form
- 🎨 CSS (optional, for styling)

---

## 📌 What I Learned

### 1. TanStack Router
- Type-safe routing system.
- Auto-generated `routeTree.gen.ts` keeps routes strongly typed.
- Example usage:

```tsx
<Link to="/users/$userId" params={{ userId: "123" }}>
  Go to User 123
</Link>




2. TanStack Query

Handles data fetching, caching, and mutations.

Queries → for reading data (GET).

Mutations → for writing data (POST/PUT/DELETE).

const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(r => r.json()),
})


3. TanStack Form

Manages form state + validation.

Works great with validation libraries like Zod.

const form = useForm({
  defaultValues: { name: "" },
  onSubmit: async ({ value }) => {
    await mutation.mutateAsync(value)
  },
})







🔄 How Everything Fits

// Import the auto maticaly generated route tree

import { routeTree } from './routeTree.gen'



const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const queryClient = new QueryClient()

 <StrictMode>
      <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,   




🖼️ Diagram (Simple Flow)

Flow:

User navigates → handled by Router

Page needs data → Query fetches & caches it

User submits form → Form validates & triggers Mutation

UI updates automatically

✅ Next Steps

Add more routes: /products, /users, /about.

Try queries + mutations with a fake API (like jsonplaceholder
).

Create forms with Zod validation.

Deploy this repo to Vercel/Netlify.


📂 Project Structure

tanstack-study/
├── src/
│   ├── routes/       # TanStack routes
│   
│  
├── public/
├── package.json
├── tsconfig.json
└── README.md




# install deps
npm install

# run app
npm run dev



---

This gives you a **clean study repo with explanations + diagram**.  
👉 Do you want me to also **create a second diagram (step-by-step of how Router, Query, and Form interact)** so beginners can get it even faster?
