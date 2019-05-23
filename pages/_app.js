import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Main from "../components/Layout/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Main>
          <Component {...pageProps} />
          </Main>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
