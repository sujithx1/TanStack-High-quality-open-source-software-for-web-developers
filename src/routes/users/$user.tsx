// src/routes/users/$userId.tsx
import { createFileRoute } from '@tanstack/react-router'
import { users } from '../../data/users'

export const Route = createFileRoute('/users/$user')({
  component: UserDetails,
})

function UserDetails() {
  // type-safe params from URL
  const { user } = Route.useParams()
  const userData = users.find((u) => u.id === user)

  if (!userData) return <div>User not found</div>

  return (
    <div className="p-2">
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Role: {userData.role}</p>
    </div>
  )
}
