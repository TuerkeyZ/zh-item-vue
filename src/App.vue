<template class="container">
    <div class="nav nav-pills">
        <img src="../public/imgs/zpml.png" class="pull-left">
        <router-link to="/ParticipatingWorks" class="pull-left"><img src="../public/imgs/cyzp.png" alt="参与作品"></router-link>
        <br><br><br>
    <router-link to="/RepresentativeWork" class="pull-left"><img src="../public/imgs/dbzp.png" alt="代表作品"></router-link>
    </div>
    <router-view></router-view>
    <send-ajax></send-ajax>


</template>

<script>
    import SendAjax from "./components/send-ajax"
export default {
  name: 'App',
  components: {
      SendAjax
  },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'overflow-x:hidden;overflow-y:scroll')//滚动栏优化
        document.querySelector('title').setAttribute('style', 'overflow-x:hidden;overflow-y:scroll')//滚动栏优化
    },
    methods(){

    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #DC143C;
}

::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0, 0, 0, 0);
    margin-top: 15px;
    height: calc(100% - 15px);
}

</style>
