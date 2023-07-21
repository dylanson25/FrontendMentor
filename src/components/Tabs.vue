<template>
  <nav v-if="tabItems.length" class="tabs" :class="classes">
    <ul role="tablist">
      <li
        class="is-uppercase"
        role="tab"
        v-for="(tabItem, key) in tabItems"
        :class="oSelected === tabItem ? 'is-selected' : ''"
        :key="key"
        @click="() => onSelect(tabItem)"
      >
        <span> {{ tabItem }} </span>
      </li>
    </ul>
  </nav>
</template>
<script>
import { computed, ref, toRefs, watch } from "vue";

export default {
  props: {
    class: { type: [String, Array], default: "" },
    tabItems: { type: Array, default: () => [] },
    modelValue: { type: String, default: null },
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
      default: "earth",
    },
  },
  emits: ["update:model-value"],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const oSelected = ref(
      props.modelValue ? modelValue.value : props.tabItems[0]
    );

    const classes = computed(() => {
      let classes = [];
      if (typeof props.class === "object") classes = [...props.class];
      else classes.push(props.class);
      if (props.variant) classes.push(`is-${props.variant}`);
      return classes.join(" ");
    });
    watch(modelValue, (value) => (oSelected.value = value));
    watch(oSelected, (value) => emit("update:model-value", value));
    return {
      classes,
      oSelected,
      onSelect: (selected) => emit("update:model-value", selected),
    };
  },
};
</script>
