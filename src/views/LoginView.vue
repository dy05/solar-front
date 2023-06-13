<template>
  <div class="font-sans px-2 xl:px-32 pt-4 pb-8 flex">
    <div class="bg-gray-100 shadow-lg rounded-lg container flex h-auto m-auto">
      <div class="hidden xl:block relative md:pl-2 pt-4 md:w-1/3 h-auto">
        <span class="bg-indigo-600 h-16 w-16 block transform rotate-45 ml-1/3"></span>
        <span class="bg-indigo-900 h-4 w-4 block transform rotate-45 absolute right-16 top-16"></span>
        <span class="bg-yellow-400 h-6 w-6 block transform rotate-45 absolute left-16 bottom-8 z-10"></span>
        <span class="bg-yellow-400 w-80 h-80 block rounded-full -mt-4 mb-48"></span>
        <span class="bg-indigo-600 w-16 h-16 block rounded-full absolute bottom-0 -mb-4 right-16"></span>
        <!--      <img src="@/assets/img/font-1.png" class="mt-8 absolute left-8 w-72 top-24" alt="image" />-->
      </div>

      <div class="w-full md:w-6/12 mx-auto xl:w-2/3 xl:bg-white p-8 xl:pr-16 xl:pl-32">
        <h1 class="text-right text-sm text-gray-400 font-semibold mb-8">
          Authentification
        </h1>
        <div class="w-full xl:w-11/12 px-1">
          <h1 class="text-4xl leading-tight font-bold text-gray-500 mb-4">
            Welcome to Solar PV
          </h1>
          <p class="text-sm font-bold text-gray-400 mb-8">
            A pv system control
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
                <label for="email" class="uppercase text-xs text-gray-300 absolute top-1 pl-5">
                  Email
                </label>
                <input class="px-4 py-5 w-full text-gray-500 focus:outline-none text-sm border-transparent border-l-4
                focus:border-indigo-500" :class="{'border-red-400': errors?.email != null}" type="email" id="email"
                       name="email" v-model="email" required />
              </div>
              <div class="mb-4 relative shadow-lg w-full bg-white">
                <label for="password" class="uppercase text-xs text-gray-300 absolute top-1 pl-5">
                  Password
                </label>
                <input class="px-4 py-5 w-full text-gray-500 focus:outline-none text-sm border-transparent border-l-4
                focus:border-indigo-500" type="password" id="password" name="password" v-model="password" required />
                <a href="#" class="absolute right-8 top-0 text-gray-400 text-sm font-bold">
                  Oublier
                </a>
              </div>

              <div class="mt-16 flex">
                <button class="bg-indigo-500 hover:bg-indigo-900 text-white px-16 py-4 rounded-3xl uppercase font-bold
                mx-auto" type="submit" :disabled="loading">
                  Connexion {{ loading ? '...' : '' }}
                </button>
              </div>
            </form>
            <div class="mt-5 flex">
              <RouterLink to="register" class="mx-auto text-gray-400 font-bold">
                Register
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      errors: null,
      loading: false,
      email: 'admin@admin.com',
      password: 'password',
    }
  },
  methods: {
    ...mapActions('users', ['login']),
    submit(e) {
      e.preventDefault();
      this.errors = null;
      this.loading = true;

      this.login({
        email: this.email,
        password: this.password
      }).catch((error) => {
        this.errors = error.data?.errors;
      }).finally(() => {
        this.loading = false;
      })
    }
  }
}
</script>
