import _ from 'lodash'

export const updateCurrentReminderForSelectedDay = day => {
  return { type: 'calendar/UPDATE_CURRENT_REMINDER_FOR_SELECTED_DAY', payload: day }
}

export const updateReminderText = reminderText => {
  return { type: 'calendar/UPDATE_REMINDER_TEXT', payload: reminderText }
}

export const updateReminderTime = reminderTime => {
  return { type: 'calendar/UPDATE_REMINDER_TIME', payload: reminderTime }
}

export const updateReminderColour = reminderColour => {
  return { type: 'calendar/UPDATE_REMINDER_COLOUR', payload: reminderColour }
}

export const submitReminder = (reminders, reminder) => {
  if (!_.includes(reminders, reminder)) {
    return { type: 'calendar/ADD_NEW_REMINDER' }
  }
  return { type: 'calendar/UPDATE_REMINDER', payload: reminder }
}

export const editReminder = reminder => {
  return { type: 'calendar/EDIT_REMINDER', payload: reminder }
}


export const removeReminder = () => {
  return { type: 'calendar/REMOVE_REMINDER' }
}