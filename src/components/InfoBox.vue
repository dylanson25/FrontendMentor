<template>
  <div class="infobox">
    <h4 class="infobox-title color-grey is-uppercas">{{ property }}</h4>
    <p class="title-2">{{ value }}</p>
  </div>
</template>
<script>
export default {
  props: {
    property: { type: String, default: "" },
    value: { type: String, default: "" },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.infobox
    display: flex
    justify-content: space-between
    padding: 9px 24px 13px
    border: 1px solid rgba($white, 0.20000000298023224)
    width: 100%
    .infobox-title
        display: flex
        align-items: center
        font-weight: 700
        font-size: 8px
        line-height: 16px
        letter-spacing: 0.727px
    @include media-breakpoint-up($br-xs)
        padding: 16px 15px 19px
        justify-content: center
        flex-direction: column
        align-items: flex-start
        .infobox-title
            font-size: $fs-xs
    @include media-breakpoint-up($br-sm)
        padding: 20px 24px 27px
        .infobox-title
            line-height: 25px
</style>
