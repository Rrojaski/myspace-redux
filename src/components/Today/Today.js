import React, { Fragment, Component } from "react";

import styles from "./Today.module.scss";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDate: "loading...",
      time: "loading..."
    };
    this.localTime = this.localTime.bind(this);
  }
  localTime(h, m) {
    console.log(`recieved ${h} and ${m}`);
    let sun = "AM";
    let newH = "";
    if (h > 11) {
      sun = "PM";
      switch (h) {
        case 12:
          newH = 12;
          break;
        case 13:
          newH = 1;
          break;
        case 14:
          newH = 2;
          break;
        case 15:
          newH = 3;
          break;
        case 16:
          newH = 4;
          break;
        case 17:
          newH = 5;
          break;
        case 18:
          newH = 6;
          break;
        case 19:
          newH = 7;
          break;
        case 20:
          newH = 8;
          break;
        case 21:
          newH = 9;
          break;
        case 22:
          newH = 10;
          break;
        case 23:
          newH = 11;
          break;
        default:
          newH = "error";
      }
    }

    const res = newH + ":" + m + " " + sun;
    this.setState({
      time: res
    });
  }

  componentDidMount() {
    // Get Today's date
    const date = new Date();
    const day = date.getDay();
    const dayName = date.toLocaleString("default", { weekday: "short" });
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear() - 10;
    const final = dayName + ", " + month + " " + day + ", " + year;

    this.setState({
      fullDate: final
    });

    //Get Time
    const hour = date.getHours();
    const min = date.getMinutes();
    const curTime = hour + ":" + min;
    this.localTime(hour, min);
  }
  render() {
    return (
      <Fragment>
        <div className={`${styles.Today}`}>
          <div className={`${styles.today__left}`}>{this.state.fullDate}</div>
          <div className={`${styles.today__right}`}>{this.state.time}</div>
        </div>
      </Fragment>
    );
  }
}

export default Today;
