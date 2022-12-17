import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import customStyle from './Custom.module.css';
import DateButton from './DateButton';

import isSameDay from 'date-fns/isEqual';
import { ko } from 'date-fns/esm/locale';
import startOfDay from 'date-fns/startOfDay';

import { RootState } from '../../redux/store';
import { setToday } from '../../redux/slice/dateSlice';

const DateHeader = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(
    (store: RootState) => store.dateInfo.todayDate,
  );
  // 오늘 날짜인지 검사
  const isToday = isSameDay(currentDate, startOfDay(new Date()));

  // date 한글화
  registerLocale('ko', ko);

  return (
    <div className="flex items-center relative">
      <DateButton action={'prev'} />
      <DatePicker
        className={`btn btn-ghost flex m-3 mx-auto text-red ${customStyle.dateBtn}`}
        selected={new Date(currentDate)}
        dateFormat={'yy.MM.dd'}
        maxDate={new Date()} // 오늘 날짜 이후 선택 불가능
        popperPlacement="auto"
        locale="ko"
        onChange={newDate => newDate && dispatch(setToday(newDate.getTime()))}
      />
      {!isToday && <DateButton action={'next'} />}
    </div>
  );
};

export default DateHeader;
