Vue.component('child', {
    template: 
    `
    <div class="mt-2 p-3 bg-success">
        <h4>componente hijo: {{number}}</h4>
    </div>
    `,
    props: ['number']
});