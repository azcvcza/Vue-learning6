<template>
<div>
	<table class="table table-sm table-striped table-bordered">
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Price</th>
			<th></th>
		</tr>
		<tbody>
			<tr v-for="p in product" v-bind:key="p.id">
				<td>{{p.id}}</td>
				<td>{{p.name}}</td>
				<td>{{p.price}}</td>
				<td>
					<button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">Edit</button>
				</td>
			</tr>
		</tbody>
	</table>
	<div class="text-center">
		<button class="btn btn-primary" v-on:click="createNew">Create New</button>
	</div>
</div>
</template>
<script>
import Vue from "vue";
export default {
	data:function(){
		return {
			product:[
				{id:1,name:"kkk1",price:275},
				{id:2,name:"kkk2",price:275},
				{id:3,name:"kkk3",price:275},
				{id:4,name:"kkk4",price:275},
				{id:5,name:"kkk5",price:275},
				{id:6,name:"kkk6",price:275},
				{id:7,name:"kkk7",price:275},
				{id:8,name:"kkk8",price:275},
				{id:9,name:"kkk9",price:275},
			]
		}
	},
	filters:{
		currency(value){
			return `$${value}.toFixed(2)`;
		}
	},
	methods:{
		createNew(){
			this.product.push({
				id:this.product.length+1,
				name:"kkk"+(this.product.length+1),
				price:275
			});
			this.eventBus.$emit("create");
		},
		processComplete(product){
			let index = this.product.findIndex(p=>p.id == product.id);
			if(index == -1){
				this.product.push(product);
			}
			else{
				Vue.set(this.product,index,product);
			}
		},
		editProduct(product){
			this.eventBus.$emit("edit",product);
			console.log("click on product")
		}
	},
	inject:["eventBus"],
	created(){
		this.eventBus.$on("complete",this.processComplete);
	}
}
</script>
