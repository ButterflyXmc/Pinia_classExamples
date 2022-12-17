// this concept is called destructure
import { defineStore } from "pinia";

// = 'name', and then the object
// the user counterStore is a function that can be used later
export const useCounterStore = defineStore('counter', {
    // define 3 things in the store
    // equivalent to vdata

    state: () => {
        return {
            counter: 0,
            name: "John",
            isNotification: false
        }
    },
    //global methods
    actions: {
        notify() {
            this.isNotification = true;
        },
        // need to define this fucntion in the mapState
        clearNotification() {
            this.isNotification = false;
            this.counter = 0;
        }
        // add it in the ToastComp
    },
    // getters : useful to have have calculations ready in a state without having to write it again
    getters: {
        double(state) {
            // we want return the double
            return state.counter * 2;
            // then add it to the counterComp div and in computer for it to work
        },
        circleArea(state) {
            return state.counter * state.counter * 3.14;
            // then add it to the counterComp div and in computer for it to work

        }
    }
})

// --------------------------------------NOTES------------------------------------
// if a variable is used by a single comp, does not belong in the global state
// global state is for the variable that are shared between the comp
