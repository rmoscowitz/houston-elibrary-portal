import React from 'react';
import houstonhack from '../images/houstonhack.jpg';
import mountain from '../images/mountain.png';
import christian from '../images/christian.png';
import cameron from '../images/cameron.png';
import robyn from '../images/robyn.png';
import dylan from '../images/dylan.png';
import daniel from '../images/daniel.png';
import eric from '../images/eric.png';
import elaine from '../images/elaine.png';
import logo from '../images/logo3-purple.png';

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
        <div className="row media">
          <div className="col-sm-6 media-middle">
            <img className="media-object img-thumbnail"
                 src={houstonhack}
                 alt="Houston hackathon 2017 flyer"/>
          </div>
          <div className="col-sm-6">
            <h2>Houston Hackathon 2017</h2>
            <p>This project started as part of the 2017 Houston Hackathon, where teams spend a
              weekend building applications that help solve civic issues within the city of
              Houston.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h2>Mission</h2>
            <p>There are two public library systems in Houston; the Houston Public Library and
              Harris County Public Library. To search for digital books, people are currently forced
              to perform two separate searches, one at each of the library's sites. Our goal is to
              provide a platform that allows users to search for and check out digital books from
              both libraries. We are also strictly adhering to web accessibility guidelines so that
              individuals with disabilities can use our service and access the ebooks more easily.
            </p>
          </div>
          <div className="col-sm-6 media-middle">
            <img className="media-object" src={mountain} width="256" alt="mountain icon with flag"/>
          </div>
        </div>

        <div className="row row-media">
          <div className="col-sm-12">
            <h2>Team</h2>
          </div>
          <div className="col-xs-12 offset-sm-1 col-sm-2">
            <img className="media-object" src={cameron} width="128" alt="cameron"/>
            <a href="https://github.com/emptyflash">Cameron</a>
          </div>
          <div className="col-xs-12 col-sm-2">
            <img className="media-object" src={robyn} width="128" alt="robyn"/>
            <a href="https://github.com/rmoscowitz">Robyn</a>
          </div>
          <div className="col-xs-12 col-sm-2">
            <img className="media-object" src={daniel} width="128" alt="dan"/>
            <a href="https://github.com/DanielJRutledge">Dan</a>
          </div>
          <div className="col-xs-12 col-sm-2">
            <img className="media-object" src={dylan} width="128" alt="dylan"/>
            <a href="https://github.com/dylanjbarth">Dylan</a>
          </div>
          <div className="col-xs-12 col-sm-2">
            <img className="media-object" src={christian} width="128" alt="christian"/>
            <a href="https://github.com/ChristianArredondo">Christian</a>
          </div>
        </div>

        <div className="row row-media">
          <div className="col-sm-12">
            <h2>Special Thanks</h2>
          </div>
          <div className="col-xs-12 offset-sm-4 col-sm-2">
            <img className="media-object" src={eric} width="128" alt="eric"/>
            <a href="https://github.com/mamoot">Eric</a>
          </div>
          <div className="col-xs-12 col-sm-2">
            <img className="media-object" src={elaine} width="128" alt="cameron"/>
            <a href="https://github.com/imalooney">Elaine</a>
          </div>
        </div>
        <div className="row row-media">
          <div className="col-sm-12">
            <h2>Contact Us</h2>
          </div>
          <div className="col-sm-12">
            <img className="media-object train" src={logo} alt="Houston Book Link logo"/>
          </div>
          <div className="col-sm-12 contact-us">
            <p>Have questions, comments or ideas for how to improve Houston Book Link? </p>
            <p>We'd love to hear from you!</p>
            <p>Email us at <a href="mailto:houstonbooklink@gmail.com?Subject=Website%20Feedback"
                              target="_top">houstonbooklink@gmail.com</a> or find us on
              <a href="https://github.com/rmoscowitz/houston-elibrary-portal">Github</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
