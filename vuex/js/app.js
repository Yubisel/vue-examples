Vue.component('father', {
    template: /*html*/ `
    <div class="bg-dark p-4 text-white">
        <h4>Number: {{$store.state.number}}</h4>
        <child></child>
    </div>
    `
});


Vue.component('child', {
    template: /*html*/ `
    <div class="bg-success p-4 text-white">
        <button @click="$store.commit('addNumber')">+</button>
        <h4>Number: {{$store.state.number}}</h4>
    </div>
    `
});


const store = new Vuex.Store({
    state: {
        number: 10
    },
    mutations: {
        addNumber(state) {
            state.number++;
        }
    }
});


var app = new Vue({
    el: '#app',
    store,
    data: {
        title: 'ejemplo de vuex'
    }
});