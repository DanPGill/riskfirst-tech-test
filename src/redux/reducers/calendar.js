import _ from 'lodash'

const initialState = {
  currentMonth: 'february',
  displayReminderForm: false,
  currentReminder: {},
  reminderToUpdate: {},
  reminders: [],
}

const updateReminders = (reminders, reminderToUpdate, currentReminder) => {
  return _.map(reminders, reminder => {
    if (reminder.day === reminderToUpdate.day && reminder.month === reminderToUpdate.month && reminder.time) {
      return currentReminder
    }
    return reminder
  })
}

const removeReminder = (reminders, reminderToRemove) => {
  return _.reject(reminders, reminderToRemove)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'calendar/UPDATE_CURRENT_REMINDER_FOR_SELECTED_DAY':
      return { ...state, currentReminder: { ...state.currentReminder, day: action.payload, month: state.currentMonth, colour: 'None' }, displayReminderForm: !state.displayReminderForm }
    case 'calendar/UPDATE_REMINDER_TEXT':
      return { ...state, currentReminder: { ...state.currentReminder, text: action.payload } }
    case 'calendar/ADD_NEW_REMINDER':
      return { ...state, reminders: [...state.reminders, state.currentReminder], currentReminder: {}, displayReminderForm: !state.displayReminderForm }
    case 'calendar/UPDATE_REMINDER_TIME':
      return { ...state, currentReminder: { ...state.currentReminder, time: action.payload } }
    case 'calendar/UPDATE_REMINDER_COLOUR':
      return { ...state, currentReminder: { ...state.currentReminder, colour: action.payload } }
    case 'calendar/UPDATE_REMINDER':
      return { ...state, reminders: updateReminders(state.reminders, action.payload, state.currentReminder), currentReminder: {}, displayReminderForm: !state.displayReminderForm }
    case 'calendar/EDIT_REMINDER':
      return { ...state, currentReminder: action.payload, reminderToUpdate: action.payload, displayReminderForm: !state.displayReminderForm }
    case 'calendar/CLEAR_CURRENT_REMINDER':
      return { ...state, currentReminder: {} }
    case 'calendar/REMOVE_REMINDER':
      return { ...state, reminders: removeReminder(state.reminders, state.reminderToUpdate), displayReminderForm: !state.displayReminderForm }
    default:
      return state
  }
}
