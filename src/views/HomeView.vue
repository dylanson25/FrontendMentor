<template>
  <main class="main">
    <Button variant="venus" label="venus" size="small" @click="onClick" />
    <Button expanded>
      <h1>Buenaaas</h1>
    </Button>
  </main>
</template>

<script>
import { Button } from "@/components";
export default {
  name: "HomeView",
  components: {
    Button,
  },
  setup() {
    return {
      onClick: (e) => {
        console.log(e);
      },
    };
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
