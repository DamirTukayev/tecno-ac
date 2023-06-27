<template>
    <div class="left-block">
      <div class="left-block-banners">
            <a href="#">
              <img
                data-lazyload=""
                class="lazyloaded"
                src="../../assets/header/img/import.jpg"
                data-src=""
                alt=""
                title=""
              />
            </a>
      </div>
  
      <div class="left-block-btn-use-devices">
        <img src="../../assets/header/social-icons/icon_play.svg" alt="" width="40px">
        <a class="left-block-btn-use-device" href="#">Как пользоваться приборами?</a>
      </div>
  
      <div class="left-block-ask-small-block">
        <div class="left-block__title">Прайс-лист ТЕХНО-АС</div>
        <div class="left-block-ask-btn-block">
          <a class="left-block-vbig__btn" href="#">Прайс-лист</a>
        </div>
        <div class="left-block__description">
          Прайс-лист от 21.11.2022 в формате .xlsx (цены с НДС).
        </div>
      </div>
  
      <div class="left-block-subscribe__wrap">
        <div class="left-block-subscribe__form">
          <div class="left-block-wrap__bg">
            <div class="left-block-top__block">
              <div class="left-block__text">
                <div class="left-block_title">Будьте всегда в курсе!</div>
                <div class="left-block__more">Узнавайте о скидках и акциях первым</div>
              </div>
            </div>
            <form action="" class="left-block__sform">
              <div class="left-block-email__wrap">
                <input
                  type="email"
                  class="left-block-email_input"
                  name="sf_EMAIL"
                  maxlength="100"
                  required
                  size="20"
                  value=""
                  placeholder="Ваш e-mail"
                  aria-required="true"/>
                <div class="left-block-send__btn">
                    <svg class="left-block-send__btn" xmlns="http://www.w3.org/2000/svg" viewBox="1212 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#FFFFFF" />
                    </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    <div class="left-block-news__blocks">
        <div class="left-block-top__block">
            <div class="left-block-title__block">Новости</div>
            <a class="left-block-title__blockk" href="#">Все новости</a>
        </div>
        <div class="left-block-info__block">
            <div class="left-block-news__items">
                <div class="left-block__item">
                    <div class="left-block__info">
                    <div class="left-block__date">20 июня 2023</div>
                    <a class="left-block-dark__link" href="#">Программа по модернизации и дооснащению старых автолабораторий</a>
                    </div>
                </div>
                <div class="left-block__item">
                    <div class="left-block__info">
                    <div class="left-block__date">7 июня 2023</div>
                    <a class="left-block-dark__link" href="#">Встречи с потенциальными клиентами в Подмосковье и Смоленской области</a>
                    </div>
                </div>
                <div class="left-block__item">
                    <div class="left-block__info">
                    <div class="left-block__date">2 июня 2023</div>
                    <a class="left-block-dark__link" href="#">С днем рождения ТЕХНО-АС</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="left-block-news__blocks">
    <div class="left-block-top__block">
        <div class="left-block-title__block">Методики</div>
        <a class="left-block-title__blockk" href="#">Все методики</a>
    </div>
    <div class="left-block-info__block">
        <div class="left-block-news__items">
            <div class="left-block__item">
                <div class="left-block__image">
                <a href="#">
                    <img
                    data-lazyload=""
                    class="img-responsive lazyloaded"
                    src="../../assets/header/img/banner.jpg"
                    data-src=""
                    alt=""
                    title="" style="border-radius: 50px;"/>
                </a>
                </div>
                <div class="left-block__info">
                    <a class="left-block-dark__link" href="#">Обследование местности перед проведением земляных работ</a>
                </div>
            </div>
            <div class="left-block__item">
                <div class="left-block__image">
                <a href="#">
                    <img
                    data-lazyload=""
                    class="img-responsive lazyloaded"
                    src="../../assets/header/img/banner.jpg"
                    data-src=""
                    alt=""
                    title="" style="border-radius: 50px;"/>
                </a>
                </div>
                <div class="left-block__info">
                <a class="left-block-dark__link" href="#">Поиск повреждения оптоволоконной кабельной линии</a>
                </div>
            </div>
            <div class="left-block__item">
                <div class="left-block__image">
                <a href="#">
                    <img
                    data-lazyload=""
                    class="img-responsive lazyloaded"
                    src="../../assets/header/img/banner.jpg"
                    data-src=""
                    alt=""
                    title="" style="border-radius: 50px;"/>
                </a>
                </div>
                <div class="left-block__info">
                <a class="left-block-dark__link" href="#">Поиск утечки из трубы водоснабжения на
                    территории промышленного предприятия</a> 
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>


<style lang="scss">
.left-block{
    width: 220px;
    &-banners{
        margin-top: 24px;
    }
    &-btn-use-devices{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #cd0016;
        text-align: center;
        padding: 10px 10px 10px 10px;
        margin-bottom: 20px;
        margin-top: 20px;
        &:hover{
            opacity: 0.8;
        }
    }
    &-btn-use-device{
            text-decoration: none;
            padding: 5px 8px 5px 14px;
            text-align: left;
            font-size: 16px;
            font-weight: 600;
            line-height: normal;
            color: #fff !important;
        }
    &-ask-small-block{
        border: 1px solid #e5e5e5;
        
    }
    &__description{
            border-top: 1px solid #e5e5e5;
        }
    &__title{
        font-size: 16px;
        font-weight: 500;
        color: #1d2029;
        padding: 14px 19px 3px;
    }    
    &-ask-btn-block{
        padding: 29px 20px;
        text-align: center;
    }
    &-vbig__btn{
    padding: 10px 10px 10px 10px;
    width: auto;
    color: #FFF !important;
    background: #e10018;
    text-decoration: none;
    &:hover{
        opacity: 0.8;
    }
    }
    &__description{
        padding: 10px 19px 10px;
        background: #f6f6f7;
        font-size: 13px;
        line-height: 18px;
    }
    &-subscribe__wrap{
        border: 1px solid #e5e5e5;
        margin-top: 20px;
        margin-bottom: 20px;
        background: #f6f6f7;
    }
    &-subscribe__form{
        padding: 14px 19px 21px 19px;
        border-bottom: 4px solid #dc0017;;
    }
    &_title{
        font-size: 16px;
        font-weight: 500;
        color: #1d2029;
        margin: 0px 0px 8px;
    }
    &__more{
        font-size: 13px;
        color: #666666;
        line-height: 16px;
    }
    &-email__wrap{
        position: relative;
        margin-top: 20px;
    }
    &-email_input{
        background: #fff;
        font-size: 14px;
        padding: 6px 0 6px 13px;
        &:focus{
            outline: none;
        }
    }
    &-send__btn{
        background-color: #dc0017;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 33px;
        height: 32px;
        cursor: pointer;
        padding: 4px;
        &:hover{
            opacity: 0.8;
        }
    }
    &-news__blocks{
        border: 1px solid #eaebec;
        margin: 0px 0px 20px;
        padding: 10px 19px 21px;
    }
    &-top__block{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0px 12px;
        margin: 0px;
    }
    &-title__block{
        font-size: 16px;
        color: #1d2029;
        font-size: 16px;
        font-weight: 500;
        color: #1d2029;
    }
    &-title__blockk{
        font-size: 12px;
        text-decoration: none;
        color: #cd0016 !important;
        &:hover{
            color: #1d2029 !important;
        }
    }
    &__date{
        font-size: 13px;
        color: #666666;
        line-height: 16px;
        margin-bottom: 7px;
    }
    &-dark__link{
        cursor: pointer;
        font-size: 13px;
        text-decoration: none;
        color: #333232 !important;
        &:hover{
            color: #cd0016 !important;
        }
    }
    &__item{
        padding: 0px 0px 20px;
        margin: 0px 0px 20px;
        border-bottom: 1px solid #ebeef1;
        overflow: hidden;
    }
    &__item:last-child {
    border-bottom-width: 0px;
    padding: 0px;
    margin: 0px;
    }
    &__item{
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
}
</style>