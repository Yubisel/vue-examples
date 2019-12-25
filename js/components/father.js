Vue.component('father', {
    template: 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre {{fnum}}</h2>
        <input type="text" v-model="fnum" name="fnum">
        <child :number="fnum"></child>
    </div>
    `,
    data(){
        return {
            fnum: 0
        }
    }
});