Vue.component('father', {
    template: /*html*/ `
    <div class="bg-dark p-4 text-white">
        <h4>Courses list</h4>
        <button class="btn btn-sm btn-success mb-3" @click="getCourses">Get Courses</button>
        <ul v-if="courses != []">
        <li v-for="course of courses">{{course.name}}</li>
    </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['courses'])
    },
    methods: {
        ...Vuex.mapMutations(['addNumber', 'substractNumber']),
        ...Vuex.mapActions(['getCourses'])
    },
});


const store = new Vuex.Store({
    state: {
        courses: []
    },
    mutations: {
        fillCourses(state, list) {
            state.courses = list;
        }
    },
    actions: {
        async getCourses({
            commit
        }) {
            const data = await fetch('../data/courses.json');
            const couses = await data.json();
            commit('fillCourses', couses);
        }
    }
});


var app = new Vue({
    el: '#app',
    store,
    data: {
        title: 'ejemplo de mapActions'
    }
});