var SearchSidebar = React.createClass({
    displayName: "SearchSidebar",
    render: function () {
        return (
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                        </span>
                    </div>
                </form>
               );
    }
});

var NavItem = React.createClass({
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
    displayName: 'NavItem',
    render: function () {
        var icon = "fa fa-" + this.props.icon + " text-" + this.props.iconcolor;
        var datacolor = "label pull-right bg-" + this.props.datacolor;
        return (
                <li>
                    <a href={this.props.route}>
                        <i className={icon}></i> <span>{this.props.title}</span>
                        <small className={datacolor}>{this.state.info}</small>
                    </a>
                </li>
               );
    }
});
var NavGroup = React.createClass({
    displayName: 'NavGroup',
    render: function () {
        var icon = "fa fa-" + this.props.icon + " text-" + this.props.iconcolor;
        return (
		        <li className="treeview">
			        <a href="#">
                        <i className={icon}></i><span>{this.props.title}</span>
                        <i className="fa fa-angle-left pull-right"></i>
			        </a>
			        <ul className="treeview-menu">
			            {this.props.children}
			        </ul>
		        </li>
                );
    }
});
var MainSidebar = React.createClass({
    displayName: 'MainSidebar',
    getInitialState: function () {
        return {title: this.props.title}
    },
    render: function () {
        return (
                <aside className="main-sidebar">
                                <section className="sidebar">
                                    <div className="user-panel">
                                        <div className="pull-left image">
                                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                        </div>
                                        <div className="pull-left info">
                                            <p>Alexander Pierce</p>
                                            <a href="#"><i className="fa fa-circle text-success"></i> On-line</a>
                                        </div>
                                    </div>
                                    <SearchSidebar />
                                    <ul className="sidebar-menu">
                                        <li className="header">MAIN NAVIGATION</li>
                                        <NavGroup title=" Dashboard" icon="dashboard">
                                            <NavItem title="Dashboard v1" icon="circle-o" route="#" datacolor="red" />
                                            <NavItem title="Dashboard v2" icon="circle-o" route="#" datacolor="green" />
                                        </NavGroup>
                                        <NavItem title="Widgets" icon="th" iconcolor="red" route="#" dataurl="/Home/GetInfo" datacolor="green" interval="5000" />
                                    </ul>
                                </section>
                </aside>
               );
    }
});