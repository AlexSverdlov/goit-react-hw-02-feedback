import React from 'react';

class Statistics extends React.Component {
  render() {
    console.log(this.props.good);
    return <p>Good:{this.props.good}</p>;
  }
}
export default Statistics;
