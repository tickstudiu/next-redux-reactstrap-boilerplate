import React from 'react';
import { connect } from 'react-redux';
import {fetchGithub} from '../store';


class Index extends React.Component {
  static getInitialProps ({ reduxStore, req , pathname, query}) {
    reduxStore.dispatch(fetchGithub())
    return {}
  }

  render () {
    return (
      <div>
        hello world, {this.props.name}
      </div>
    )
  }
}

function mapStateToProps ({ name }) {
  return { name }
}

export default connect(
  mapStateToProps,
  null
)(Index)
