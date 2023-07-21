import { ref, onMounted } from "vue";
export const useWidth = () => {
  const width = ref(window.screen.width);
  const onResize = () => (width.value = window.screen.width);
  onMounted(() => {
    addEventListener("resize", onResize);
  });
  return {
    width,
  };
};
