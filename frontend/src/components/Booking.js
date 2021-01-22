import axios from 'axios'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import './booking.scss'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import DayAvailable from './DayAvailable'
import ProgressBar from './ProgressBar'

const Booking = () => {
  const [dayStart, setDayStart] = useState(DateTime.local())

  console.log(dayStart)
  const now = DateTime.local()
  console.log(now.day)

  const dbdata = DateTime.fromISO('2021-01-21T13:47:07.575Z')
  console.log(dbdata.second)
  axios.get('http://localhost:1337/opening-times').then((response) => {
    //console.log(response.data)
  })

  return (
    <aside className='booking'>
      <div className='booking__header'>
        <h3> Make your online booking</h3>
        <p> Please fill the following informations:</p>
      </div>
      <div className='booking__content'>
        <section className='booking__section'>
          <ProgressBar stepNumber='1' isDone={true} />
          <h4>Appointment location</h4>
          <p> The famous garaze - Holesovice</p>
        </section>
        <hr class='divider' aria-hidden='true' />
        <section className='booking__section'>
          <ProgressBar stepNumber='2' isDone={true} />
          <h4>Reason for the appointment</h4>
          <p>Changing tires (30 min)</p>
        </section>
        <hr class='divider' aria-hidden='true' />
        <section className='booking__section'>
          <ProgressBar stepNumber='3' isDone={false} />
          <h4>Select your appointement</h4>
          <div className='booking__calendar'>
            <div className='pagination'>
              <MdNavigateBefore className='arrow' />
            </div>
            <div className='list-of-days'>
              <DayAvailable />
              <DayAvailable />
              <DayAvailable />
            </div>

            <div className='pagination'>
              <MdNavigateNext className='arrow' />
            </div>
          </div>
        </section>
      </div>
    </aside>
  )
}

export default Booking
