<template>
    <div>
        <SliderVue/>
        <TizersVue/>
        <div>
            <h2 class="my-2">Автолаборатории, контрольно-измерительные приборы и оборудование</h2>
            <div class="d-flex">
                <div v-for="(item, index) in productImages" :key="index" :style="{width: item.size === 'big' ? '50%' : '25%'}">
                    <ImageProductVue :item="item"/>
                </div>
            </div>
        </div>
        <StockVue/>
        <WrapVue/>
        <BrandsSliderVue/>
    </div>
</template>

<script>
    import SliderVue from './SliderVue.vue';
    import TizersVue from './TizersVue.vue';
    import ImageProductVue from './ImageProductVue.vue';
    import StockVue from './StockVue.vue';
    import WrapVue from './WrapVue.vue';
    import BrandsSliderVue from './BrandsSliderVue';
    

    export default {
        components: {
            SliderVue,
            TizersVue,
            ImageProductVue,
            StockVue,
            WrapVue,
            BrandsSliderVue
        },
        data() {
            return {
                productImages: [
                    {
                        image: require('@/assets/home/product/avtolab.jpg'),
                        size: 'big', // small or big
                        title: 'Автолаборатории',
                        subtitle: 'Электротехнические и универсальные передвижные лаборатории'
                    },
                    {
                        image: require('@/assets/home/product/avtolab.jpg'),
                        size: 'small', // small or big
                        title: 'Автолаборатории',
                        subtitle: 'Электротехнические и универсальные передвижные лаборатории'
                    },
                    {
                        image: require('@/assets/home/product/avtolab.jpg'),
                        size: 'small', // small or big
                        title: 'Автолаборатории',
                        subtitle: 'Электротехнические и универсальные передвижные лаборатории'
                    },
                ]
            }
        },
    }
</script>