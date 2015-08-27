var PageHeader = React.createClass({
    getInitialState: function() {
        return {
            title: this.props.title,
            description: this.props.description
        };
    },
    render: function () {
        return (
            <section className="content-header">
                <h1>
                    {this.state.title}
                    <small>{this.state.description}</small>
                </h1>
                <Breadcrumb />
            </section>
        );
    }
});