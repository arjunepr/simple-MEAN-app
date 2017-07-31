const React = require('react');
const DefaultLayout = require('./layouts/default');

module.exports = (props) => (
  <DefaultLayout title={props.title}>
    <div>Hey! {props.name}</div>
  </DefaultLayout>  
);