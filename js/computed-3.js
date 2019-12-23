var app = new Vue({
    el: '#app',
    data: {
        title: 'computed example',
        pct: 0,
        step: 1
    },
    methods: {
        addPct(){
            // if (this.pct)
            this.pct += this.step;
        },
        substractPct(){
            this.pct -= this.step;
        }
    },
    computed: {
        color(){
            return {
                'bg-danger': this.pct < 25,
                'bg-warning': this.pct >= 25 && this.pct < 50,
                'bg-info': this.pct >= 50 && this.pct < 75,
                'bg-success': this.pct >= 75,
            };
        }
    },
});