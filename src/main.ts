import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import { createPinia } from "pinia";
import Popper from "vue3-popper";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue3-toastify/dist/index.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
const pinia = createPinia();
const app = createApp(App);
app.directive("click-outside", {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("mousedown", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener("mousedown", el.clickOutsideEvent);
  },
});


app.config.globalProperties.$swal = Swal;
app.use(pinia);
// app.use(router);
app.component("Popper", Popper);
app.mount("#app");