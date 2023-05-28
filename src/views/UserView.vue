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
                <RouterLink class="active text-gray-800" to="/">
                  Home
                </RouterLink>
              </li>
              <li>
                <a class="active text-gray-800 text-gray-400" href="#">
                  Projects List
                </a>
              </li>
              <li>
                <a class="text-gray-400" href="#">
                  Add Project
                </a>
              </li>
              <li>
                <a class="text-gray-400" href="">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      baseURL: 'http://localhost:8000/api',
      users: [],
      message: null,
    }
  },
  mounted() {
    axios.post(this.baseURL + '/auth/login', {
      email: 'admin@admin.com',
      password: 'password'
    }).then((response) => {
      console.log('response 1')
      console.log(response)
      const token = response.data?.token
      if (token) {
        axios.get(this.baseURL + '/users', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
            .then((response) => {
              console.log('response 2')
              console.log(response)
              if (response.data?.users) {
                this.users = response.data.users;
              }
            })
      } else {
        alert('Error token: ' + response.data.toString())
      }
    }).catch((error) => {
      alert('Error message: ' + error.data?.toString())
    })
  }
}
</script>

<style>
</style>
