import React from 'react';
import harrisCard from '../images/harris-co-cards.png'
import houstonCard from '../images/houston-card.png'

class Resources extends React.Component {
  render() {
    return (
      <div className="resources-container">
        <h1>Resources</h1>
        <div className="row media">
          <div className="col-sm-6 media-middle">
            <a href="http://houstonlibrary.org/library-card-registration">
              <h5>Get a Houston Public Library card!</h5>
              <img className="media-object" src={houstonCard} alt="Houston library card"/>
            </a>
          </div>
          <div className="col-sm-6 media-middle">
            <a href="http://www.hcpl.net/about/library-cards">
              <h5>Get a Harris County Library card!</h5>
              <img className="media-object" src={harrisCard} alt="Harris County library card"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
