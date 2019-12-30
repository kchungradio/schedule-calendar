/* eslint-disable react/prop-types */

import React from 'react'

import Cell from './cell'

export default function Calendar({ events }) {
  const now = new Date()
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
  let blankDays = firstDay.getDay()
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]

  const monthOfEvents = events
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .reduce((acc, event) => {
      const dayOfMonth = new Date(event.start).getDate()
      acc[dayOfMonth - 1] = acc[dayOfMonth - 1] || []
      acc[dayOfMonth - 1].push(event)
      return acc
    }, [])

  return (
    <div className="calendar">
      <div className="days">
        {days.map(day => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>

      <div className="cells">
        {[...Array(blankDays)].map((x, i) => (
          <div key={i} className="blank" />
        ))}

        {monthOfEvents.map((events, idx) => (
          <Cell key={idx} date={idx + 1} events={events} />
        ))}
      </div>

      <style jsx>{`
        .calendar {
          width: 1071px;
        }
        .day {
          display: inline-block;
          width: 148px;
          padding-bottom: 1px;
          text-align: center;
        }
        .blank {
          display: inline-block;
          height: 145px;
          width: 148px;
        }
      `}</style>
    </div>
  )
}
