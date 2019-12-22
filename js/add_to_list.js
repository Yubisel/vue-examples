var app = new Vue({
    el: '#app',
    data: {
        studentsList: [],
        name: '',
        avg: ''
    },
    methods: {
        addNote (){
            status = false;
            if (this.avg >= 12.5){
                status = true;
            }
            if (this.name != '' && this.avg != ''){
                this.studentsList.push({name: this.name, avg: this.avg, status: status});
                this.name = '';
                this.avg = '';
            }else{
                alert('ingrese nombre y promedio del estudiante')
            }
        }
    },
})