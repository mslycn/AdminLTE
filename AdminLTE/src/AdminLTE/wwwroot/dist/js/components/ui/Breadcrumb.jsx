var Breadcrumb = React.createClass({
    getInitialState: function() {
        return {
            urlList: []
        };
    },
    render: function () {
        //TODO: Dynamic Breadcrumbs
        //var crumbs = this.state.urlList.map(function (urls) {
        //    return  <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        //});
        return (		  
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Examples</a></li>
                    <li className="active">Blank page</li>
                </ol>
        );
    }
});
