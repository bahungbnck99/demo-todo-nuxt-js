<template>
  <div>
    <!-- <DefaultHeader /> -->
    <default-header></default-header>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import DefaultHeader from "@/components/Header/DefaultHeader";
export default {
  components: {
    DefaultHeader,
  },
};
</script>

<style lang="scss"></style>
