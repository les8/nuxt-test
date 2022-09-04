<template>
  <div>
    <h1>User {{ id }}</h1>
    <NuxtLink to="/">to hone page</NuxtLink>
    <NuxtLink to="/users">to users page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
