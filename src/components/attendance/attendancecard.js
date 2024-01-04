import React from 'react'
import '../../styles/attendancecard.css'
export default function Attendancecard() {
  return (
    <div className='cardholder'>    
      <section className='attendancecard'>
        <div className='content'>
        <p className='SubjectName'>Operating Systems</p>
        <div className='progress'>
        <p style={{margin: 0+'%'}}>33%</p>
        <div className="progress-container">
        <div className="progress-bar" style={{width: 33+'%'}}></div>
        </div>
        </div>
        <p className='Reminder'>You need to attend 7 Lectures</p>
        </div>
      </section>
      <section className='attendancecard'>
      <div className='content'>
        <p className='SubjectName'>Design and Analyisis of Algorithms</p>
        <div className='progress'>
        <p style={{margin: 0+'%'}}>88%</p>
        <div className="progress-container">
        <div className="progress-bar" style={{width: 88+'%'}}></div>
        </div>
        </div>
        <p className='Reminder'>You can skip 3 Lectures</p>
        </div>
       
       </section>

    </div>

  

  )
}
