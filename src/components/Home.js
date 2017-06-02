import React from 'react'

import Card from './Card'
import Search from './Search'

import harrisCard from '../images/harris-co-cards.png'
import houstonCard from '../images/houston-card.png'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      libraries: [],
    }

    this.select = this.select.bind(this)
  }

  componentWillMount() {
    const getImagePath = (libraryName) => {
      const imagePaths = { // lol
        "Houston Area Digital Media Catalog (TX)": houstonCard,
        "Harris County Public Library (TX)": harrisCard,
      };
      return imagePaths[libraryName];
    };

    fetch(`/libraries`)
    .then(response => {
      response.json().then(libraries => {
        this.setState({
          libraries: libraries.map(library => {
            return Object.assign(library, {
              selected: true,
              imagePath: getImagePath(library.name),
            });
          })
        });
      })
    });
  }

  select(libraryId, value) {
    const libraries = this.state.libraries.map(library => {
      if (library.id === libraryId) {
        library.selected = value;
      }
      return library;
    });
    this.setState({ libraries }, () => {
      this.searchRef.focus();
    });
  }

  renderCards(libraries) {
    return libraries.map((library, index) => (
      <Card key={index}
            imagePath={library.imagePath}
            imageAltText={library.name}
            libraryId={library.id}
            select={this.select}/>
    ));
  }

  render() {
    const cards = this.renderCards(this.state.libraries);

    return (
      <div>
        <div>Choose your library cards...</div>

        <div className="card-container">
          {cards}
        </div>

        <Search selectedLibraries={this.state.libraries}
                ref={(search) => {
                  this.searchRef = search;
                }}/>
      </div>

    )
  }
}


export default Home;
