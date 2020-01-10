import App from "next/app";
import ContextProvider from "../provider/ContextProvider";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Container from "react-bootstrap/Container";

export default class MyApp extends App {
  static async getInitialProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    //console.log('aa', data)
    return {
      events: data
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <ContextProvider events={this.props.events}>
          <Component {...pageProps} />
        </ContextProvider>
      </div>
    );
  }
}
