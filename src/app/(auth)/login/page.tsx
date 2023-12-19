import { Metadata } from 'next'
import LoginForm from './form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login To Education-pj',
}

const LoginPage = () => {
  return <LoginForm />
}

export default LoginPage
