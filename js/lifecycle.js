var app = new Vue({
    el: '#app',
    data: {
        title: 'lifecycle example',
    },
    beforeCreate: function () {
        alert('Before Create');
    },
    created: function () {
        alert('Created');
    },
    beforeMount: function () {
        alert('Before Mount');
    },
    mounted: function () {
        alert('Mounted');
    },
    beforeUpdate: function () {
        alert('Before Update');
    },
    updated: function () {
        alert('Updated');
    },
    beforeDestroy: function () {
        alert('Before Destroy');
    },
    destroyed: function () {
        alert('Destroyed');
    }
});