import React from 'react'
import { connect } from 'react-redux'
import Example from '../components/Common/example';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req , pathname, query}) {
    return {}
  }

  render () {
    return (
      <div>
        contact githib: tickstudiu.
        <Example/>
      </div>
    )
  }
}

export default connect(
  null,
  null
)(Index)
