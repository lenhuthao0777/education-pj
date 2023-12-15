'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import UserService from '@/apis/user'

const LoginForm = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'admin@gmail.com',
      password: '123456',
    },
  })

  const onSubmit = async (value: z.infer<typeof schema>) => {
    try {
      const data = await UserService.login(value)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-96 p-5 bg-white shadow rounded-md"
        >
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-center">Login</h2>
            <p className="text-xs text-center">
              Already have an account?{' '}
              <span className="font-semibold text-main-blue1">
                Login in here
              </span>
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-400 text-xs font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-3 py-2"
                    placeholder="enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-400 text-xs font-medium">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-3 py-2"
                    placeholder="enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full mt-10">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
