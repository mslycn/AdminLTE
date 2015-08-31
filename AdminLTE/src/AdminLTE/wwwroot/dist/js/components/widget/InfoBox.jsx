var InfoBox = React.createClass({
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
    displayName: 'InfoBox', 
    render: function () {
        var icon = "fa fa-" + this.props.icon;
        var boxcolor = "info-box " + this.props.boxcolor;
        var iconcolor = "info-box-icon bg-" + this.props.iconcolor;
        return (
                  <div className={boxcolor}>
                    <span className={iconcolor}><i className={icon}></i></span>
                    <div className="info-box-content">
                      <span className="info-box-text">{this.props.title}</span>
                      <span className="info-box-number">{this.state.info}</span>
                      {this.props.children}
                    </div>
                  </div>
               );
    }
});