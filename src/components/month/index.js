import React from 'react'
import _ from 'lodash'
import Day from '../day'
import AddOrUpdateReminder from '../addOrUpdateReminder'
import DaysOfWeek from '../daysOfWeek'
import './style.css'

const filterRemindersForDayOfMonth = (dayOfMonth, reminders, month) => _.filter(reminders, reminder => reminder.day === dayOfMonth && reminder.month === month)
const sortRemindersByTime = (reminders) => _.sortBy(reminders, reminder => reminder.time)


export default props => {
  const daysOfMonth = _.range(1, props.numberOfDaysInMonth + 1, 1)
  const daysOfMonthWithEmpty = [..._.times(props.firstDayOfMonth - 1, () => ''), ...daysOfMonth, ..._.times(7 - props.lastDayOfMonth, () => '')]
  const weeksOfMonth = _.chunk(daysOfMonthWithEmpty, 7)
  if (!props.displayForm) {
    return (
      <div>
        <DaysOfWeek />
        {_.map(weeksOfMonth, (weekOfMonth, index) => {
          return (
            <div key={index} className={'Week'}>
              {_.map(weekOfMonth, (dayOfMonth, index) => {
                return (
                  <Day
                    day={dayOfMonth}
                    key={index}
                    addReminder={() => props.addReminder(dayOfMonth)}
                    editReminder={props.editReminder}
                    reminders={sortRemindersByTime(filterRemindersForDayOfMonth(dayOfMonth, props.reminders, props.month))}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <AddOrUpdateReminder
      reminders={props.reminders}
      reminderToUpdate={props.reminderToUpdate}
      onChangeReminderText={props.onChangeReminderText}
      onChangeReminderTime={props.onChangeReminderTime}
      onSubmitReminder={props.onSubmitReminder}
      reminder={props.currentReminder}
      onChangeSelectedColour={props.onChangeSelectedColour}
      removeReminder={props.removeReminder}
    />
  )
}
