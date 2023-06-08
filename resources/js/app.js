require('./bootstrap');

// jquery
import $ from "jquery";
$(document).ready(function() {
    // $("#DI_Icon").hide();
});

// bootstrap
import * as bootstrap from 'bootstrap';

// vue
import * as Vue from 'vue';
import { createApp, reactive } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';
import HtmlEntities from '../js/HtmlEntities.vue';
import Icons from '../js/Icons.vue';

const createMyApp = options => {
    const app = createApp(options)
  
    // 加上全域設定
    app.component('Header', Header)
       .component('Footer', Footer)
       .component('Loading', Loading)
       .component('HtmlEntities', HtmlEntities)
       .component('Icons', Icons);

    return app
}
createMyApp(Header).mount('#header')
createMyApp(Footer).mount('#footer')
createMyApp(Loading).mount('#loading')
createMyApp(HtmlEntities).mount('#htmlEntities');
createMyApp(Icons).mount('#icons');

// axios
import axios from "axios";
import { method } from "lodash";
const JsonIcon = 'json/icon.json'

// const DI_Icon = {
//     data() {
//         return {
//             icon : null,
//             data : []
//         }
//     },
//     methods : {
//         async getData() {
//             // console.log(this.icon) // 先確定可以傳到資料
//             await axios
//                     .get(HtmlEntities)
//                     .then((res) => {
//                         this.data = res.data.icons
//                         console.log(this.data)
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     })
//         }
//     }
// }
// createMyApp(DI_Icon).mount('#DI_Icon')

// 使用解構的方式從Vue裡面法ref方法取出來(做雙向綁定)
// const { ref } = Vue;
// const DI_Icon = { 
//     setup() { 
//         // 利用ref雙向綁定語法將內容塞進msg裡面，就可以直接操作msg的data 
//         const msg = ref('1');
//         return { 
//             // 當做完 ref動作時，必須要將資料返回到模板語法裡面。
//             // 需要放到HTML上的資料，需要return出來
//             msg,
//         }
//     }
// }
// createMyApp(DI_Icon).mount('#DI_Icon')

// 用到什麼東西就宣告什麼東西
const { onBeforeMount } = Vue;

// 宣告一個叫 DI_Icon 的Object，放到createApp(),裡面。
const DI_Icon = {
    // setup函式，是接下來所有在操作跟vuejs相關的內容都會在這裡面
    setup() {
        const state = reactive ({
            icons : null,
        })
        onBeforeMount(() => {
            axios
                .get(JsonIcon)
                .then(function(res){
                    state.icons = res.data.icons;
                })
                .catch(function(res) {
                    console.log(res);
                })
        })
        return { state };
    }
}
// 先將Vue3實體準備好，並塞入實體好了的Object，直接mount到模板的div(#DI_Icon)
createMyApp(DI_Icon).mount('#DI_Icon')

