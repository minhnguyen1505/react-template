import React, { Component } from "react";
import moment from "moment";
import "./Calendar.scss";

interface CalendarProps {}
interface CalendarState {
  showYearTable: boolean;
  showMonthTable: boolean;
  showDateTable: boolean;
  dateObject: any;
}

class Calendar extends Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      showYearTable: false,
      showMonthTable: false,
      showDateTable: true,
      dateObject: moment()
    };
  }

  global = {
    weekdaysShort: moment.weekdaysShort(),
    allmonths: moment.monthsShort(),
    selectedDay: null,
    day: parseInt(moment().format("D")),
    month: moment().format("MMMM"),
    year: moment().format("Y")
  };
  currentDay = () => {
    return parseInt(this.state.dateObject.format("D"));
  };
  currentMonth = () => {
    return this.state.dateObject.format("MMMM");
  };
  currentYear = () => {
    return this.state.dateObject.format("Y");
  };
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  firstDayOfMonth = () => {
    return parseInt(
      moment(this.state.dateObject)
        .startOf("month")
        .format("d")
    );
  };

  showMonth = () => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showDateTable: false
    });
  };
  setMonth = (month: any) => {
    let monthNo = this.global.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  MonthList = (props: any) => {
    let months: any = [];
    props.data.map((data: any) => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={() => this.setMonth(data)}
        >
          <span>{data}</span>
        </td>
      );
    });
    let cells: any = [];
    let rows: any = [];
    months.forEach((row: any, i: number) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d: any) => {
      return <tr key={d}>{d}</tr>;
    });
    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan={4}>Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };

  showYearTable = () => {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showMonthTable: false,
      showDateTable: false
    });
  };
  setYear = (year: any) => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearTable: !this.state.showYearTable
    });
  };
  onYearChange = (e: any) => {
    this.setYear(e.target.value);
  };
  getDates(startDate: any, stopDate: any) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var lastDate = moment(stopDate);
    while (currentDate <= lastDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  YearTable = (props: any) => {
    let years: any = [];
    let nextten = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

    let tenyear = this.getDates(props, nextten);

    tenyear.map(data => {
      years.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setYear(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows: any = [];
    let cells: any = [];

    years.forEach((row: any, i: number) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let yearlist = rows.map((d: any) => {
      return <tr key={d}>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan={4}>Select a Year</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };

  onPrev = () => {
    let curr: any = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr)
    });
  };
  onNext = () => {
    let curr: any = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr)
    });
    console.log(this.state.dateObject);
  };
  onDayClick = (d: any) => {
    this.global.selectedDay = d;
    console.log("SELECTED DAY: ", this.global.selectedDay + " - " + this.currentMonth() + " - " + this.currentYear());
  };

  render() {
    let weekdaysShortname = this.global.weekdaysShort.map(day => {
      return <th key={day}>{day}</th>;
    });
    let blanks: any = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth: any = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = "";
      if (
        d === this.global.day &&
        this.currentMonth() === this.global.month &&
        this.currentYear() === this.global.year
      ) {
        currentDay = "today";
      } else {
        currentDay = "";
      }
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          <span onClick={() => this.onDayClick(d)}>{d}</span>
        </td>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows: any = [];
    let cells: any = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        // let insertRow = cells.slice();
        rows.push(cells);
      }
    });
    let daysInMonthRender = rows.map((d: any) => {
      return <tr key={d}>{d}</tr>;
    });

    return (
      <div className="calendar">
        <div className="calendar__navigation">
          {!this.state.showMonthTable && (
            <span onClick={() => this.showMonth()} className="label">
              {this.currentMonth()}, {this.currentYear()}
            </span>
          )}
          {this.state.showMonthTable && (
            <span className="label" onClick={() => this.showYearTable()}>
              {this.currentYear()}
            </span>
          )}
          <div className="buttons">
            <span
              onClick={() => this.onPrev()}
              className="button icon dripicons-chevron-left"
            />
            <span
              onClick={() => this.onNext()}
              className="button icon dripicons-chevron-right"
            />
          </div>
        </div>

        <div className="calendar__date">
          {this.state.showYearTable && (
            <this.YearTable props={this.currentYear} />
          )}
          {this.state.showMonthTable && (
            <this.MonthList data={moment.monthsShort()} />
          )}
        </div>

        {this.state.showDateTable && (
          <div className="calendar__date">
            <table className="calendar-day">
              <thead>
                <tr>{weekdaysShortname}</tr>
              </thead>
              <tbody>{daysInMonthRender}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default Calendar;
