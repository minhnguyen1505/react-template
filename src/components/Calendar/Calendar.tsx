import React, { Component } from "react";
import moment from "moment";
import "./Calendar.scss";

interface CalendarProps {}
interface CalendarState {
  month: any;
  selected: any;
}

class Calendar extends Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      month: moment(),
      selected: moment().startOf("day")
    };
  }

  previous = () => {
    const { month } = this.state;
    this.setState({
      month: month.subtract(1, "month")
    });
  };

  next = () => {
    const { month } = this.state;
    this.setState({
      month: month.add(1, "month")
    });
  };

  select = (day: any) => {
    console.log("day", day);
    this.setState({
      selected: day.date,
      month: day.date.clone()
    });
  };

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      // .add("w", 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={(day: any) => this.select(day)}
          selected={selected}
        />
      );
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <section className="calendar">
        <header className="calendar__header">
          <div className="month-display">
            <span className="label">{this.renderMonthLabel()}</span>
            <div className="buttons">
              <i
                className="button icon dripicons-chevron-left"
                onClick={this.previous}
              />
              <i
                className="button icon dripicons-chevron-right"
                onClick={this.next}
              />
            </div>
          </div>
          <div className="day-names">
            <span className="day">Sun</span>
            <span className="day">Mon</span>
            <span className="day">Tue</span>
            <span className="day">Wed</span>
            <span className="day">Thu</span>
            <span className="day">Fri</span>
            <span className="day">Sat</span>
          </div>
        </header>
        {this.renderWeeks()}
      </section>
    );
  }
}

interface WeekProps {
  date: any;
  month: any;
  selected: any;
  select: any;
}
class Week extends React.Component<WeekProps> {
  render() {
    let days = [];
    let { date } = this.props;
    const { month, selected, select } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      days.push(<Day day={day} selected={selected} select={select} />);
      date = date.clone();
      date.add(1, "day");
    }

    return <div className="week">{days}</div>;
  }
}

interface DayProps {
  day: any;
  selected: any;
  select: any;
}
class Day extends React.Component<DayProps> {
  render() {
    const {
      day: { date, isCurrentMonth, isToday, number },
      select,
      selected
    } = this.props;

    return (
      <span
        key={date.toString()}
        className={
          "day" +
          (isToday ? " today" : "") +
          (isCurrentMonth ? "" : " different-month") +
          (date.isSame(selected) ? " selected" : "")
        }
        onClick={() => select(this.props.day)}
      >
        {number}
      </span>
    );
  }
}
export default Calendar;
