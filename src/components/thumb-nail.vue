<template>
            <div class="col-sm-6 col-md-3">
                <div href="#" class="thumbnail">
                    <img :src=photo_src alt="666" class="img-responsive">
                    <div class="caption">
                        <h3>大标题</h3>
                        <p>小标题</p>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        props:{
            photo_src:String
        }

    }

</script>

<style scoped>

</style>