<template>
<div>
	<EditorField label="id" editorFor="id"></EditorField>
	<EditorField label="Name" editorFor="name"></EditorField>
	<EditorField label="Price" editorFor="price"></EditorField>
	<div class="text-center">
		<button class="btn btn-primary" v-on:click="save">{{editing?"Save":"Create"}}</button>
		<button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
	</div>
</div>

</template>
<script>
import Vue from "vue";
import EditorField from "./EditorField"
export default {
	data:function(){
		return{
			editing:false,
			product:{
				id:0,
				name:"",
				price:0
			},
			localBus:new Vue()
		}
	},
	components:{
		EditorField
	},
	methods:{
		startEdit(product){
			this.editing = true;
			console.group("in startEdit:",product.id,product.name,product.price);
			this.product ={
				id:product.id,
				name:product.name,
				price:product.price
			}
			this.editing = false;
			console.groupEnd("edit end")
			return ;
		},
		startCreate(){
			this.editing = false;
			this.product={
				id:"auto create",
				name:"auto",
				price:1
			}
		},
		save(){
			this.eventBus.$emit("complete",this.product);
			this.startCreate();
			console.log(`Edit complete:${JSON.stringify(this.product)}`)
			
		},
		cancel(){
			this.product ={};
			this.editing = false;
		}
	},
	provide:function(){
		return {
			colors:{
				bg:"bg-dark",
				text:"text-white",
			},
			editingEventBus:this.localBus
		}
	},
	inject:["eventBus"],
	created(){
		this.eventBus.$on("create",this.startCreate);
		this.eventBus.$on("edit",this.startEdit);
		this.localBus.$on("change",(change)=>this.product[change.name] = change.value);
	},
	watch:{
		product(newVal,oldVal){
			this.localBus.$emit("target",newVal);
		}
	}
}
</script>
