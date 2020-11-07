import React from 'react'

import {Link} from 'react-router-dom'
import twitter from '../../img/twitter.svg'
import youtube from '../../img/youtube.svg'
function Instructor({name,tutorialNumbers, tutorials ,imageOne,imageTwo,youtubeChannel,youtubeChannelLink,quote,starkLine,youtubeChannelName}) {
   
  
    return (
        <div className="instructor">
        <div className="instructors__image">
          <img src={imageOne} alt=""/>
        </div>

        <div className="instructors__information">
          <div className="instructors__quote medium-text">Learn</div>
          <div className="instructors__channel heading-two">{name}</div>
          <div className="instructors__stark body-main">Practice english conversation with loads of slangs and be more fluent.</div>
        </div>

        <div className="instructor__skew">
        <div className="instructor__over emma">
          <div className="instructor__name body-intro">{name}</div>
          <div className="instructor__tutorials body-main">Tutorials {tutorialNumbers}</div>
          
          <Link to={`/${name}`} className="sc-1f5gk0h-0 gFNfRX">Learn</Link>
          <div className="instructor__social-icons">
            <div className="social__icons-twitter">
              <img src={twitter} alt="" srcset=""/>
            </div>
            <div className="social__icons-youtube">
              <img src={youtube} alt="" srcset=""/>
            </div>
          </div>
        </div>
        <div className="instructor__under">

        </div>
      </div>       
    </div>
    )
}

export default Instructor
