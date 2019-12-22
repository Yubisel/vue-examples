var app = new Vue({
    el: '#app',
    data: {
        title: 'Curso de VueJs',
        examples: [
            {
                title: 'v-for and v-if',
                url: './v-for_v-if.html'
            },
            {
                title: 'v-model',
                url: './v-model.html'
            },
            {
                title: 'computed',
                url: './computed.html'
            },
            {
                title: 'v-bind:class',
                url: './v-bind-class.html'
            },
            {
                title: 'CRUD localStorage',
                url: './crud-localstorage.html'
            }
        ]
    }
});