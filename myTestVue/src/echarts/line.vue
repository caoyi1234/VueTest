<template>
  <div>
    <h1>Echarts_line</h1>
    <div id="myChart"></div>
  </div>
</template>
<script>
export default {
  name: "ChartsView",
  components: {},
  data() {
    return {
      data: [],
      title: [],
      array: []
    };
  },
	created(){
		this.getData();
		console.log(this.$store);
	},
  mounted() {
    this.init();
  },
  methods: {
		getData(){
			this.$axios.get('/user/login').then(res=>{
				console.log(res);
			})
		},
    init() {
      // /*分成两个集合*/
      this.data = [];
      this.title = [];
      for (var i = 0; i < this.array.length; i++) {
        this.data.push(this.array[i].count);
        this.title.push(this.array[i].title);
      }

      this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart {
  background: orange;
  width: 1000px;
  height: 300px;
  margin: 0 auto;
}
</style>
