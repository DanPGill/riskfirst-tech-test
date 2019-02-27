import React, { Component } from 'react'
import Month from '../../components/month'
import connect from '../../common/reduxConnect'
import {
  updateCurrentReminderForSelectedDay,
  submitReminder,
  editReminder,
  removeReminder,
  updateReminderText,
  updateReminderTime,
  updateReminderColour,
} from '../../redux/actions/calendar'

class Calendar extends Component {
  render() {
    return (
      <div>
        <Month
          numberOfDaysInMonth={28}
          firstDayOfMonth={5}
          lastDayOfMonth={4}
          addReminder={day => this.props.dispatch(updateCurrentReminderForSelectedDay(day))}
          editReminder={reminder => this.props.dispatch(editReminder(reminder))}
          displayForm={this.props.calendar.displayReminderForm}
          onChangeReminderText={text => this.props.dispatch(updateReminderText(text))}
          onChangeReminderTime={time => this.props.dispatch(updateReminderTime(time))}
          onSubmitReminder={() => this.props.dispatch(submitReminder(this.props.calendar.reminders, this.props.calendar.reminderToUpdate))}
          reminders={this.props.calendar.reminders}
          month={this.props.calendar.currentMonth}
          onChangeSelectedColour={colour => this.props.dispatch(updateReminderColour(colour))}
          currentReminder={this.props.calendar.currentReminder}
          reminderToUpdate={this.props.calendar.reminderToUpdate}
          removeReminder={() => this.props.dispatch(removeReminder())}
        />
      </div>
    )
  }
}

export default connect(state => ({
  calendar: state.calendar,
}))(Calendar)
