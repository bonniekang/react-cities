import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import City from '../containers/city';

class CityList extends Component {
  cityList = () => {
    return this.props.cities.map(city => {
      return (
        <City city={city} key={city.name} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group cities">
        { this.cityList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
