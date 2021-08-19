import React from 'react'
import {connect} from 'react-redux'

const CounterDisplay = ({myCount}) =>

    <h1>
        Count: {myCount}
    </h1>


// this function picks out the parts from the state that it wants
// we pass this function in to the connect
// it received a state
// and it will tell what properties of the state it would like to send to CounterDisplay
const stateToPropertyMapper = (state) => {
    return {
        myCount: state.count
    }
}


// connect returns another function so that's why this syntax is like this
// if a function has a connect, it allows it to pass itself up to the provider and the provider can then pass down the store
// the arguments from the connect allow the component to specify what it wants from the Provider's store
export default (connect(stateToPropertyMapper))(CounterDisplay)