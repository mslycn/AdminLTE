var Box = React.createClass({
    displayName: 'Box',
    getInitialState: function () {
        return {title: this.props.title}
    },
    render: function () {
        return (

                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">{this.state.title}</h3>
                        <div className="box-tools pull-right">
                            <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                            <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div className="box-body">
                        Start creating your amazing application!
                    </div>
                    <div className="box-footer">
                        Footer
                    </div>
                </div>
               );
    }
});
