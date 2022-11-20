import axios from "axios";
import Global from "@/Global";

export default class EmpleadosService {
 
  accessToken(datos) {
    return new Promise(function (resolve) {
      var request = "/Auth/Login";
      var url = Global.urlPlantilla + request;
      var token = "";
      axios.post(url, datos).then((res) => {
        token = res.data.response;
        localStorage.setItem("token", token);
        resolve(token);
      });
    });
  }

  getEmpleadosToken() {
    return new Promise(function (resolve) {
      var request = "api/Empleados";
      var url = Global.urlPlantilla + request;
      var token = localStorage.getItem('token');
      var empleados = [];
      axios.get(url, {headers: {'Authorization': 'bearer ' + token }}).then((res) => {
        empleados = res.data;
        resolve(empleados);
      });
    });
  }

  getEmpleadoDetalle(id) {
    return new Promise(function(resolve){
        var request = "/api/Empleados/" + id;
        var url = Global.urlPlantilla + request;
        var token = localStorage.getItem('token');
        var empleado = {};
        axios.get(url, {headers: {'Authorization': 'bearer ' + token }}).then(res=>{
            empleado = res.data;
            resolve(empleado);
        })
    })
  }
}
