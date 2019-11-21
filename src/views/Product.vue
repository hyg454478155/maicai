<template>
  <div>
    <div class="div1">
      <van-search placeholder="搜索" shape="round" ></van-search>
    </div>
    <div class="divx"></div>
    <div class="div2">
      <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIDX"
      height="100%"
      >
        <template slot="content">
          <div v-if="activeIDX==0" style="position:fixed">
            <div class="item" v-for="(item,index) in list" :key="index">
              <img :src="`http://127.0.0.1:4000/pro/`+item.img_url" alt="">
              <div>
              <p class="itemTitle">{{item.pname}}</p>
              <p class="itemSubTitle">{{item.details}}</p>
              <span class="price">{{"￥"+Number(item.price).toFixed(2)}}</span>
              <span class="originPrice">{{"￥"+Number(item.price).toFixed(2)}}</span>
              <div class="buyCar"
           >
              <svg viewBox="0 0 52 52"
                  class="icon icon-60">
                <defs>
                  <radialGradient cx="27.0288363%"
                                  cy="10.3693483%"
                                  fx="27.0288363%"
                                  fy="10.3693483%"
                                  r="93.8427229%"
                                  id="radialGradient-1">
                    <stop stop-color="#4ECA75"
                          offset="0%"></stop>
                    <stop stop-color="#39B460"
                          offset="100%"></stop>
                  </radialGradient>
                </defs>
                <g stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd">
                  <g transform="translate(-678.000000, -2742.000000)">
                    <g transform="translate(678.000000, 2742.000000)">
                      <rect fill="url(#radialGradient-1)"
                            x="0"
                            y="0"
                            width="51.8699976"
                            height="51.8699976"
                            rx="25.9349988"></rect>
                      <path fill="#FFFFFF"
                            d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                      <path stroke="#FFFFFF"
                            stroke-width="2.6"
                            stroke-linecap="round"
                            d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
              </div>
            </div>
          </div>
          <div v-if="activeIDX==1" style="position:fixed">
            <div class="item" v-for="(item,index) in list" :key="index">
              <img :src="`http://127.0.0.1:4000/pro/`+item.img_url" alt="">
              <div>
              <p class="itemTitle">{{item.pname}}</p>
              <p class="itemSubTitle">{{item.details}}</p>
              <span class="price">{{"￥"+Number(item.price).toFixed(2)}}</span>
              <span class="originPrice">{{"￥"+Number(item.price).toFixed(2)}}</span>
              <div class="buyCar"
           >
            <svg viewBox="0 0 52 52"
                class="icon icon-60">
              <defs>
                <radialGradient cx="27.0288363%"
                                cy="10.3693483%"
                                fx="27.0288363%"
                                fy="10.3693483%"
                                r="93.8427229%"
                                id="radialGradient-1">
                  <stop stop-color="#4ECA75"
                        offset="0%"></stop>
                  <stop stop-color="#39B460"
                        offset="100%"></stop>
                </radialGradient>
              </defs>
              <g stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd">
                <g transform="translate(-678.000000, -2742.000000)">
                  <g transform="translate(678.000000, 2742.000000)">
                    <rect fill="url(#radialGradient-1)"
                          x="0"
                          y="0"
                          width="51.8699976"
                          height="51.8699976"
                          rx="25.9349988"></rect>
                    <path fill="#FFFFFF"
                          d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                    <path stroke="#FFFFFF"
                          stroke-width="2.6"
                          stroke-linecap="round"
                          d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                  </g>
                </g>
              </g>
            </svg>
            </div>
              </div>
            </div>
          </div>
          <div v-if="activeIDX==2" style="position:fixed">
                  <div class="item" v-for="(item,index) in list" :key="index">
                    <img :src="`http://127.0.0.1:4000/pro/`+item.img_url" alt="">
                    <div>
                    <p class="itemTitle">{{item.pname}}</p>
                    <p class="itemSubTitle">{{item.details}}</p>
                    <span class="price">{{"￥"+Number(item.price).toFixed(2)}}</span>
                    <span class="originPrice">{{"￥"+Number(item.price).toFixed(2)}}</span>
                    <div class="buyCar"
                >
                  <svg viewBox="0 0 52 52"
                  class="icon icon-60">
                  <defs>
                    <radialGradient cx="27.0288363%"
                                  cy="10.3693483%"
                                  fx="27.0288363%"
                                  fy="10.3693483%"
                                  r="93.8427229%"
                                  id="radialGradient-1">
                    <stop stop-color="#4ECA75"
                          offset="0%"></stop>
                    <stop stop-color="#39B460"
                          offset="100%"></stop>
                  </radialGradient>
                </defs>
                <g stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd">
                  <g transform="translate(-678.000000, -2742.000000)">
                    <g transform="translate(678.000000, 2742.000000)">
                      <rect fill="url(#radialGradient-1)"
                            x="0"
                            y="0"
                            width="51.8699976"
                            height="51.8699976"
                            rx="25.9349988"></rect>
                      <path fill="#FFFFFF"
                            d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                      <path stroke="#FFFFFF"
                            stroke-width="2.6"
                            stroke-linecap="round"
                            d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
                    </div>
                  </div>
          </div>
          <div v-if="activeIDX==3">豆制品</div>
          <div v-if="activeIDX==4">水鲜产品</div>
          <div v-if="activeIDX==5">肉禽蛋</div>
          <div v-if="activeIDX==6">海鲜水产</div>
          <div v-if="activeIDX==7">乳品烘培</div>
          <div v-if="activeIDX==8">火锅来了</div>
          <div v-if="activeIDX==9">营养早餐</div>
          <div v-if="activeIDX==10">叮咚心选</div>
          <div v-if="activeIDX==11">米面粮油</div>
          <div v-if="activeIDX==12">调味品</div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      pno:0,
      list:[],
      activeId:0,
      activeIDX:0,
      items:[
        {text:"推荐",children:[]},
        {text:"绿卡专享",children:[]},
        {text:"安心蔬菜",children:[]},
        {text:"豆制品",children:[]},
        {text:"新鲜水果",children:[]},
        {text:"肉禽蛋",children:[]},
        {text:"海鲜水产",children:[]},
        {text:"乳品烘培",children:[]},
        {text:"火锅来了",children:[]},
        {text:"营养早餐",children:[]},
        {text:"叮咚心选",children:[]},
        {text:"米面粮油",children:[]},
        {text:"调味品",children:[]},
        {text:"方便速食",children:[]},
        ],
    }
  },
  methods:{
    loadMore(){
      var url="product";
      this.pno++;
      var obj={pno:this.pno};
      this.axios.get(url,{params:obj})
      .then(res=>{
        var rows=this.list.concat(res.data.data);
        this.list=rows;
      })
    },
    ch(){
      console.log(1);
    }
  },
  watch:{

  },
  created(){
    this.loadMore();
  }

}
</script>
<style scoped>
  .div1{
    width:100%;
    position:fixed;
    z-index: 1;
  }
  .van-search__content{
    background-color:#eee;
  }
  .divx{
    height:54px;
  }
  .van-sidebar-item{
    background-color:#eee;
  }
  .item{
    width:100%;
    border-bottom:1px  #e6e6e6 solid;
    position:relative;
    display:flex;
  }
  img{
    width:40%;
   
  }
   .item .itemTitle {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  line-height: 1rem;
  font-size: 0.625rem;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item .itemSubTitle {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: gray;
  padding-top: 0.2rem;
  font-size: 0.45rem;
  line-height: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 1.5rem;
}
.item .price {
  padding-left: 0.5rem;
  color: #f37078;
  font-size: 0.928rem;
}
.tagEat {
  margin-left: 0.5rem;
  padding: 0.09rem;
  color: orangered;
  width: 2.5rem;
  height: 0.1rem;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  border: 0.05rem solid red;
}

.originPrice {
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
.buyCar {
  position: absolute;
  width:1.5rem;
  height:1.5rem;
  right:1rem;
  bottom:0.5rem;
}
</style>
