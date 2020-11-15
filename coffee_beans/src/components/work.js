import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Menu.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((coffee)=>(
                    <Project key={coffee.id}
                             title = {coffee.name}
                             service = {coffee.description}
                             price = {coffee.price}
                             imageSrc = {coffee.imageSrc}
                             price = {coffee.price}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;