import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount } from '../../store'

class Example extends Component {
  state = {
    number: 0,
  }

  increment = (number) => {
    this.props.incrementCount(number)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>
          Count: <span>{this.props.count}</span>
        </h1>
        <input type="number" name="number" onChange={this.handleChange}/>
        <button onClick={() => this.increment(this.state.number)}>Add</button>
      </div>
    )
  }
}

function mapStateToProps ({ count }) {
  return { count }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)