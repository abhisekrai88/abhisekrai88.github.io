import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import Typical from 'react-typical';


class Contact extends Component {
    state = {  }
    render() { 
        return ( <div className="container-fluid"><div>
        <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Book a date with us<br></br>
                <span className='amazing-color'>to experience paradise</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

           <span className='footer'>Love, <a href="https://www.linkedin.com/in/abhisek-rai-42860a92"><Typical steps={['Abhisek Rai',2000]} loop={Infinity}/></a></span>
          
           
        </div></div>);
    }
}
 
export default Contact;