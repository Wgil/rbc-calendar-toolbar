import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { subDays, addDays, getDate, startOfWeek } from 'date-fns'
import { VISIBLE_DAYS } from './utils/constants'
import { visibleDaysInterval } from './utils/fns'
import './styles/Toolbar.less'

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default class Toolbar extends Component {
  static propTypes = {
    visibleDays: PropTypes.number
  }

  static defaultProps = {
    visibleDays: VISIBLE_DAYS
  }

  state = {
    interval: visibleDaysInterval(
      startOfWeek(this.props.date),
      this.props.visibleDays
    )
  }

  handleNavigate = date => {
    const { onNavigate, visibleDays } = this.props
    const interval = visibleDaysInterval(date, visibleDays)
    this.setState({ interval }, () => onNavigate(date))
  }

  render() {
    const { date } = this.props
    const { interval } = this.state

    return (
      <div className="rbc-calendar-toolbar">
        <h3>{date.toDateString()}</h3>
        <button onClick={_ => this.handleNavigate(subDays(date, 7))}>
          Last week
        </button>
        <button onClick={_ => this.handleNavigate(new Date())}>Today</button>
        <button onClick={_ => this.handleNavigate(addDays(date, 7))}>
          Next week
        </button>
        <div className="grid">
          {WEEK_DAYS.map((day, idx) => (
            <span key={idx}>{day}</span>
          ))}
          {interval.map(day => (
            <button
              key={day.toString()}
              onClick={_ => this.handleNavigate(day)}
            >
              {getDate(day)}
            </button>
          ))}
        </div>
      </div>
    )
  }
}
