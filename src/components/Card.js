// import PropTypes from 'react'
import React from 'react'
import Ionicon from 'react-ionicons'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true,
    };
    this._onCardClick = this._onCardClick.bind(this);
  }

  _onCardClick() {
    this.setState({
      selected: !this.state.selected
    }, () => {
      this.props.select(this.props.libraryId, this.state.selected);
    });
  }

  render() {
    return (
      <div className="card" onClick={this._onCardClick}>
        <Ionicon icon={this.state.selected ? "ion-checkmark-circled" : "ion-close-circled"}
                 fontSize="35px"
                 color={this.state.selected ? "green" : "red"}/>
        <img className={"card-image " + (this.state.selected ? "" : "gray")}
             src={this.props.imagePath}
             alt={this.props.imageAltText}/>
      </div>
    )
  }

}

// Card.propTypes = {
//     libraryId: PropTypes.string,
//     imagePath: PropTypes.string,
//     imageAltText: PropTypes.string,
//     select: PropTypes.func,
// };

export default Card;