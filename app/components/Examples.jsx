var React = require('react');

var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Inwood,WV'>Inwood, WV</Link>
        </li>
        <li>
          <Link to='/?location=Los Angeles,CA'>Los Angeles, CA</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
