import { useForm } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

export const Route = createFileRoute('/register')({
  component: Register,
})

function Register() {

  const validation=z.object({
    name:z.string().min(2,'minimum 2 charector needed'),
    email:z.string().email('envalid email'),
    phone:z.string().min(10,"need 10 numbers"),
    password:z.string().check()
  })


  const registerForm=useForm({
    defaultValues:{
      name:'',
      email:"",
      phone:'',
      password:''
    },
    onSubmit:({value})=>{
      console.log(value);
      
    }
  })
  return <div>Hello "/users/register"!


    
      <form onSubmit={(e)=>{
        e.preventDefault()
        registerForm.handleSubmit()
      }}>

      <registerForm.Field name='name'validators={{onChange:validation.shape.name}}
      children={(field)=>(
      <div>
        <label htmlFor="">Name</label>

        <input type="text" value={field.state.value} name="name" id="" onChange={(e)=>field.handleChange(e.target.value)} onBlur={field.handleBlur}/>

        {field.state.meta.errors[0]&&(
          <span style={{color:'red'}}>{field.state.meta.errors[0].message}</span>
        )}
      </div>
      )}
      />
      <registerForm.Field name='email' validators={{onChange:validation.shape.email}}

      children={(field)=>(
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name='email' onChange={(e)=>field.handleChange(e.target.value)} value={field.state.value}/>
          {field.state.meta.errors[0]&&(
            <span>
              {field.state.meta.errors[0].message}
            </span>
          )}

        </div>
      )}
      />
      <registerForm.Field name='phone' validators={{onChange:validation.shape.phone}}

      children={(field)=>(
        <div>
          <label htmlFor="">Phone</label>
          <input type="text" name='phone' onChange={(e)=>field.handleChange(e.target.value)} value={field.state.value}/>
          {field.state.meta.errors[0]&&(
            <span>
              {field.state.meta.errors[0].message}
            </span>
          )}

        </div>
      )}
      />
      <registerForm.Field name='password' validators={{onChange:validation.shape.password}}

      children={(field)=>(
        <div>
          <label htmlFor="">Password</label>
          <input type="text" name='password' onChange={(e)=>field.handleChange(e.target.value)} value={field.state.value}/>
          {field.state.meta.errors[0]&&(
            <span>
              {field.state.meta.errors[0].message}
            </span>
          )}

        </div>
      )}
      />






<button type='submit'>submit</button>

      </form>

  </div>
}
