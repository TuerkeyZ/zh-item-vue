<template class="row">
    <thumb-nail :photo_src="photo_src"></thumb-nail>
    <thumb-nail :photo_src="photo_src"></thumb-nail>
    <thumb-nail :photo_src="photo_src"></thumb-nail>
    <thumb-nail :photo_src="photo_src"></thumb-nail>
</template>

<script>
    import ThumbNail from "../components/thumb-nail"
    export default {
        components:{
            ThumbNail
        },
        data(){
            return{
                photo_src:"./imgs/老婆.jpg"
            }
        }
    }
</script>

<style scoped>

</style>