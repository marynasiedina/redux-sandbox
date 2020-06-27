import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
      <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
      <button onClick={rnd} className="btn btn-primary btn-lg">RND</button>
    </div>
  )

}

const mapStateToprops = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToprops = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToprops, actions)(Counter)