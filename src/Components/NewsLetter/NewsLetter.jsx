import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
    <h1>Get Exclusvive Offers On Your Email</h1>
    <p>Subscribe to our newetter and stay updated</p>
    <div className='news-form'>
    <input type='email' placeholder='Your Email ID' className='news-email'></input>
    <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter