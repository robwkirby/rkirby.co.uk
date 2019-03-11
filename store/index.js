import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            counter: 0,
            colourScheme: "light",
            fromRoute: "",
            toRoute: ""
        },
        mutations: {
            increment(state) {
                state.counter++
            },
            toggleColourScheme(state) {
                state.colourScheme = state.colourScheme == "light" ? "dark" : "light" 
            },
            setFromRoute(state, from) {
                // state.colourScheme = state.colourScheme == "light" ? "dark" : "light"
                state.fromRoute = from.name;
                // console.log("from:" + from.name);
            },
            setToRoute(state, to) {
                // state.colourScheme = state.colourScheme == "light" ? "dark" : "light"
                state.toRoute = to.name;
                // console.log("to:" + to.name);
            }
        }
    })
}

export default createStore