import React from 'react'
import './Story.css'

const Story = ({question,meaningOne,meaningTwo,explanation,exampleTwo,exampleOne}) => {
    return (
        <div className="story">
                <div className="story__question heading-four">{question}</div>
                <div className="story__meaningOne body-main">{meaningOne}</div>
                <div className="story__meaningTwo body-main">{meaningTwo || ''}</div>
            <div className="story__crux body-main">
            <span className="body-bold">Explanation :</span>     {explanation}
            </div>
                <div className="story__example-one medium-text">
             <span className="body-bold">Example :</span>       {exampleOne}
                </div>
                <div className="story__example-two medium-text">
             <span className="body-bold">Example :</span>       {exampleTwo||''}
                </div>
            
        </div>
    )
}

export default Story
