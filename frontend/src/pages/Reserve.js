import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import "./Reserve.css";
import styled from "styled-components";

const Error = styled.h2`
  color: red;
  font-size: 16px;
  align-items: center;
  margin-top: 25px;
`;

const Message = styled.h2`
  color: black;
  font-size: 18px;
  align-items: center;
  margin-top: 25px;
`;

const Button = styled.button`
  border-radius: 4px;
  background: maroon;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 50px;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(0, 100%, 35%);
    color: white;
  }
`;

function Reserve() {
  let navigate = useNavigate();

  const holidays = ["11", "74", "10", "1224", "1225", "1231"];
  let totalTables = {
    sits4: 5,
    sits2: 5,
  };

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [available, setAvailable] = useState(false);
  const [partySize, setPartySize] = useState(2);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [details, setDetails] = useState({
    party: 2,
    date: new Date(),
    time: "",
  });

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
    { value: 13, label: "13" },
    { value: 14, label: "14" },
    { value: 15, label: "15" },
    { value: 16, label: "16" },
    { value: 17, label: "17" },
    { value: 18, label: "18" },
    { value: 19, label: "19" },
    { value: 20, label: "20" },
  ];

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const showTables = async () => {
    let size = partySize;
    let count4 = 0;
    let count2 = 0;
    let totalCount = 0;
    let tables4Available = totalTables.sits4;
    let tables2Available = totalTables.sits2;
    console.log(totalTables.sits4);
    while (4 <= size && tables4Available != 0) {
      size -= 4;
      tables4Available -= 1;
      count4 += 1;
    }
    if (tables4Available == 0 || size < 4) {
      while (2 <= size && tables2Available != 0) {
        size -= 2;
        tables2Available -= 1;
        count2 += 1;
      }
    }
    if (count2 == 0 && count4 > 1) {
      setMessage(
        `${count4} tables that sit 4 were combined and are available.`
      );
    } else if (count2 == 0 && count4 == 1) {
      setMessage(`${count4} table that sits 4 is available.`);
    } else if (count4 == 0 && count2 > 1) {
      setMessage(
        `${count2} tables that sit 2 were combined and are available.`
      );
    } else if (count4 == 0 && count4 == 1) {
      setMessage(`${count2} table that sits 2 is available.`);
    } else if (count2 != 0 && count4 != 0) {
      setMessage(
        `${count2} table(s) of 2 and ${count4} table(s) of 4 were combined and are available.`
      );
    }
    totalTables.sits4 -= count4;
    totalTables.sits2 -= count2;
    console.log(totalTables.sits4);
    if (totalTables.sits4 == 0 && totalTables.sits2 == 0) {
      setMessage(`No tables available. Choose another day.`);
      setAvailable(false);
    } else setAvailable(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setDetails({
      party: partySize,
      date: selectedDate,
      time: selectedTime,
    });

    const value = { details };
    console.log(value);

    navigate("/reserveForm");
  };
  return (
    <div className="reserve">
      <div className="header">Reserve a Table</div>
      <form onSubmit={handleSubmit}>
        <div className="reserve-form">
          <div className="form-group-left">
            <label className="reserve" htmlFor="party">
              Party
            </label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={options[1]}
              isSearchable={true}
              name="party"
              options={options}
              onChange={(party) => {
                details.party = party.value;
                setPartySize(party.value);
              }}
            />
          </div>
          <div className="form-group-middle">
            <label className="reserve" htmlFor="date">
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              name="date"
              onChange={(date) => {
                details.date = date;
                let month = date.getUTCMonth() + 1;
                let day = date.getUTCDate() - 1;
                let result = "" + month + day;
                totalTables.sits4 = 5;
                totalTables.sits2 = 5;
                if (
                  holidays.includes(result) ||
                  date.getDay() == 6 ||
                  date.getDay() == 0
                )
                  setError(
                    "Note you selected a high traffic day, which requires a $10 hold fee in case of a no-show."
                  );
                else setError("");
                setSelectedDate(date);
              }}
              minDate={new Date()}
              required
            />
          </div>
          <div className="form-group-right">
            <label className="reserve" htmlFor="time">
              Time
            </label>
            <DatePicker
              selected={selectedTime}
              onChange={(time) => {
                details.time = selectedTime;
                setSelectedTime(time);
              }}
              placeholderText="Please select a time"
              name="time"
              showTimeSelect
              showTimeSelectOnly
              minTime={setHours(setMinutes(new Date(), 0), 11)}
              maxTime={setHours(setMinutes(new Date(), 0), 23)}
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              required
            />
          </div>
        </div>
        {error != "" ? <Error>{error}</Error> : ""}
        <div className="table">
          <Button onClick={showTables} disabled={true}>
            Check Availability
          </Button>
          {message != "" ? <Message>{message}</Message> : ""}
        </div>
        <input type="submit" className="reserve" value="Continue"></input>
      </form>
    </div>
  );
}
export default Reserve;
