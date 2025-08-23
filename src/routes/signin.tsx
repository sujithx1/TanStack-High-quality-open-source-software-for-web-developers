import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signin')({
  component: SignupForm,
})
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
})

export default function SignupForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
    onSubmit: ({ value }) => {
      console.log('Form submitted:', value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex flex-col gap-4 max-w-sm"
    >
      {/* Name field */}
      <form.Field
        name="name"
        validators={{
          onChange: schema.shape.name,
        }}
        children={(field) => (
          <div>
            <label>Name</label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              className="border p-2 rounded w-full"
            />
            {field.state.meta.errors[0] && (
  <span className="text-red-500 text-sm">
    {field.state.meta.errors[0].message}
  </span>
)}

          </div>
        )}
      />

      {/* Email field */}
      <form.Field
        name="email"
        validators={{
          onChange: schema.shape.email,
        }}
        children={(field) => (
          <div>
            <label>Email</label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              className="border p-2 rounded w-full"
            />
            {field.state.meta.errors[0] && (
              <span className="text-red-500 text-sm">
                {field.state.meta.errors[0].message}
              </span>
            )}
          </div>
        )}
      />

      <button
        type="submit"
        disabled={!form.state.isValid}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Submit
      </button>
    </form>
  )
}
