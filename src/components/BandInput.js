import React, { Component } from 'react';

class BandInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });

    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
