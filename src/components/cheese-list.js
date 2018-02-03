import React from 'react';

export default function CheeseList(props){
  const cheesesList = props.cheeses.map( (cheese, index) =>  <li key={index}>{cheese}</li>);
  return (
    <ul id="CheeseList" class="cheese-list">
      {cheesesList}
    </ul>
  );
}