import React from 'react'
import {connect} from 'react-redux'

const CounterUp = ({up}) =>
    <button onClick={up}>
        Up
    </button>

// not really needed here, Up doesn't care abotu the state, it just needs to invoke a function from the parent
const stateToPropertyMapper = (state) => {}

// function equivalent to this.setState. it allows us to change the state
const dispatchToPropertyMapper = (dispatch) => {
    return {
        up: () => {
            dispatch({type: "UP"})
        }
    }
}

export default (connect(
        stateToPropertyMapper,
        dispatchToPropertyMapper)
)(CounterUp)












