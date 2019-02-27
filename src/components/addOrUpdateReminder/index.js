import React from 'react'
import _ from 'lodash'
import './style.css'

const RemoveReminder = props => {
  if (!props.reminderExists) {
    return null
  }
  return (
    <button type="button" className={'Button'} onClick={props.removeReminder}>
      Delete Reminder
    </button>
  )
}

export default props => {
  const reminderExists = _.includes(props.reminders, props.reminderToUpdate)
  return (
    <div className={'FormContainer'}>
      <form className={'Form'}>
        <label>
          Enter your reminder
          <input value={props.reminder.text} type="text" className={'Input'} onChange={event => props.onChangeReminderText(event.target.value)} maxLength={30} />
        </label>
        <label>
          Enter a time
          <input value={props.reminder.time} type="time" className={'Input'} onChange={event => props.onChangeReminderTime(event.target.value)} />
        </label>
        <label>
          Select a colour
          <select value={props.reminder.colour} onChange={event => props.onChangeSelectedColour(event.target.value)}>
            <option value="none">None</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <button type="button" className={'Button'} onClick={props.onSubmitReminder}>
          Add/Update Reminder
        </button>
        <RemoveReminder removeReminder={props.removeReminder} reminderExists={reminderExists} />
      </form>
    </div>
  )
}
