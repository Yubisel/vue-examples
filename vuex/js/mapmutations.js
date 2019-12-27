Vue.component('father', {
    template: /*html*/ `
    <div class="bg-dark p-4 text-white">
        <h4>Number: {{number}}</h4>
        <child></child>
    </div>
    `,
    computed: {
        ...Vuex.mapState([
            'number'
        ])
    },
});


Vue.component('child', {
    template: /*html*/ `
    <div class="bg-success p-4 text-white">
    <button @click="substractNumber(2)">-</button>
    <button @click="addNumber">+</button>
        <h4>Number: {{number}}</h4>
    </div>
    `,
    computed: {
        ...Vuex.mapState([
            'number'
        ])
    },
    methods: {
        ...Vuex.mapMutations(['addNumber', 'substractNumber'])
    },
});


const store = new Vuex.Store({
    state: {
        number: 10
    },
    mutations: {
        addNumber(state) {
            state.number++;
        },
        substractNumber(state, n) {
            state.number-=n;
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