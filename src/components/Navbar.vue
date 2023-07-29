<template>
  <header class="header">
    <nav class="nabvar">
      <h2 class="header-title">THE PLANETS</h2>
      <button class="navbar-toggler" @click="() => (show = !show)">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <Transition name="collapse">
        <div v-if="show" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li
              v-for="({ name }, idx) in planetRoutes"
              :key="`0${idx}_${name}`"
              class="nav-item"
              :class="`is-${name.toLowerCase()} ${
                isActive(name) ? 'active' : ''
              }`"
              @click="() => navigate(name)"
            >
              <a class="nav-link">{{ name }}</a>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>
<script>
import { ref, onBeforeMount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useWidth } from "@/utils/useWidth";

export default {
  setup() {
    const { push, options } = useRouter();
    const { width } = useWidth();
    const route = useRoute();
    const planetRoutes = ref([]);
    const show = ref(true);
    onBeforeMount(() => {
      const { routes } = options;
      planetRoutes.value = routes.filter(
        (route) => route.meta?.type === "planetView"
      );
      if (width.value >= 767.98) show.value = true;
      else show.value = false;
    });
    watch(width, (value) => {
      if (value >= 767.98) show.value = true;
      else show.value = false;
    });
    return {
      planetRoutes,
      show,
      navigate: (name) => {
        if (width.value <= 767.98) show.value = false;
        push({ name });
      },
      isActive: (name) => name === route.name,
    };
  },
};
</script>
<style lang="sass" scoped>
@keyframes collapse-in
  0%
    height: 0px
  100%
    height: 510px
@keyframes collapse-out
  0%
    height: 510px
  100%
    height: 0px
@include media-breakpoint-down($br-sm)
  .collapse-enter-active
    animation: collapse-in 1s ease
  .collapse-leave-active
    animation: collapse-out 1s ease-out
</style>
