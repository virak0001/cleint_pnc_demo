import { defineStore } from 'pinia'
import { ref } from 'vue'

interface AuthInterface {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref()
  const isAuthenticated = ref()

  function login(payload: AuthInterface) {}

  return {
    user,
    isAuthenticated,
    login
  }
})
