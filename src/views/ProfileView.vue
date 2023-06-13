<template>
  <div class="font-sans xl:px-32 py-2 xl:pb-5 flex justify-center">
    <div class="w-full md:w-6/12 md:p-5">
      <h1 class="text-4xl mx-auto leading-tight font-bold text-gray-500 mb-4">
        Profile
      </h1>
    </div>
    <div v-if="currentUser">
      {{ JSON.stringify(currentUser)}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      errors: null,
      loading: false,
    }
  },
  computed: {
    ...mapGetters('users', ['currentUser'])
  }
}
</script>
