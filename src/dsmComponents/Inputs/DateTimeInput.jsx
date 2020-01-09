import React from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

const DateTimeCont = styled.div`
  .react-calendar {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.05),
      0 2px 10px 0 rgba(0, 0, 0, 0.05);
    padding: 18px 16px;
    color: ${props => props.theme.colorCardomomText};
  }

  /* day tiles */
  .react-calendar__tile {
    font-size: 12px;
    border-radius: 3px;

    /* hovered day (also enabled) */
    &:enabled:hover {
      background-color: ${props => props.theme.colorPaprika5};
    }
  }

  /* current day */
  .react-calendar__tile--now {
    abbr {
      color: ${props => props.theme.colorPaprika};
      font-family: "Muli-Bold";
    }
  }

  /* active/selected day */
  .react-calendar__tile--active {
    background-color: ${props => props.theme.colorPaprika15};

    abbr {
      /* color: ${props => props.theme.colorPaprika}; */
      font-family: "Muli-Bold";
    }
  }

  /* weekend days */
  .react-calendar__month-view__days__day--weekend {
    color: inherit;
  }

  /* day labels */
  .react-calendar__month-view__weekdays__weekday {
    /* font-size: ${props => props.theme.fontCaption1FontSize}; */
    line-height: ${props => props.theme.fontCaption1LineHeight};
    text-align: ${props => props.theme.fontCaption1TextAlign};
    color: ${props => props.theme.fontCaption1Color};
    letter-spacing: ${props => props.theme.fontCaption1LetterSpacing};
    font-style: ${props => props.theme.fontCaption1FontStyle};
    font-weight: ${props => props.theme.fontCaption1FontWeight};
    font-family: ${props => props.theme.fontCaption1FontFamily};

    abbr {
      font-size: 12px;
      text-decoration: none;
    }
  }
`;

class DateTimeInput extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    const { disabled, labelText, id } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <DateTimeCont>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
          disableClock={true}
        />
      </DateTimeCont>
    );
  }
}

export default DateTimeInput;
