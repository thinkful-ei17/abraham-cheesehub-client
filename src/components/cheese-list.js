import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

const  Spinner = require('react-spinkit');

export class CheeseList extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    let cheeses;
    if(this.props.error){
      cheeses = <li>Something went wrong</li>;
    } 

    if(this.props.loading && this.props.error === null){
      cheeses = <li>Loading... <Spinner name='circle' /></li>;
    } else {
      if(this.props.cheeses)cheeses = this.props.cheeses.map((cheese, index) => <li key={index}>{cheese}</li>);
    }

    return (
      <ul id="CheeseList" class="cheese-list">
        {cheeses}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(CheeseList);