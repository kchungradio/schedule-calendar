/* eslint-disable react/prop-types */

import React from 'react'

import Cell from './cell'

export default function Calendar({ events }) {
  const now = new Date()
  // const year = now.getFullYear()
  // const month = now.getMonth() + 1
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate()
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

  const monthOfEvents = [...Array(daysInMonth)].map((x, i) => {
    let eventsInMonth = events
      .filter(event => i + 1 === new Date(event.start).getDate())
      .sort((a, b) => new Date(a.start) - new Date(b.start))

    return {
      date: i + 1,
      events: eventsInMonth
    }
  })

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

        {monthOfEvents.map(day => (
          <Cell key={day.date} date={day.date} events={day.events} />
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
