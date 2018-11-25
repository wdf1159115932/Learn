var app = new Vue({
	el:'#app',
	data:{
		list:[
			{
				id:1,
				name:'iphone',
				price:6000,
				count:1			
			},{
				id:2,
				name:'ipad',
				price:2000,
				count:1
			},{
				id:3,
				name:'macbook',
				price:18888,
				count:1	
			}
		]
	},
	computed:{
		totalPrice:function(){
			var total = 0;
			for (var i = 0; i < this.list.length; i++) {
				var item = this.list[i]
				total += item.price * item.count
			}/**  replace(/\B(?=(\d{3})+$)/g,',') 将结果转换为带有“千位分隔符”的数字*/
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
		}
	},
	methods:{
		handleReduce:function(index){/**每件商品购买数量最少是1件，所以这里再判断一次。*/
			if (this.list[index].count === 1) { return }
			this.list[index].count --
		},
		handleAdd:function(index){
			this.list[index].count ++
		},
		handleRemove:function(index){
			this.list.splice(index,1)
		}
	}
})