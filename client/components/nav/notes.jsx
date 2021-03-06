/**
 * Notes Navigation Bar View
 *
 * Controls notes nav bar and emits navigation events.
 */
var React = require("react");
var Base = require("./base.jsx");

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  getInitialState: function () {
    return { filter: "" };
  },

  // Update filter value on changes.
  updateFilter: function (ev) {
    ev.preventDefault();
    this.setState({ filter: ev.target.value }, function () {
      this.props.onUpdateFilter(this.state.filter);
    }.bind(this));
  },

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  render: function () {
    return (
      <Base>
        <form className="nav navbar-nav navbar-right navbar-form-nonresp navbar-search"
              role="search">
          <div className="form-group">
            <input type="text" className="notes-filter form-control"
                   data-qa-name="notes-filter"
                   onChange={this.updateFilter}
                   placeholder="Filter" />
          </div>
        </form>
      </Base>
    );
  }
});
