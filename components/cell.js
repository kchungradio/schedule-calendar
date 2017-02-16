import React from 'react'

import formatAMPM from '../lib/format-ampm'

export default ({ date, events }) => {
  return (
    <div className='cell'>

      <div className='date'>
        {date}
      </div>

      <div className='events'>
        {events.map(event => (
          <div className='event'
            key={event.id}
            title={event.name}
          >
            {formatAMPM(event.start)} {event.name}
          </div>
        ))}
      </div>

      <style jsx>{`
        .cell {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          height: 150px;
          width: 150px;
          margin: 0 -2px -5px 0;
          border: 2px solid white;
          overflow: hidden;
        }
        .date {
          position: absolute;
          right: 2px;
        }
        .events {
          position: absolute;
          overflow: auto;
          width: 100%;
          height: 134px;
          line-height: 1;
          top: 12px;
          left: 2px;
        }
        .event {
          white-space: nowrap;
        }
      `}</style>

    </div>
  )
}
