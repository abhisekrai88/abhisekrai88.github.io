import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>
</h1>
            <header>
            <div class="container mt-3">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
                    <ul class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_938993594_398960.jpg" alt="Coffee" width="1100" height="500"></img>
    </div>
    <div class="carousel-item">
      <img src="https://www.singleplatform.com/wp-content/uploads/2018/12/The-Coffee-Industry-is-Changing-How-Will-Your-Business-Adapt.jpg" alt="Cafe" width="1100" height="500"></img>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.concreteplayground.com/content/uploads/2019/04/the-hangar.jpg" alt="Cafe" width="1100" height="500"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

</div>
  

                    
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;