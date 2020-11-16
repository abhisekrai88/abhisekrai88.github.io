import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div class="container-fluid"><div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                   <p className="container-fluid"><p className="about-text">{data.abouttext}</p></p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            

        </div> </div> );
    }
}
 
export default About;