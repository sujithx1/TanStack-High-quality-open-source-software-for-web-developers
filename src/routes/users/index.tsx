// src/routes/users/index.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { users } from '../../data/users'

export const Route = createFileRoute('/users/')({
  component: () => (
    <div className="p-2">
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {/* Link to dynamic route */}
            <Link to="/users/$user" params={{ user: u.id }}>
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ),
})
