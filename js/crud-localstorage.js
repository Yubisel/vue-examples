var app = new Vue({
    el: '#app',
    data: {
        title: 'CRUD localStorage example',
        taskName: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.taskName !== '') {
                this.tasks.push({
                    name: this.taskName,
                    status: false
                });
            }
            this.taskName = '';
            localStorage.setItem('task-list', JSON.stringify(this.tasks));
        },
        completeTask(index){
            this.tasks[index].status = true;
            localStorage.setItem('task-list', JSON.stringify(this.tasks));
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
            localStorage.setItem('task-list', JSON.stringify(this.tasks));
        }
    },
    created(){
        let taskDB = JSON.parse(localStorage.getItem('task-list'));
        if (taskDB === null){
            this.tasks = [];
        }else{
            this.tasks = taskDB;
        }
    },
    computed: {
    },
});