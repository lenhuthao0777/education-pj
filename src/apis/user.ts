import { API_SERVICE } from '@/lib/axios'

class UserService {
  static path = 'user'

  static login(body: any) {
    return API_SERVICE.post(`${this.path}/login`, { ...body }).then(
      (res) => res.data,
    )
  }
}

export default UserService
