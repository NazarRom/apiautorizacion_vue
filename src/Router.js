import { createWebHistory, createRouter } from "vue-router";
import PlantillaComponent from './components/PlantillaComponent.vue';
import InicioComponent from './components/InicioComponent.vue';
import DetallesEmpleado from './components/DetallesEmpleado.vue';
const Routes = [
{
    path:"/", component: InicioComponent
},
{
    path:"/empleados",component:PlantillaComponent
},
{
    path:"/detalles/:id", component:DetallesEmpleado
}
]

const router = createRouter({
    history:createWebHistory(), 
    routes:Routes
});
export default router;