import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
            <div class="container-fluid">
        <div className='project'>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1 className="name">{this.props.title}</h1>
        <span className="price">{this.props.price}</span>
            <span className="work-over">{this.props.service}</span>
        </div> </div>
            </Fade>);
    }
}
 
export default Project;