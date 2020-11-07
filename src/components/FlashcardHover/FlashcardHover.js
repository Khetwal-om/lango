import React from 'react'

import './FlashcardHover.css'

function FlashcardHover({ question, meaningOne }) {
  return (
    <div class="card">
      <div class="front">
      <p>{question}</p>
      </div>
      <div class="back">
        <p>{meaningOne}</p>
      </div>
    </div>
  
  )
}


export default FlashcardHover