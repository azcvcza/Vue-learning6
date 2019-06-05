<template>
	<div class="form-gropu">
		<label for="">{{label}}</label>
		<input type="text" v-bind:class="[colors.bg,colors.text]" v-model.number="value" class="form-control">
	</div>
</template>

<script>
	export default{
		props:["label","EditorFor"],
		data:function(){
			return {
				value:"",
			}
		},
		inject:{colors:"colors",editingEventBus:"editingEventBus"},
		watch:{
			value(newVal){
				this.editingEventBus.$emit("change",{name:this.editorFor,value:this.value})
			}
		},
		created(){
			this.editingEventBus.$on("target",(p)=>this.value=p[this.editorFor])
		}
	}
</script>