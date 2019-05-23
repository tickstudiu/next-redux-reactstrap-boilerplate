import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req , pathname, query}) {
    return {}
  }

  render () {
    return (
      <div>
        about
      </div>
    )
  }
}

export default connect(
  null,
  null
)(Index)
