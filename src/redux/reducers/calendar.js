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
    case 'calendar/UPDATE_REMINDER_DAY':
      return { ...state, currentReminder: { ...state.currentReminder, day: action.payload, month: state.currentMonth } }
    case 'calendar/TOGGLE_REMINDER_FORM':
      return { ...state, displayReminderForm: !state.displayReminderForm }
    case 'calendar/UPDATE_REMINDER_TEXT':
      return { ...state, currentReminder: { ...state.currentReminder, text: action.payload } }
    case 'calendar/ADD_NEW_REMINDER':
      return { ...state, reminders: [...state.reminders, state.currentReminder] }
    case 'calendar/UPDATE_REMINDER_TIME':
      return { ...state, currentReminder: { ...state.currentReminder, time: action.payload } }
    case 'calendar/UPDATE_REMINDER_COLOUR':
      return { ...state, currentReminder: { ...state.currentReminder, colour: action.payload } }
    case 'calendar/UPDATE_REMINDER':
      return { ...state, reminders: updateReminders(state.reminders, action.payload, state.currentReminder) }
    case 'calendar/SET_CURRENT_REMINDER':
      return { ...state, currentReminder: action.payload, reminderToUpdate: action.payload }
    case 'calendar/CLEAR_CURRENT_REMINDER':
      return { ...state, currentReminder: {} }
    case 'calendar/REMOVE_REMINDER':
      return { ...state, reminders: removeReminder(state.reminders, state.reminderToUpdate) }
    default:
      return state
  }
}
