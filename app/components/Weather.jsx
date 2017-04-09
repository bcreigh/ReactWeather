var React = require('react');
var WxForm = require('WeatherForm');
var WxMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    })

  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
       return <WxMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WxForm onSearch={this.handleSearch}></WxForm>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
