<template>
  <div class="font-sans xl:px-32 py-2 xl:pb-5 flex justify-center">
    <div class="w-full md:w-6/12 md:p-5">
      <h1 class="text-4xl mx-auto leading-tight font-bold text-gray-500 mb-4">
        Welcome to Solar PV
      </h1>
      <p class="text-sm font-bold text-gray-400 mb-8">
        Register to get your own system
      </p>

      <div class="w-full">
        <form action="" method="POST" v-on:submit="submit">
          <div class="bg-red-700 text-white rounded-md mb-8 px-4 py-2" v-if="errors">
            <ul class="px-2">
              <li v-for="error in errors" class="list-disc">
                {{ error[0] }}
              </li>
            </ul>
          </div>

          <div class="mb-4 relative shadow-lg w-full bg-white">
            <label for="name" class="uppercase text-xs text-gray-300 absolute top-1 pl-5">
              Name
            </label>
            <input class="px-4 py-5 w-full text-gray-500 focus:outline-none text-sm border-transparent border-l-4
                focus:border-indigo-500" :class="{'!border-red-400': errors?.name}" type="text" id="name"
                   name="name" v-model="name" required />
          </div>

          <div class="mb-4 relative shadow-lg w-full bg-white">
            <label for="email" class="uppercase text-xs text-gray-300 absolute top-1 pl-5">
              Email
            </label>
            <input class="px-4 py-5 w-full text-gray-500 focus:outline-none text-sm border-transparent border-l-4
                focus:border-indigo-500" :class="{'!border-red-400': errors?.email}" type="email" id="email"
                   name="email" v-model="email" required />
          </div>

          <div class="mb-4 relative shadow-lg w-full bg-white">
            <label for="password" class="uppercase text-xs text-gray-300 absolute top-1 pl-5">
              Password
            </label>
            <input class="px-4 py-5 w-full text-gray-500 focus:outline-none text-sm border-transparent border-l-4
                focus:border-indigo-500" :type="showPassword ? 'text' : 'password'" id="password" name="password"
                   v-model="password" :class="{'!border-red-400': errors?.password}" required />
            <span v-on:click="showPassword = !showPassword" class="absolute right-8 top-0 text-gray-400 text-sm
                font-bold cursor-pointer">
                Show
            </span>
          </div>

          <div class="mb-4 relative shadow-lg w-full bg-white">
            <label for="password_confirmation" class="uppercase text-xs text-gray-300 absolute top-1 pl-5">
              Confirm Password
            </label>
            <input class="px-4 py-5 w-full text-gray-500 focus:outline-none text-sm border-transparent border-l-4
                focus:border-indigo-500" :type="showPassword ? 'text' : 'password'" id="password_confirmation"
                   name="password_confirmation" v-model="password_confirmation" required />
          </div>

          <div class="mt-8 md:mt-12 flex">
            <button class="bg-indigo-500 hover:bg-indigo-900 text-white px-16 py-4 rounded-3xl uppercase font-bold
                mx-auto" type="submit" :disabled="loading">
              Sign Up {{ loading ? '...' : '' }}
            </button>
          </div>
        </form>

        <div class="mt-4 md:mt-8 flex justify-center">
          <RouterLink to="login" class="flex font-semibold uppercase text-gray-500">
            Log In
            <img src="@/assets/img/icon-logout.png" class="ml-4 w-6 h-6" alt="image" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from '@/utils/axios';

export default {
  data() {
    return {
      errors: null,
      loading: false,
      showPassword: false,
      name: 'test',
      email: 'test@test.com',
      password: 'password',
      password_confirmation: 'passwor',
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.errors = null;
      if (this.password !== this.password_confirmation) {
        this.errors = this.errors ?? {}
        this.errors.password = ['Password not matched']
      }

      if (! this.errors) {
        this.loading = true;

        axios.post('/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        }).then((response) => {
          const data = response.data
          if (data?.token) {
            localStorage.setItem('authToken', data.token)
            localStorage.setItem('authUser', JSON.stringify(data.user))
            window.location.href = '/'
          }
        }).catch((error) => {
          this.errors = this.errors ?? {}
          this.errors = error.response?.data?.errors;
        }).finally(() => {
          this.loading = false;
        })
      }
    }
  }
}
</script>
