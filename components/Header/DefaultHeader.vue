<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
            <li>
            <nuxt-link to="/users">Users</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/posts">Posts</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "default-header",
};
</script>

<style lang="scss">

</style>
