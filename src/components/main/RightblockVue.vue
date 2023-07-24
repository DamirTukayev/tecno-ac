<template>
    <div>
        <SliderVue/>
        <TizersVue/>
        <div>
            <h2 class="my-2">Автолаборатории, контрольно-измерительные приборы и оборудование</h2>
            <div class="d-flex">
                <div v-for="(item, index) in productImages" :key="index" :style="{width: item.size === 'big' ? '50%' : '25%'}" class="image-with-border">
                    <ImageProductVue :item="item"/>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex">
                <div v-for="(item, index) in productImages2" :key="index" :style="{width: index === 0 ? '25%' : (index === 1 ? '50%' : '25%')}" class="image-with-border">
                    <ImageProductVue :item="item"/>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex">
                <div v-for="(item, index) in productImages3" :key="index" :style="{width: index === 0 ? '25%' : (index === 1 ? '25%' : '50%')}" class="image-with-border">
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
                        image: require('@/assets/home/product/avtolab2.jpg'),
                        size: 'small', // small or big
                        title: 'Течеискатель воды',
                        subtitle: 'Акустические, корреляционные и многодатчиковые'
                    },
                    {
                        image: require('@/assets/home/product/avtolab3.jpg'),
                        size: 'small', // small or big
                        title: 'Трассотечеискатель',
                        subtitle: 'Многофункциональные приборы для поиска трубопровода и мест утечки'
                    },
                ],
                productImages2: [
                    {
                        image: require('@/assets/home/product/avtolab4.jpg'),
                        size: 'big', // small or big
                        title: 'Трассоискатели',
                        subtitle: 'Кабелеискатели и трассоискатели подземных коммуникаций'
                    },
                    {
                        image: require('@/assets/home/product/avtolab5.jpg'),
                        size: 'small', // small or big
                        title: 'Термометры контактные',
                        subtitle: 'Цифровые термометры, комплекты и зонды'
                    },
                    {
                        image: require('@/assets/home/product/avtolab6.jpg'),
                        size: 'small', // small or big
                        title: 'Измерители-регисторы',
                        subtitle: 'Портативные, стационарные и специализированные'
                    },
                ],
                productImages3: [
                    {
                        image: require('@/assets/home/product/avtolab7.jpg'),
                        size: 'big', // small or big
                        title: 'Тепловизоры',
                        subtitle: 'Тепловизионные комплексы и тепловизоры для различных отраслей'
                    },
                    {
                        image: require('@/assets/home/product/avtolab8.jpg'),
                        size: 'small', // small or big
                        title: 'Газоанализаторы',
                        subtitle: 'Промышленных вбросов и воздуха рабочей зоны'
                    },
                    {
                        image: require('@/assets/home/product/avtolab9.jpg'),
                        size: 'small', // small or big
                        title: 'Электроизмерительные приборы',
                        subtitle: 'Мультиметры, мегаомметры, токоизмерительныеклещи и т.п.'
                    },
                ]
            }
        },
    }
</script>

<style>
    .image-with-border {
        border: 1px solid #FFF;
    }
</style>