import React from 'react'
import styled from 'styled-components'

const BookingSlot = ({ time = null }) => {
  return (
    <Wrapper>
      {time ? (
        <div className='available-slot'>{time}</div>
      ) : (
        <div className='empty-slot'></div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 34px;
  line-height: 34px;
  margin: 10px 0;
  display: flex;
  align-items: center;

  .available-slot {
    border-radius: 4px;
    flex-grow: 1;
    font-weight: 700;
    background-color: #ccecfa;
    transition: all 0.5s;

    &:hover {
      background-color: orange;
      cursor: pointer;
    }
  }
  .empty-slot {
    margin: 0 auto;
    width: 12px;
    height: 2px;
    background-color: rgba(67, 95, 113, 0.2);
    border-radius: 1px;
  }
`
export default BookingSlot
