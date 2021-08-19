import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    count: 12345678
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                count: prevState.count + 1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

// reducer will generate a bunch of states, and as the states are generated, they will be stored in the store
// then we need to PROVIDE that store to the component
const store = createStore(reducer)

const CounterRedux = () =>

    // return div is nested under the provider so that all components have acces to provider's store
    <Provider store={store}>
        <div>
            <CounterDisplay/>
            <CounterUp/>
            <CounterDown/>
        </div>
    </Provider>

export default CounterRedux