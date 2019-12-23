var app = new Vue({
    el: '#app',
    data: {
        title: 'computed example',
        message: ''
    },
    computed: {
        inverseMsg(){
            return this.message.split('').reverse().join('');
        }
    },
});