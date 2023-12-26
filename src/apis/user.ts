import { API_SERVICE } from '@/lib/axios'

class UserService {
  static path = 'user'

  static login(
    body: any,
  ): Promise<{ id: string; email: string; token: string } | any> {
    return API_SERVICE.post(`${this.path}/login`, { ...body }).then(
      (res) => res.data,
    )
  }

  static getUser(email: string): Promise<any> {
    return API_SERVICE.get(`${this.path}/me/${email}`).then((res) => res.data)
  }
}

export default UserService
