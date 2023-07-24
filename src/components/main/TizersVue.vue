<template>
    <div class="tizers">
        <div class="tizers-block">
            <img class="tizers-block__img" src="@/assets/home/icon-slid/icon-slid.png" alt="">
            <p class="tizers-block__title">Повышаем эффективность работы</p>
        </div>
        <div class="tizers-block">
            <img class="tizers-block__img" src="@/assets/home/icon-slid/icon-slid_2.png" alt="">
            <p class="tizers-block__title">Гарантия производителя</p>
        </div>
        <div class="tizers-block">
            <img class="tizers-block__img" src="@/assets/home/icon-slid/icon-slid_3.png" alt="">
            <p class="tizers-block__title">Обучение работе с приборами</p>
        </div>
        <div class="tizers-block">
            <img class="tizers-block__img" src="@/assets/home/icon-slid/icon-slid_4.png" alt="">
            <p class="tizers-block__title">Своевременная поставка</p>
        </div>
    </div>
</template>

<style lang="scss">
.tizers{
    display: flex;
    text-align: center;
    margin-top: 40px;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
    &-block{
        display: flex;
        vertical-align: middle;
        color: #000000;
        box-sizing: border-box;
        padding: 0px 10px 0px;
        -moz-transition: all 0.1s ease;
        -o-transition: all 0.1s ease;
        -ms-transition: all 0.1s ease;
        transition: all 0.1s ease;
        margin: 0px 0px 26px;
        white-space: nowrap;
        gap: 20px;
        align-items: center;
        &__title{
            text-align: left;
            margin: -6px 0px 0px;
            white-space: normal;
        }
}
}
</style>