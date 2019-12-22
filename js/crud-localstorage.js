var app = new Vue({
    el: '#app',
    data: {
        title: 'CRUD localStorage example',
        taskName: '',
        tasks: [{
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
        addTask() {
            if (this.taskName !== '') {
                this.tasks.push({
                    name: this.taskName,
                    cant: 0
                });
            }
            this.taskName = '';
        }
    },
    computed: {
        // calcTotal() {
        //     let total = 0;
        //     for (const fruit of this.fruits) {
        //         total += fruit.cant;
        //     }
        //     return total;
        // }
    },
});