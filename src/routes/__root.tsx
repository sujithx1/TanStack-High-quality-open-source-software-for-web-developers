import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        {'  '} { ' '}
     <Link to="/users" className="[&.active]:font-bold">Users</Link>{" "}
     <Link to="/products" className="[&.active]:font-bold">Products</Link>
     <Link to="/signin" className="[&.active]:font-bold">Signin</Link>
     <Link to="/register" className="[&.active]:font-bold">Register</Link>

      </div>
      <hr />
      <Outlet /> 
      <TanStackRouterDevtools />
    </>
  ),
})