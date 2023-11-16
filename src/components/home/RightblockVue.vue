<template>
  <v-container>
    <SliderVue />
    <TizersVue />
    <div>
      <h2 class="my-2 fs-30">
        Автолаборатории, контрольно-измерительные приборы и оборудование
      </h2>
      <div class="d-flex flex-wrap">
        <div
          v-for="(item, index) in productImages"
          :key="index"
          :style="{ width: item.size === 'big' ? '50%' : '25%' }"
          class="image-with-border"
        >
          <ImageProductVue :item="item" />
        </div>
      </div>
    </div>
    <OffersVue />
    <stock-vue/>
    <WrapVue />
    <BrandsSliderVue />
  </v-container>
</template>

<script>
import SliderVue from "./SliderVue";
import TizersVue from "./TizersVue";
import ImageProductVue from "./ImageProductVue";
import WrapVue from "./WrapVue";
import BrandsSliderVue from "./BrandsSliderVue";
import OffersVue from "./OffersVue";
import StockVue from "./StockVue";

export default {
  components: {
    SliderVue,
    TizersVue,
    ImageProductVue,
    StockVue,
    WrapVue,
    BrandsSliderVue,
    OffersVue,
  },
  data() {
    return {
      productImages: [
        {
          image: require("@/assets/home/product/avtolab.jpg"),
          size: "big", // small or big
          title: "Автолаборатории",
          subtitle:
            "Электротехнические и универсальные передвижные лаборатории",
        },
        {
          image: require("@/assets/home/product/avtolab2.jpg"),
          size: "small", // small or big
          title: "Течеискатель воды",
          subtitle: "Акустические, корреляционные и многодатчиковые",
        },
        {
          image: require("@/assets/home/product/avtolab3.jpg"),
          size: "small", // small or big
          title: "Трассотечеискатель",
          subtitle:
            "Многофункциональные приборы для поиска трубопровода и мест утечки",
        },
        {
          image: require("@/assets/home/product/avtolab4.jpg"),
          size: "small", // small or big
          title: "Трассоискатели",
          subtitle: "Кабелеискатели и трассоискатели подземных коммуникаций",
        },
        {
          image: require("@/assets/home/product/avtolab5.jpg"),
          size: "big", // small or big
          title: "Термометры контактные",
          subtitle: "Цифровые термометры, комплекты и зонды",
        },
        {
          image: require("@/assets/home/product/avtolab6.jpg"),
          size: "small", // small or big
          title: "Измерители-регисторы",
          subtitle: "Портативные, стационарные и специализированные",
        },
        {
          image: require("@/assets/home/product/avtolab7.jpg"),
          size: "small", // small or big
          title: "Тепловизоры",
          subtitle:
            "Тепловизионные комплексы и тепловизоры для различных отраслей",
        },
        {
          image: require("@/assets/home/product/avtolab8.jpg"),
          size: "small", // small or big
          title: "Газоанализаторы",
          subtitle: "Промышленных вбросов и воздуха рабочей зоны",
        },
        {
          image: require("@/assets/home/product/avtolab9.jpg"),
          size: "big", // small or big
          title: "Электроизмерительные приборы",
          subtitle: "Мультиметры, мегаомметры, токоизмерительныеклещи и т.п.",
        },
      ],
    };
  },
};
</script>

<style>
.image-with-border {
  border: 1px solid #fff;
}
.fs-30 {
  font-size: 30px;
}
</style>