var Progressbar = React.createClass({
    getInitialState: function () {
        return { info: {} };
    },
    componentDidMount: function () {
        var sec = this.props.interval;
        var url = this.props.dataurl;
        var self = this;
        if (url != undefined) {
            setInterval(function () {
                $.ajax({
                    url: url,
                    dataType: 'json',
                    success: function (data) {
                        self.setState({ info: data });
                    }.bind(this)
                });
            }, 5000);
        }
    },
    displayName: 'Progressbar',
    render: function () {
        return (
                    <div>
                            <div className="progress">
                                <div className="progress-bar" style={{width: this.state.info}}></div>
                            </div>
                            <span className="progress-description">
                                {this.state.info}% {this.props.message}
                            </span>
                    </div>
               );
    }
});