<template>
  <div class="overflow-x-auto">
    <div class="align-middle inline-block min-w-full">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <!--
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Actions</span>
                            </th>
            -->
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user of users">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class=" text-sm font-medium text-gray-900 capitalize">
                {{ user.first_name }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900 capitalize">
                {{ user.last_name }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900 capitalize">
                {{ user.email }}
              </div>
            </td>
            <!--
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Date
                                </span>
                            </td>
            -->
            <!--
                            <td class="px-2 py-2 whitespace-nowraps text-right text-sm font-medium space-x-1 space-y-1 flex flex-col">
                              <a href="#" class="text-white text-center px-2 py-1 rounded-md bg-green-500 hover:bg-green-700">
                                Telecharger
                              </a>
                              <a href="#" class="text-white text-center px-2 py-1 rounded-md bg-indigo-600 hover:bg-indigo-800">
                                Modifier
                              </a>
                              <a href="#" onclick="return confirm('Voulez vous vraiment supprimer ce livre ?')" class="text-white text-center px-2 py-1 rounded-md bg-red-600 hover:bg-red-800">
                                Supprimer
                              </a>
                            </td>
            -->
          </tr>
          </tbody>
        </table>
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
    ...mapGetters('users', ['users'])
  },
  methods: {
    ...mapActions('users', ['fetchAllUsers'])
  },
  mounted() {
    this.fetchAllUsers();
  }
}
</script>

