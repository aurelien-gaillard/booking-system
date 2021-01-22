import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

const ProgressBar = ({ stepNumber, isDone }) => {
  return (
    <Wrapper>
      <div
        className={`step-progress ${isDone && 'step-progress--completed'} `}
      ></div>
      <div className={`step-number ${isDone && 'step-number--completed'}`}>
        {isDone ? <FaCheck className='check' /> : stepNumber}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .step-progress {
    position: absolute;
    left: -1px;
    top: 25px;
    height: 0;
    border-left: 2px solid #17b355;

    &--completed {
      transition: all 0.4s ease-out;
      height: calc(100% + 6px);
    }
  }
  .step-number {
    position: absolute;
    left: -14px;
    top: -3px;
    width: 28px;
    height: 28px;
    text-align: center;
    font-weight: 700;
    line-height: 28px;
    border-radius: 50%;
    background-color: #0596de;
    color: #fff;
    transition: background-color 0.3s linear;

    &--completed {
      background-color: #17b355;
    }
  }
  .check {
    height: 1.1em;
    width: 1.1em;
    margin-top: 7px;
  }
`
export default ProgressBar
