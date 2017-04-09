var React = require('react');
var WxForm = require('WeatherForm');
var WxMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;


    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage){
      that.setState({error: errorMessage, isLoading: false});
    })

  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
       return <WxMessage temp={temp} location={location}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WxForm onSearch={this.handleSearch}></WxForm>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
