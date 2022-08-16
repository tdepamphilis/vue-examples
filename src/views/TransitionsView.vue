<template>
    <div>
        <transition  enter-active-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__bounceOutRight" >
            <div v-if="display" class="block"></div>
        </transition>
        <button  @click="toggle"  class="button">Click</button>
    </div>
  
</template>

<script>
// IMPORTANTE -- INSTALAR PAQUETE 'npm install animate.css --save' ADEMAS DEL IMPORT
import 'animate.css';
export default {
    name: 'TransitionsView',
    data(){
        return{
            display: true,
        }
    },
    methods:{
        toggle(){
            if(this.display == true){
                this.display = false
            }else{
                this.display = true
            }
        }
    }
}
</script>

<style>
.block{
    height: 200px;
    width: 200px;
    border: solid;
    margin-left: auto;
    margin-right: auto;
}
.button{
    border: solid 2px;
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
}

</style>