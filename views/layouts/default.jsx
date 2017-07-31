const React = require('react');

module.exports = (props) => (
  <html>
    <head><title>{props.title}</title></head>
    <body>
      {props.children}
    </body>
  </html>
);