import { createStore } from 'vuex'

interface State{
    props?: boolean;
    name: String;
}

export default createStore<State>({
    state: {
        props: undefined,
        name: ''
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        
    }
})