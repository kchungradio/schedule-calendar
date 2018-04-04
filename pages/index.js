/* global fetch:false */

import React from 'react'
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
          a {
            color: white;
            cursor: pointer;
          }
          a:hover {
            background: white;
            color: red;
            text-decoration: none;
          }
          a:link {
            text-decoration: none;
          }
          a:visited {
            text-decoration: none;
          }
        `}</style>

      </div>
    )
  }
}
