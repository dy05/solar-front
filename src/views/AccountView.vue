<template>
  <div class="bg-white shadow-md p-4 py-2 pb-5">
    <div class="bg-blue-400 overflow-hidden">
      <div class="bg-white p-3 shadow-sm rounded-sm">
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span class="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
          <span class="tracking-wide">
            My Profile
          </span>
        </div>
        <div class="text-gray-700">
          <div class="grid md:grid-cols-2 text-sm" v-if="authUser">
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">
                First name
              </div>
              <div class="px-4 py-2">
                {{ authUser.first_name }}
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">
                Last Name
              </div>
              <div class="px-4 py-2">
                {{ authUser.last_name }}
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">
                Email
              </div>
              <div class="px-4 py-2">
                {{ authUser.email }}
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Contact No.</div>
              <div class="px-4 py-2">
                {{ authUser.phone }}
              </div>
            </div>
          </div>
        </div>
        <button
            type="button" v-on:click="router().push('/account/edit')"
            class="block w-full bg-gray-200 text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100
              focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from "@/router";

export default {
  methods: {
    router() {
      return router
    }
  },
  data() {
    return {
      errors: null,
      loading: false,
    }
  },
  computed: {
    ...mapGetters('users', ['authUser'])
  }
}
</script>
