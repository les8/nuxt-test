<template>
  <div>
    <h1>Users</h1>
    <li v-for="user in users" :key="user.id">
      <NuxtLink :to="`/users/${user.id}`">to user {{ user.name }}</NuxtLink>
    </li>
    <NuxtLink to="/users/create">to create users page</NuxtLink>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UsersPage',
  computed: {
    ...mapGetters({
      users: 'users/getUsers',
    }),
  },
};
</script>