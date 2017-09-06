import React from 'react';

import TypeComparison from '../components/graphs/typeComparison.js';
import GenderBreakdown from '../components/graphs/genderBreakdown.js';
import CountryComparison from '../components/graphs/countryComparison.js';

export default class Graphs extends React.Component {
  render() {
    return(
      <div className="row">
        <TypeComparison />
        <GenderBreakdown />
        <CountryComparison />
      </div>
    )
  }
}
