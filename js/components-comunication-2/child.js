Vue.component('child', {
    template: 
    `
    <div class="mt-2 p-3 bg-success">
    <h4>componente hijo: {{number}}</h4>
    <h4>Nombre: {{name}}</h4>
    </div>
    `,
    props: ['number'],
    data(){
        return {
            name: 'Peter'
        }
    },
    mounted() {
        this.$emit('cName', this.name);
    },
});