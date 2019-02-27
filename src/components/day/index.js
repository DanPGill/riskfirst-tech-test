import React from 'react'
import _ from 'lodash'
import OverflowScrolling from 'react-overflow-scrolling'
import classNames from 'classnames'
import './style.css'

const AddReminder = props => {
  if (props.day === '') {
    return null
  }
  return (
    <button className={'AddReminder'} onClick={props.onClick}>
      Add a new reminder
    </button>
  )
}

export default props => {
  return (
    <div className={'Day'}>
      <div className={'Date'}>
        <div>{props.day}</div>
        <AddReminder day={props.day} onClick={props.addReminder} />
      </div>
      <OverflowScrolling className={'Overflow-Scrolling'}>
        {_.map(props.reminders, reminder => {
          return (
            <div className={'ReminderContainer'}>
              <div className={'Text'} style={{ backgroundColor: reminder.colour }}>
                {reminder.time} - {reminder.text}
              </div>
              <img
                onClick={() => props.editReminder(reminder)}
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfunedVTSE_BE40YNg0j2_83D7NqBNd6rARMbYLhl_bzwQB8OU'}
                className={'UpdateReminder'}
              />
            </div>
          )
        })}
      </OverflowScrolling>
    </div>
  )
}
