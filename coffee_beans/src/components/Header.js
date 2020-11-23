import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
  state = {}

  render() {
    return (<div className="container-fluid"><div>
      <h1 className='heading-background'>
      </h1>
      <header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container mt-3">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <h1>
              <Fade bottom cascade>{data.name}</Fade></h1>
            <ul className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_938993594_398960.jpg" alt="Coffee" width="1100" height="500"></img>
              </div>
              <div className="carousel-item">
                <img src="https://www.singleplatform.com/wp-content/uploads/2018/12/The-Coffee-Industry-is-Changing-How-Will-Your-Business-Adapt.jpg" alt="Cafe" width="1100" height="500"></img>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.concreteplayground.com/content/uploads/2019/04/the-hangar.jpg" alt="Cafe" width="1100" height="500"></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>

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



    </div></div>);
  }
}

export default Header;