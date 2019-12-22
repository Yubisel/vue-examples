var app = new Vue({
    el: '#app',
    data: {
        title: '(v-for) - (v-if) example',
        fruits: [
            {
                name: 'Apple',
                cant: 15
            },
            {
                name: 'Orange',
                cant: 10
            },
            {
                name: 'Pinneaple',
                cant: 18
            },
            {
                name: 'Pear',
                cant: 0
            }
        ]
    }
});