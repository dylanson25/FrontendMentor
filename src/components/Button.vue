<template>
  <button :class="classes" @click.stop="onClick">
    <template v-if="$slots.default">
      <slot />
    </template>
    <span v-else>
      {{ label }}
    </span>
  </button>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    class: { type: [String, Array], default: "" },
    label: { type: String, default: "" },
    expanded: { type: Boolean, default: false },
    variant: {
      type: String,
      enum: [
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
      ],
      default: "mercury",
    },
    selected: { type: Boolean, default: false },
    size: { type: String, enum: ["medium", "small"], default: "medium" },
  },
  emits: ["click"],
  setup(props, { emit }) {
    return {
      classes: computed(() => {
        const classes = ["btn"];
        if (props.expanded) classes.push("is-expanded");
        if (props.size) classes.push(`is-${props.size}`);
        if (props.variant) classes.push(`is-${props.variant}`);
        if (props.selected) classes.push(`is-selected`);
        return classes.join(" ");
      }),
      onClick: (e) => emit("click", e),
    };
  },
};
</script>
