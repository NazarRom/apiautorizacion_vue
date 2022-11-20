<template>
  <table class="table table-info">
    <thead>
        <tr>
            <th>Id</th>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
            <th>Detalles</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="emp in empleados" :key="emp">
            <td>{{emp.idEmpleado}}</td>
            <td>{{emp.apellido}}</td>
            <td>{{emp.salario}}</td>
            <td>{{emp.oficio}}</td>
            <td><router-link :to="'/detalles/'+ emp.idEmpleado" class="btn btn-success">Detalles</router-link></td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import EmpleadosService from '@/services/EmpleadosService';
const services = new EmpleadosService();
export default {
name:"PlantillaComponent",
data() {
    return{
        empleados :[]
    }
},
mounted(){
    services.getEmpleadosToken().then(resolve=>{
        this.empleados = resolve;
    })
}
}
</script>

<style>

</style>