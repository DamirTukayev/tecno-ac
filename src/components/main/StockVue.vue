<template>
    <div class="stock">
        <div class="stock-item">
            <p class="stock-item__title">Акции</p>
            <a class="stock-item__titla" href="#">Все акции</a>
        </div>
        <div class="stock-image">
            <div class="stock-image-block">
                <div class="stock-image-block_1">
                    <div class="stock-image-block_1__img">
                        <a href="#"><img src="@/assets/home/stock/Stock_1.jpg" alt="" style="max-width: 100%;"></a>
                    </div>
                    <div class="stock-image-block_1__info">
                        <p class="stock-image-block_1__info__text">Скидка до 45%</p>
                        <a class="stock-image-block_1__info__titla" href="#">Распродажа складских остатков! Успейте купить!</a>
                    </div>
                </div>
            </div>
            <div class="stock-image-block">
                <div class="stock-image-block_1">
                    <div class="stock-image-block_1__img">
                        <a href="#"><img src="@/assets/home/stock/Stock_2.jpg" alt="" style="max-width: 100%;"></a>
                    </div>
                    <div class="stock-image-block_1__info">
                        <p class="stock-image-block_1__info__text">Ликвидация остатков</p>
                        <a class="stock-image-block_1__info__titla" href="#">Новые приборы по сниженным ценам!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.stock{
    margin: 30px 0 0 0;
    padding: 10px 0 40px 0;
    border-top: 1px solid #eaebec;
    border-bottom: 1px solid #eaebec;
    &-item{
    padding: 13px 0px 0px;
    margin: 0px 0px 13px;
        &__title{
        display: inline-block;
        margin: 0px 25px 0px 0px;
        font-size: 20px;
        color: #1d2029;
        line-height: 30px;
        font-weight: 500;        
        }
        &__titla{
        text-decoration: none;
        font-size: 13px;
        color: #cd0016 !important;
        &:hover{
        color: #1d2029 !important;
        }
        }
    }
    &-image{
        &-block{
        display: inline-block;
        vertical-align: top;
        padding: 6px 6px;
        width: 30%;
        &_1{
        height: 270px;
        position: relative;
        box-shadow: 0 0 1px #a2a6aa inset;
        -webkit-transition: box-shadow ease-out 0.2s, border ease-out 0.2s;
        -moz-transition: box-shadow ease-out 0.2s, border ease-out 0.2s;
        -o-transition: box-shadow ease-out 0.2s, border ease-out 0.2s;
        transition: box-shadow ease-out 0.2s, border ease-out 0.2s;
        &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        } 
        &__img{
        height: 180px;
        line-height: 180px;
        text-align: center;
        overflow: hidden;
        }
        &__info{
        padding: 13px 20px 18px;
        line-height: 18px;
        &__text{
        line-height: 18px;
        font-size: 11px;
        color: #666;
        margin: 0px 0px 2px;
        }
        &__titla{
        text-decoration: none;
        font-size: 14px;
        display: block;
        color: #cd0016 !important;
        &:hover{
        color: #1d2029 !important;
        }
        }
        }
        }
        }
    }
}
</style>