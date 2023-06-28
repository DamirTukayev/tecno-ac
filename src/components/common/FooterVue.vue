Trim, [23.06.2023 18:03]
<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-left">
                        <div class="footer-menu-left__block">
                            <div class="footer-menu__copyright">
                                © «ТЕХНО-АС», 1992-2023
                            </div>
                            <div class="footer-menu__submenu">
                                <a href="" class="footer-menu__linkk">Политика конфиденциальности</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-menu-column">
                        <a href="#" class="footer-menu__title">КОМПАНИЯ</a>
                        <a href="#" class="footer-menu__link">Новости</a>
                        <a href="#" class="footer-menu__link">Дилерам</a>
                        <a href="#" class="footer-menu__link">Тендеры</a>
                        <a href="#" class="footer-menu__link">Контакты</a>
                    </div>
                    <div class="footer-menu-column">
                        <a href="#" class="footer-menu__title">ПОМОЩЬ</a>
                        <a href="#" class="footer-menu__link">Условия оплаты</a>
                        <a href="#" class="footer-menu__link">Условия доставки</a>
                        <a href="#" class="footer-menu__link">Условия возврата товара</a>
                        <a href="#" class="footer-menu__link">Как оформить заказ</a>
                    </div>
                    <div class="footer-menu-column">
                        <a href="#" class="footer-menu__title">ИНФОРМАЦИЯ</a>
                        <a href="#" class="footer-menu__link">Обучение</a>
                        <a href="#" class="footer-menu__link">Методики</a>
                        <a href="#" class="footer-menu__link">Производители</a>
                        <a href="#" class="footer-menu__link">Материалы для скачивания</a>
                    </div>
                </div>
                <div class="footer-phone__block">
                    <span class="footer-phone__wrap">
                        <img src="../../assets/header/phone.svg" style=";" class="mr-2" alt="">
                        <div>
                            <div class="footer__phone mb-1">8 (718) 262-73-62</div>
                            <div class="footer__phone">8 (778) 730-32-12</div>
                        </div>
                    </span>
                    <span class="footer-order-wrap__btn">
                        <span class="footer-callback__btnn"> Заказать звонок</span>
                    </span>
                    <div class="footer-social__wrapper">
                        <div class="footer-sociall">
                            <div class="footer-small__title">Мы в социальных сетях:</div>
                            <div class="footer-soc__icons">
                                <img src="../../assets/header/social-icons/Vkontakte.svg" alt="">
                                <img src="../../assets/header/social-icons/youtube.svg" alt="">
                                <img src="../../assets/header/social-icons/Telegram.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

Trim, [23.06.2023 18:03]
<style lang="scss">
.footer{
    background: #f6f6f7;
    &-content{
        padding: 25px 24px 39px;
    }
    &-top{
        display: grid;
        grid-template-columns: 830px 1fr;
        column-gap: 90px;
    }
    &-menu{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        &-left__block{
            margin-top: 4px;
        }
        &__copyright{
            font-size: 12px;
            opacity: 0.6;
            color: #666666 !important;
            padding: 0 0 17px;
        }
        &__linkk{
            text-decoration: none;
            font-size: 12px;
            opacity: 0.6;
            color: #666666 !important;
            &:hover{
            opacity: 1;
            color: #666666 !important;
            }
        }
        &__title{
            font-weight: 600;
            font-size: 13px;
            text-decoration: none;
            color: #1D2029 !important;
            &:hover{
                color: #cd0016 !important;
            }
        }
        &__link{
            display: block;
            text-decoration: none;
            font-size: 13px;
            color: #666666 !important;
            &:last-child{
                margin-bottom: 0;
            }
            &:hover{
                color: #cd0016 !important;
            }
        }
    }
    &__phone{
        font-size: 18px;
        font-weight: 600;
    }
    &-phone__block{
        display: flex;
        flex-direction: column;
    }
    &-phone__wrap{
        display: flex;
        justify-content: center;
    }
    &-callback__btnn{
        display: inline-block;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1px;
      color: #cd0016;
      display: flex;
      justify-content: center;
    }
    &-small__title{
    color: #888888;
    font-size: 13px;
    font-weight: 500;
    margin: 0px 0px 3px;
    font-weight: 400;
    }
    &-social__wrapper{
        margin-top: 15px;
        text-align: center;
    }
    &-soc__icons{
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-right: 46px;
    }
}
</style>