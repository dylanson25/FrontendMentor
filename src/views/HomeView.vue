<template>
  <Navbar />
  <main class="main">
    <Tabs
      class="planet-tabs"
      :tabItems="tabItems"
      v-model="selected"
      :variant="name.toLocaleLowerCase()"
    />
    <div class="planet-content">
      <img
        class="planet-img"
        :class="planetClass"
        :src="dataSelected.imgSource"
        :alt="`${currentPlanet.name} - Imagen`"
      />
      <img
        v-if="'SURFACE' === selected"
        class="marker-planet-img"
        :src="dataSelected.geologySource"
        :alt="`Geology ${currentPlanet.name} - Imagen`"
      />
    </div>
    <section class="content">
      <h1 class="title-1">{{ name }}</h1>
      <p class="text-body">
        {{ dataSelected.content }}
      </p>
      <p class="link-source color-grey">
        Source: <a :href="dataSelected.source" target="_blank">Wikipedia</a>
      </p>
      <div v-if="width > 575" class="buttons-group">
        <Button
          @click="() => onSelect('OVERVIEW')"
          :variant="name.toLocaleLowerCase()"
          expanded
          :selected="'OVERVIEW' === selected"
          >OVERVIEW</Button
        >
        <Button
          @click="() => onSelect('STRUCTURE')"
          :variant="name.toLocaleLowerCase()"
          expanded
          :selected="'STRUCTURE' === selected"
          >Internal Structure</Button
        >
        <Button
          @click="() => onSelect('SURFACE')"
          :variant="name.toLocaleLowerCase()"
          expanded
          :selected="'SURFACE' === selected"
          >Surface Geology</Button
        >
      </div>
    </section>
    <section class="characteristics">
      <InfoBox
        v-for="(characteristic, key) in currentPlanet.characteristics"
        :key="key"
        :property="getCharacteristicTitle(key)"
        :value="characteristic"
      />
    </section>
  </main>
</template>

<script>
import { ref, onBeforeMount, watch, toRefs, reactive, computed } from "vue";
import { InfoBox, Button, Tabs, Navbar } from "@/components";
import { useWidth } from "@/utils/useWidth";
import { useRoute } from "vue-router";
import dataPlanets from "@/utils/data.js";
export default {
  name: "HomeView",
  components: { InfoBox, Button, Tabs, Navbar },
  setup() {
    const planets = ref(dataPlanets);
    const currentPlanet = ref([]);
    const route = useRoute();
    const { width } = useWidth();
    const name = toRefs(route).name;
    const selected = ref("OVERVIEW");
    const characteristics = reactive({
      rotation: "ROTATION TIME",
      revolution: "REVOLUTION TIME",
      radius: "radius",
      temperature: "AVERAGE TEMP.",
    });
    const tabItems = ref(["OVERVIEW", "STRUCTURE", "SURFACE"]);

    const getPlanetByName = (planetName) =>
      (currentPlanet.value = planets.value.find((p) => p.name === planetName));

    watch(name, (value) => getPlanetByName(value));
    onBeforeMount(() => getPlanetByName(name.value));
    return {
      currentPlanet,
      name,
      selected,
      width,
      tabItems,
      getCharacteristicTitle: (key) => characteristics[key],
      onSelect: (value) => {
        if (selected.value != value) selected.value = value;
      },
      planetClass: computed(() =>
        name.value ? `size-${name.value.toLowerCase()}` : ""
      ),
      dataSelected: computed(() => {
        const { planet, internal, geology } = currentPlanet.value.images;
        let imgSource = "STRUCTURE" === selected.value ? internal : planet;
        let keyInfo = "overview";
        switch (selected.value) {
          case "OVERVIEW":
            keyInfo = "overview";
            break;
          case "STRUCTURE":
            keyInfo = "structure";
            break;
          case "SURFACE":
            keyInfo = "geology";
            break;
        }
        return {
          content: currentPlanet.value[keyInfo].content,
          source: currentPlanet.value[keyInfo].source,
          imgSource,
          geologySource: geology,
        };
      }),
    };
  },
};
</script>
<style lang="sass" scoped>
.main
  display: grid
  position: relative
  grid-template-rows: minmax(304px, auto) repeat(2, auto)
  grid-template-columns: 100%
  min-height: calc( 100vh - 70px )
  padding: 24px
  padding-top: 0
  margin: 0 auto
  place-content: center
  place-items: center
  row-gap: 27px
  width: calc( 100% - 85px )
  .planet-tabs
    display: none

  @include media-breakpoint-down($br-xs)
    width: 100%
    padding-top: 50px
    .planet-tabs
      z-index: 10000000
      position: absolute
      top: 0
      width: 97vw
      display: block
    .content .buttons-group
      display:  none
  .planet-content
    position: relative
    .marker-planet-img
      position: absolute
      top: 60%
      width: 33%
      left: calc( 50% - 16.5% )
      @include media-breakpoint-down($br-xs)
        width: 45%
        left: calc( 50% - 22.5% )

  @each $className, $object in $planetSizes
    .size-#{$className}
      max-width: map-get($object, 'width')
      width: map-get($object, 'size-sm')
      @include media-breakpoint-up($br-sm)
        width:  map-get($object, 'size-xs')
  .content
    height: 100%
    width: 100%
    @include media-breakpoint-up($br-sm)
      display: grid
      place-content: space-between
      grid-template-columns: 45% 45%
      grid-template-rows: repeat(3, auto)
      .text-body
        grid-area: 2/1/3/2
      .link-source
        grid-area: 3/1/4/2
    @include media-breakpoint-up($br-md)
      display: flex
      max-width: 350px
      place-content: center
      flex-direction: column
    .buttons-group
      grid-area: 1/2/4/3
      margin-top: 25px
      .btn
        margin-top: 16px
  .characteristics
    display: grid
    grid-template-rows: repeat(4, min-content)
    row-gap: 8px
    width: 100%
    max-width: 1110px
    margin: 0 auto
    @include media-breakpoint-up($br-xs)
      column-gap: 11px
      grid-template-rows: unset
      grid-template-columns: repeat(auto-fit, minmax(125px, calc(25% - 10px)))
    @include media-breakpoint-up($br-sm)
      place-content: space-between
  @include media-breakpoint-up($br-md)
    grid-template-columns: 64.2% 35.8%
    grid-template-rows: 592.33px 125.6px
    min-height: calc(100vh - 128px)
    // grid-template-rows: 71.3% 19.7%
    row-gap: 26px
    .characteristics
      grid-area: 2/1/3/3
  @include media-breakpoint-up($br-lg)
    row-gap: 5vh
    .characteristics
      align-self: flex-end
      grid-template-columns: repeat(auto-fit, minmax(130px, calc(25% - 23px)))
      column-gap: 30px
</style>
