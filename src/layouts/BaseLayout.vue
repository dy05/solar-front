<template>
  <div class="font-sans px-4 pt-4 pb-8 flex bg-gray-100 text-gray-600">
    <div class="container m-auto">
      <div class="flex flex-wrap md:justify-between">
        <div class="w-full">
          <h1 class="w-full xl:w-7/12 text-xl text-gray-800 font-bold mb-4 bg-white rounded-sm shadow-md px-4 py-2">
            PV System
          </h1>
        </div>

        <div class="w-full md:w-3/12">
          <div class="w-full bg-white rounded-sm shadow-md pt-4 pb-8 px-4 mb-4">
            <ul class="space-y-2">
              <li>
                <RouterLink class="active text-gray-800" to="/dashboard">
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink class="active text-gray-800" to="/account">
                  Profile
                </RouterLink>
              </li>
              <li>
                <RouterLink class="active text-gray-800" to="/users">
                  Users List
                </RouterLink>
              </li>
              <li>
                <RouterLink class="active text-gray-800" to="/users">
                  Projects List
                </RouterLink>
              </li>
              <li>
                <RouterLink class="text-gray-400" to="/login">
                  Add Project
                </RouterLink>
              </li>
              <li>
                <a v-on:click.prevent="logout" class="text-gray-400" href="/logout">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="absolute top-2 right-2 p-3 text-md text-white bg-green-400 rounded-md leading-2" id="alertDelete"
             v-if="message">
          {{ message }}
        </div>

        <div class="w-full md:w-8/12 flex flex-col">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      message: null,
    }
  },
  computed: {
    ...mapGetters('users', ['authUser'])
  },
  methods: {
    ...mapActions('users', ['fetchAuthUser', 'logout'])
  },
  beforeMount() {
    this.fetchAuthUser();
  }
}
</script>

