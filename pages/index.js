/* global fetch:false */

import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

import Calendar from '../components/calendar'

export default class App extends React.Component {
  static async getInitialProps () {
    const apiUrl = process.env.NODE_ENV !== 'production'
      ? 'http://localhost:1630'
      : 'https://kchungradio-schedule-api.now.sh'

    const res = await fetch(apiUrl)
    const events = await res.json()

    return { events }
  }

  render () {
    return (
      <div>

        <Head>
          <link rel='stylesheet' type='text/css'
            href='http://kchungradio.org/css/calendar.css'
          />
        </Head>

        <Calendar events={this.props.events} />

        <style jsx global>{`
          body {
            font-family: courier, sans-serif;
            background: red;
            color: white;
            margin: 0;
            padding: 0;
            font-size: 13px;
          }
          a { color: white; cursor: pointer; }
          a:link { text-decoration: none; }
          a:visited { text-decoration: none; }
          a:hover { text-decoration: underline; }
          a:active { text-decoration: underline; }
        `}</style>

      </div>
    )
  }
}
