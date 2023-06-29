<template>
    <div class="wrap">
        <div class="wrap-img">
            <img class="wrap-img__image" alt="" src="@/assets/home/wrap/wrap.png">
        </div>
        <div class="wrap-block">
            <h2 class="wrap-block__title">О компании</h2>
            <p class="wrap-block__titla">«ТЕХНО-АС» - это группа компаний полного цикла, мы разрабатываем, производим и реализуем приборы неразрушающего контроля. Основными направлениями являются производство трассопоискового оборудования, приборов для измерения температуры и влажности, а также производство и поставка электротехнических автолабораторий.</p>
            <p class="wrap-block__titla">Наш приоритет - долгосрочное и взаимовыгодное сотрудничество с нашими клиентами!</p>
            <a href="#" class="wrap-block__btn">Подробнее</a>	
        </div>
    </div>
</template>

<style lang="scss">
.wrap{
    display: flex;
    margin-top: 40px;
    &-img{
        width: 25%;
        &__image{
        max-width: 100%;
        }
    }
    &-block{
        padding: 0px 0px 0px 20px;
        width: 75%;
        &__title{
        font-size: 24px;
        margin: 0 0 24px;
        line-height: 26px;
        color: #181818;
        font-weight: 600;
        }
        &__titla{
        font-size: 14px;
        color: #333333;
        margin: 0px 0px 20px !important;
        }
        &__btn{
        text-decoration: none;
        border-color: #d2323e !important;
        color: #cd0016 !important;
        border: 1px solid #ddd;
        background: none;
        padding-top: 7px;
        padding-bottom: 8px;
        opacity: 1;
        font-weight: 400;
        cursor: pointer;
        font-size: 15px;
        line-height: 16px;
        padding: 8px 11px 9px;
        display: inline-block;
        &:hover{
        color: #FFF !important;
        background: #e10018;
        }
        }
    }
}
</style>