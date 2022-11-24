import  { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Reserve.css"
function Reserve() {
  const [date, setDate] = useState(new Date())

  return (
    <div className="reserve">
      <DatePicker selected={date} onChange={(date:Date) => setDate(date)}></DatePicker>
    </div>
  )
}

export default Reserve;