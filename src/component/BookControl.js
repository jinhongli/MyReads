import React from 'react';
import PropTypes from 'prop-types';

class BookControl extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }
  render() {
    const { color } = this.props;
    return (
      <div className="book-shelf-changer fa fa-caret-down" style={{backgroundColor: color}}>
        <select>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookControl;
