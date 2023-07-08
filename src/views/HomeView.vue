<template>
  <main class="main">
    <InfoBox property="ROTATION TIME" value="58.6 days" />
    <br />
    <Button
      variant="venus"
      expanded
      label="venus"
      size="small"
      @click="onClick"
    />
  </main>
</template>

<script>
import { Button, InfoBox } from "@/components";
export default {
  name: "HomeView",
  components: {
    Button,
    InfoBox,
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
  padding: 10px
  // justify-content: center
  // align-items: center
  min-height: 100vh
  width: 100%
</style>
