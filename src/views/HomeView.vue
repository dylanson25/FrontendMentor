<template>
  <main class="main">
    <Button />
    <Button expanded />
  </main>
</template>

<script>
import { Button } from "@/components";
export default {
  name: "HomeView",
  components: {
    Button,
  },
};
</script>
<style lang="sass" scoped>
.main
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  width: 100%
</style>
