const React = require('react');
const DefaultLayout = require('./layouts/default');

module.exports = (props) => (
  <DefaultLayout title={props.title}>
    <div>Hello {props.name}</div>
    <h1>{capitalize(props.name)} Is Awesome</h1>
  </DefaultLayout> 
);

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLocaleLowerCase();
