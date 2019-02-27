import _ from 'lodash'

export const updateReminderDay = day => {
  return { type: 'calendar/UPDATE_REMINDER_DAY', payload: day }
}

export const toggleReminderForm = () => {
  return { type: 'calendar/TOGGLE_REMINDER_FORM' }
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

export const setCurrentReminder = reminder => {
  return { type: 'calendar/SET_CURRENT_REMINDER', payload: reminder }
}

export const clearCurrentReminder = () => {
  return { type: 'calendar/CLEAR_CURRENT_REMINDER' }
}

export const removeReminder = () => {
  return { type: 'calendar/REMOVE_REMINDER' }
}