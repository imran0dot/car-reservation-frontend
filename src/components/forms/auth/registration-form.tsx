'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRegisterMutation } from '@/redux/features/auth/auth.api'
import { Link } from 'react-router-dom'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
      message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    }),
})

type FormData = z.infer<typeof formSchema>

export default function RegistrationForm() {
  const [registerUser, { isLoading, isError }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const registerResponse = await registerUser(data);
      console.log(registerResponse);
      // Handle successful registration (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (optional: show an error message)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              placeholder="+1 (555) 123-4567"
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className='space-y-6 w-full'>
            <Button
              type="submit"
              className="w-full"
              disabled={!isValid || isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </Button>

            <div>
              Already account exist? please <Link to="/login" className='text-blue-600'>login!</Link>
            </div>

          </div>
        </CardFooter>
      </form>
      {isError && (
        <Alert variant="destructive" className="mt-4 text-red-600">
          <AlertDescription>Something went wrong please try again later</AlertDescription>
        </Alert>
      )}
    </Card>
  )
}