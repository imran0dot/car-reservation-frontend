import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLoginMutation } from '@/redux/features/auth/auth.api'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import { currentUser, setUser } from '@/redux/features/auth/auth.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

type FormData = z.infer<typeof formSchema>

export default function LoginForm() {
  const [loginHandler, { isLoading, isError }] = useLoginMutation();
  const user = useAppSelector((state: RootState) => currentUser(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate('/')
    }

  }, [user, navigate])
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: FormData) => {
    try {
      const loginData = await loginHandler(data);
      const userData = {
        name: loginData?.data?.data?.user?.name,
        email: loginData?.data?.data?.user?.email,
        role: loginData?.data?.data?.user?.role
      };

      dispatch(setUser(userData));
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
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
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>

            <div>
              Don't you have account? please <Link to="/registration" className='text-blue-600'>Register!</Link>
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