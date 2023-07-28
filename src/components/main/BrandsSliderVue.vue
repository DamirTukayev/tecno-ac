<template>
  <div class="brands">
    <v-sheet class="mx-auto" max-width="1062">
      <v-slide-group multiple show-arrows style="height: 46.6px !important;">
        <v-slide-item v-for="(n, index) in 20" :key="n" v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            style="padding: !important; "
            @click="toggle"
          >
            <v-img
              :src="require(`@/assets/home/brands/brands_${index + 1}.jpg`)"
              width="100%"
              height="100%"
              :style="{
                filter: active ? 'none' : 'grayscale(100%)',
                opacity: active ? '1' : '0.6',
                objectFit: 'contain',
              }"
              @mouseenter="toggle"
              @mouseleave="toggle"
            ></v-img>
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style>
.v-slide-group__content {
    align-items: center;
    gap: 67px;
}
.mx-auto {
    margin-top: 20px;
    margin-bottom: 80px;
}
.v-responsive__sizer {
  padding-bottom: none !important;
}

.brands {
  border-top: 1px solid #eaebec;
}

.v-slide-group__content {
  align-items: center;
}

.mx-auto {
  margin-top: 20px;
}

.v-application--is-ltr .v-responsive__sizer ~ .v-responsive__content {
  margin-left: -100%;
  width: 115px !important;
}

.v-btn:hover .v-img {
  filter: grayscale(100%);
  opacity: 0.6;
}
</style>
