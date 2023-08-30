import React from 'react'
import './hashtag.css'

const Hashtag = ({ hashtags }) => {
  return (
    <div className='hashtag-list'>
      <ul className='hashtag-list-ul'>
        {hashtags.map((hashtag, index) => (
          <li key={index} className='hashtag-item'>
            #{hashtag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hashtag