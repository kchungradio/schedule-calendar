/* eslint-disable react/prop-types */

import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

// prevent server side rendering so all dates/times are in user's local time
const Calendar = dynamic(() => import('../components/calendar'), {
  ssr: false
})

export default class App extends React.Component {
  static async getInitialProps() {
    const apiUrl = 'https://kchungradio-schedule-api.now.sh'

    const res = await fetch(apiUrl)
    const events = await res.json()

    return { events }
  }

  render() {
    return (
      <div>
        <Head>
          <base target="_parent" />
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
