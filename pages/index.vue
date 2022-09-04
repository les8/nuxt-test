<template>
  <div>
    <h1>Home page</h1>
    <Tutorial /> 
    <NuxtLink to="/about">to about page</NuxtLink>
    <NuxtLink to="/users">to users page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
