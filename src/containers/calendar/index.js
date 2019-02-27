import React, { Component } from 'react'
import Month from '../../components/month'
import connect from '../../common/reduxConnect'
import {
  updateReminderDay,
  toggleReminderForm,
  submitReminder,
  updateReminderText,
  updateReminderTime,
  updateReminderColour,
  setCurrentReminder,
  clearCurrentReminder,
  removeReminder,
} from '../../redux/actions/calendar'

class Calendar extends Component {
  updateSelectedDay(day) {
    this.props.dispatch(updateReminderDay(day))
    this.props.dispatch(updateReminderColour('None'))
    this.props.dispatch(toggleReminderForm())
  }
  submitReminder(reminders, reminder) {
    this.props.dispatch(submitReminder(reminders, reminder))
    this.props.dispatch(clearCurrentReminder())
    this.props.dispatch(toggleReminderForm())
  }
  updateReminder(reminder) {
    this.props.dispatch(setCurrentReminder(reminder))
    this.props.dispatch(toggleReminderForm())
  }
  removeReminder() {
    this.props.dispatch(removeReminder())
    this.props.dispatch(toggleReminderForm())
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Month
          numberOfDaysInMonth={28}
          firstDayOfMonth={5}
          lastDayOfMonth={4}
          addReminder={day => this.updateSelectedDay(day)}
          updateReminder={reminder => this.updateReminder(reminder)}
          displayForm={this.props.calendar.displayReminderForm}
          onChangeReminderText={event => this.props.dispatch(updateReminderText(event.target.value))}
          onChangeReminderTime={event => this.props.dispatch(updateReminderTime(event.target.value))}
          onSubmitReminder={() => this.submitReminder(this.props.calendar.reminders, this.props.calendar.reminderToUpdate)}
          reminders={this.props.calendar.reminders}
          month={this.props.calendar.currentMonth}
          onChangeSelectedColour={event => this.props.dispatch(updateReminderColour(event.target.value))}
          currentReminder={this.props.calendar.currentReminder}
          reminderToUpdate={this.props.calendar.reminderToUpdate}
          removeReminder={() => this.removeReminder()}
        />
      </div>
    )
  }
}

export default connect(state => ({
  calendar: state.calendar,
}))(Calendar)
