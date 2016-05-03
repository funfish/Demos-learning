<template>
	<div>
		<img src="../assets/images/index.png" alt="" class="index">
	</div>
</template>
<script>
    export default {
        ready (){
            setTimeout(() => {
                this.$route.router.go({ name: 'list'});
                //路由对象导航到新路由list
            },1000);
        }
    }
</script>
<style lang='sass'>
	@import '../assets/scss/common.css';
	.index{
		width: 100%;
		background-color: #fff;
		margin-top: 40%;
	}
	#page{
    font-family:  Arial,arial,sans-serif;
    margin: 10px;
}
</style>