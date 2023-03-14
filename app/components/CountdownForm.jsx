var React = require("react");

var CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var seconds = this.refs.seconds.value;
        console.log(typeof seconds)

        if(seconds.match(/^[0-9]*$/)){
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(seconds,10))
        }
        

    },

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} ref="form" className="countdown-form" >
                    <input type="text" ref="seconds" placeholder="Enter the time in seconds" />
                    <button className="button expanded">Start</button>
                </form>    

            </div>
        )
    }
})

module.exports = CountdownForm;
