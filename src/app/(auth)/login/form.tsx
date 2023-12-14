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

const LoginForm = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (value: z.infer<typeof schema>) => {
    console.log(value)
  }

  return (
    <div className="w-96 bg-white p-5 shadow rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-400 text-sm font-medium">
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
                <FormLabel className="block text-gray-400 text-sm font-medium">
                  Password
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
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
