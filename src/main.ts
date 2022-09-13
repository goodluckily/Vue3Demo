import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';//全局 导入组件
import 'element-plus/dist/index.css' //全局 导入样式
import router from './routes'//导入路由
import store from './vuex/store'//导入vuex

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);

app.mount('#app');
