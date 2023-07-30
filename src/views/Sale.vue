<template>
  <div class="Stock">
     <StockVue/>
     <div class="right_side wide">
		<div class="ask_small_block">
			<div class="ask_btn_block">
				<a class="button vbig_btn wides ask_btn"><span>Задать вопрос</span></a>
			</div>
			<div class="description">
				Наши специалисты с радостью ответят на любой интересующий вопрос по предлагаемой продукции.			
      </div>
		</div>
	</div>
  </div>
</template>

<script>
import StockVue from '../components/main/StockVue.vue';

export default {
  components: {
      StockVue,
  }
  }
</script>

<style lang="scss">
.Stock{
  margin-left: 20px;
  display: flex;
  justify-content: start;
  .stock-image-block_1__info {
    line-height: 18px;
    padding: 20px 55px 0 0;
}
  .stock-image-block_1 {
    height: 0;
    position: relative;
    box-shadow: 0 0 1px #a2a6aa inset;
    transition: box-shadow ease-out 0.2s, border ease-out 0.2s;
}
  .stock-image-block {
    display: inline-block;
    vertical-align: top;
    padding: 6px 6px;
    width: 32%;
}
  .stock-item__titla {
    text-decoration: none;
    font-size: 13px;
    color: #cd0016 !important;
    display: none;
  }
  .stock-item__title {
    display: inline-block;
    font-size: 30px;
    color: #181818;
    line-height: 30px;
    font-weight: 600;
    margin-left: 7px;
  }
  .stock {
    margin: 30px 0 0 0;
    padding: 10px 0 40px 0;
    border: none;
  }
.right_side.wide {
    width: 270px;
    margin-top: 120px;
}
.right_side {
    float: right;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.ask_small_block {
  width: 200px;
  border: 1px solid #e5e5e5;
}
.ask_small_block .ask_btn_block {
    padding: 29px 20px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
}
.button.vbig_btn.wides {
    padding: 10px 12px;
    width: auto;
    color: #FFF;
    background: #e10018;
    &:hover{
      background: #d2323e;
    }
}
.button.vbig_btn {
    width: auto;
}
.ask_small_block .description {
    font-size: 13px;
    line-height: 18px;
    padding: 19px 24px 19px;
}
}
</style>