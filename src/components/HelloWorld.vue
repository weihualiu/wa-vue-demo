<template>
  <div class="bigBox">
    <div>
      <button class="start" v-on:click="start">开始</button>
      <button class="end" v-on:click="end">结束</button>
    </div>
    <div class="hello">
      <div class="box" v-for="(item, index) in arr" :key="index">
        <div class="tit" v-show='a==index'>+1</div>
        <div class="tit">{{ item.tit }}</div>
        <div class="chart">
          <div class="top" v-if="item.tit <= 0">{{index+1}}</div>
          <div class="bottom" v-else>{{index+1}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tls} from "../../wasm/wasm_bridge"
export default {
  name: 'HelloWorld',
  data(){
    return {
      arr:[{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },{
      tit:0
      },],
      num:[],
      bool:1,
      a:''
    }
  },
  updated(){
    if(this.num.length==32){
      alert('全部命中')
    }
  },
  methods:{
    async start(){
      this.bool=1
      while(this.num.length<32&&this.bool==1){
        await tls().then(result => {
          var data = result.data();
          var data0 =data.substr(data.indexOf("ewp_production@") + 23, 2);
          console.log(data0);
          this.arr[data0-1].tit++
          this.a=data0-1
          if(this.num.indexOf(data0)<0){
            this.num.push(data0)
          }
        })
      }
    },
    end(){
      this.bool=0
      console.log(this.bool)
    }
    },
  
  
}
</script>
<style scoped>
.bigBox {
  width: 100%;
}
.start,
.end {
  width: 100px;
  margin: 10px 30px;
}
.hello {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
}
.tit {
  padding-left: 15%;
  text-align: left;
}
.box {
  width: 6%;
  height: 100px;
  margin: 20px 0;
}
.chart {
  width: 40%;
  height: 100%;
}
.top {
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;
}
.bottom {
  width: 100%;
  height: 100%;
  background-color: brown;
  color:white;
}
</style>
