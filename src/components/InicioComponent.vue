<template>
  <h1>Hola</h1>
  <form method="post" v-on:submit.prevent="accesEmopleados()">
    <label>Apellido</label><br/>
    <input v-model="datos.userName" class="form-control" type="text"/><br/>
    <label>Id</label><br/>
    <input v-model="datos.password" class="form-control" type="text"/><br/>
    <button class="btn btn-success">Entrar</button>
  </form>
</template>

<script>
import EmpleadosService from '../services/EmpleadosService.js'
const services = new EmpleadosService();
export default {
name:"InicioComponent",
data(){
    return{
        datos:{
           userName: "",
           password:"" 
        }
    }
},
methods:{
    accesEmopleados(){
        services.accessToken(this.datos).then(result=>{
            console.log(result);
            this.$router.push("/empleados");
        });
        
    } 
}
}
</script>

<style>

</style>