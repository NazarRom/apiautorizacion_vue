<template>
  <div v-if="empleado"> 
    <h1>Detalles</h1>
    <table class="table table-info">
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{empleado.apellido}}</td>
          <td>{{empleado.oficio}}</td>
          <td>{{empleado.salario}}</td>
        </tr>
      </tbody>
    </table>
    <td><router-link to="/empleados" class="btn btn-warning">Volver</router-link></td>
  </div>
</template>

<script>
import EmpleadosService from "@/services/EmpleadosService";
const services = new EmpleadosService();
export default {
  name: "DetallesEmpleado",
  data() {
    return {
      empleado: null,
    };
  },
  mounted() {
    var id = this.$route.params.id;
    services.getEmpleadoDetalle(id).then((res) => {
      this.empleado = res;
    });
  },
};
</script>

<style></style>
