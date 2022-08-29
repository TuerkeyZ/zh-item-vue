<template xmlns:http="">
<input type="button" @click="returnAjax(url)">
</template>

<script>
    function sendAJAX(url){
        return new Promise((resolve,reject)=>{
            const x=new XMLHttpRequest();
            x.open('GET',url);
            x.send();
            x.onreadystatechange=function (){
                if(x.readyState===4){
                    if(x.status>=200&&x.status<300){
                        resolve(x.response);
                    }
                    else{
                        reject(x.status);
                    }
                }
            }
        })
    }

    export default {
        methods:{
            async returnAjax(url){
                try{
                    let result=await sendAJAX(url);
                    console.log(result);
                }catch (e){
                    console.log(e);
                }
            }
        },
        data(){
            return{
                url:/index.html/
            }
        }
    }


</script >

<style >

</style>