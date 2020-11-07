import React from 'react'

import './Flashcard.css'

function Flashcard({ question, meaningOne }) {
  return (
    <article class="flashcard">
        <div class="flashcard__question body-intro">
        {question}
        </div>
        <div class="flashcard__answer body-main">
        {meaningOne}
        </div>
    </article>      
  )
}

export default Flashcard