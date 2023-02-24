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

let totalTables = {
  sits4: 5,
  sits2: 5,
};

function Reserve() {
  let navigate = useNavigate();

  const holidays = ["11", "74", "10", "1224", "1225", "1231"];

  const [available, setAvailable] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
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

  const handleParty = async (party) => {
    details.party = party.value;
    setPartySize(party.value);
    await showTables();
  };
  const handleTime = async (time) => {
    let hours = time.getHours();
    let minutes = ("0" + time.getMinutes()).slice(-2);
    let suffix = hours >= 12 ? "PM" : "AM";

    let fixedTime = ((hours + 11) % 12) + 1 + ":" + minutes + " " + suffix;
    details.time = fixedTime;

    setSelectedTime(time);
    await showTables();
  };

  const handleDate = async (date) => {
    details.date = date;
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate() - 1;
    let result = "" + month + day;
    totalTables.sits4 = 5;
    totalTables.sits2 = 5;
    setMessage("");
    if (holidays.includes(result) || date.getDay() === 6 || date.getDay() === 0)
      setError(
        "Note you selected a high traffic day, which requires a $10 hold fee in case of a no-show."
      );
    else setError("");
    setSelectedDate(date);
  };

  const showTables = async () => {
    if (details.time === "") {
      setError("Please select a time to view available tables.");
      setAvailable(false);
      return [0, 0];
    } else setError("");

    let date = details.date;
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate() - 1;
    let result = "" + month + day;
    if (holidays.includes(result) || date.getDay() === 6 || date.getDay() === 0)
      setError(
        "Note you selected a high traffic day, which requires a $10 hold fee in case of a no-show."
      );
    else setError("");

    let size = details.party;
    let tablesOf4Used = 0;
    let tablesOf2Used = 0;
    let tables4Available = totalTables.sits4;
    let tables2Available = totalTables.sits2;

    while (size > 0) {
      if (tablesOf4Used < tables4Available && size >= 4) {
        tablesOf4Used++;
        size -= 4;
      } else if (tablesOf2Used < tables2Available && size >= 2) {
        tablesOf2Used++;
        size -= 2;
      } else if (tablesOf4Used > 0 && tablesOf2Used > 0 && size >= 2) {
        tablesOf4Used--;
        tablesOf2Used--;
        size -= 6;
      } else if (tablesOf2Used > 0 && size > 0) {
        tablesOf2Used++;
        size -= 2;
      } else if (tablesOf4Used > 0 && size > 0) {
        tablesOf4Used++;
        size -= 4;
      } else {
        setMessage(
          "Not enough tables are available. Please choose another day."
        );
        setAvailable(false);
        return [0, 0];
      }
    }

    const usage = [];
    if (tablesOf4Used > 0) {
      usage.push(`${tablesOf4Used} table(s) of 4 were used`);
    }
    if (tablesOf2Used > 0) {
      usage.push(`${tablesOf2Used} table(s) of 2 were used`);
    }

    if (tablesOf4Used > tables4Available || tablesOf2Used > tables2Available) {
      setMessage("Not enough tables are available. Please choose another day.");
      setAvailable(false);
      return [0, 0];
    }
    if (usage.length > 1) setMessage(usage.join(" and "));
    else setMessage(usage[0]);

    setAvailable(true);
    return [tablesOf2Used, tablesOf4Used];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const [tablesOf2, tablesOf4] = await showTables();

    totalTables.sits2 -= tablesOf2;
    totalTables.sits4 -= tablesOf4;

    setDetails({
      party: partySize,
      date: selectedDate,
    });

    navigate("/reserveForm", {
      state: {
        message: `Party Size: ${details.party} Time: ${
          details.time
        } Date: ${details.date.toDateString()}`,
        path: "Form",
      },
    });
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
              onChange={handleParty}
            />
          </div>
          <div className="form-group-middle">
            <label className="reserve" htmlFor="date">
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              name="date"
              onChange={handleDate}
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
              onChange={handleTime}
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
        {error !== "" ? <Error>{error}</Error> : ""}
        <div className="table">
          {message !== "" ? <Message>{message}</Message> : ""}
        </div>
        <input
          type="submit"
          className="reserve"
          value="Continue"
          disabled={!available}
        ></input>
      </form>
    </div>
  );
}
export default Reserve;
