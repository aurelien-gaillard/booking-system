import React from 'react'
import styled from 'styled-components'
import BookingSlot from './BookingSlot'

const DayAvailable = () => {
  return (
    <Wrapper>
      <div className='header'>
        <div className='header-day-name'>dim.</div>
        <div className='header-date'>27 dec.</div>
      </div>
      <BookingSlot time='08:00' />
      <BookingSlot time='08:00' />
      <BookingSlot />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  font-size: 14px;
  margin: 0 4px;
  text-align: center;
  color: #435f71;
  .header {
    margin-bottom: 24px;

    &-day-name {
      font-weight: 700;
    }
  }

  .slot-available {
    border-radius: 4px;
    margin: 10px 0;
    height: 34px;
    line-height: 34px;
    font-weight: 700;
    background-color: #ccecfa;
  }
`
export default DayAvailable
