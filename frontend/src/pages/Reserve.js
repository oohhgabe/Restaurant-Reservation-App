import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import "./Reserve.css";

function Reserve() {
  let navigate = useNavigate();

  const [partySize, setPartySize] = useState(2);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [details, setDetails] = useState({});

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

  const handleChange = (event) => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
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
              onChange={handleChange}
            />
          </div>
          <div className="form-group-middle">
            <label className="reserve" htmlFor="date">
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              name="date"
              onChange={setSelectedDate}
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
              onChange={setSelectedTime}
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
        <input type="submit" className="reserve" value="Continue"></input>
      </form>
    </div>
  );
}

export default Reserve;
