var React = require("react");
var PropTypes = require('prop-types');

var Clock = React.createClass({
    getDefaultProps: function () {
        totalSeconds: 0
    },

    propTypes: {
        totalSeconds: PropTypes.number,
    },

    formatSeconds: function (totalSeconds){
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        
        if(seconds < 10) {
            seconds = "0" + seconds
        }
        if(minutes < 10) {
            minutes = "0" + minutes
        }

        return minutes + ":" + seconds;

    },

    render() {
        var {totalSeconds} = this.props;

        return (            
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        )
    }
})

module.exports = Clock;
