Vue.component('father', {
    template: 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre {{fnum}}</h2>
        <h4>{{fName}}</h4>
        <input type="text" v-model="fnum" name="fnum">
        <child :number="fnum" @cName="fName = $event"></child>
    </div>
    `,
    data(){
        return {
            fnum: 0,
            fName: ''
        }
    }
});