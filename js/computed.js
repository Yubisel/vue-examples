var app = new Vue({
    el: '#app',
    data: {
        title: 'computed example',
        fruitName: '',
        fruits: [{
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
    },
    methods: {
        addFruit() {
            if (this.fruitName !== '') {
                this.fruits.push({
                    name: this.fruitName,
                    cant: 0
                });
            }
            this.fruitName = '';
        }
    },
    computed: {
        calcTotal() {
            let total = 0;
            for (const fruit of this.fruits) {
                total += fruit.cant;
            }
            return total;
        }
    },
});