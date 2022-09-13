import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateHeader = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // TODO: 오늘 날짜인지 검사
  // - 그에 따라 뒤로가는 버튼 렌더

  // TODO: 날짜 유형 변경, 한글화, custom css

  return (
    <div>
      <DatePicker
        selected={currentDate}
        onChange={date => date && setCurrentDate(date)}
      />
    </div>
  );
};

export default DateHeader;
