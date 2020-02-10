/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import { withStyles } from "@material-ui/core";
import loadCDFDashboard from "../loadCDFDashboard";
import style from "./style";

/**
 * React component to render a CDF Dashboard.
 */
export class CDFDashboard extends Component {
  /**
   * Overrides the default constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    /**
     * Promise to retreive the CDF dashboard object instance.
     */
    const { cdfEmbedPath, dashboardPath } = this.props;
    this.getDashboard = loadCDFDashboard(cdfEmbedPath, dashboardPath)
      .then(Dashboard => {
        const dash = new Dashboard(this.dashboardDiv);
        dash.isSilent = true;
        return Promise.resolve(dash);
      })
      .catch(error => Promise.reject(error));
  }

  /**
   * Initializes and renders the CDF dashboard.
   */
  componentDidMount() {
    this.getDashboard
      .then(dashboard => {
        // Sets the filters parameters
        this.setDashboardParameters(dashboard);

        // Ataches the event listeners for the dashboard parameters change events
        this.registerDashboardEvents(dashboard);

        // Renders the dashboard
        this.renderDashboard(dashboard);
      })
      .catch(error => this.handleFailedDashboardLoad(error));
  }

  /**
   * Processes component changes.
   */
  componentDidUpdate() {
    this.getDashboard
      .then(dashboard => {
        // Sets the filters parameters
        this.setDashboardParameters(dashboard);
      })
      .catch(error => this.handleFailedDashboardLoad(error));
  }

  /**
   * Cleanup component resources.
   */
  componentWillUnmount() {
    this.getDashboard
      .then(dashboard => {
        // Dispose the CDF dashboard
        this.disposeDashboard(dashboard);
      })
      .catch(error => this.handleFailedDashboardLoad(error));
  }

  /**
   * Sets the CDF dashboard parameters with the filters property attributes if the current dashboard parameter value differs.
   *
   * @param {Object} dashboard The CDE dashboard object to set the parameters.
   */
  setDashboardParameters(dashboard) {
    const { filters } = this.props;
    map(filters, (value, key) => {
      const currentValue = dashboard.getParameterValue(key);

      if (currentValue !== value) {
        dashboard.fireChange(key, value);
      }
    });
  }

  /**
   * Disposes the CDF dashboard.
   *
   * @param {Object} dashboard The CDE dashboard object to be disposed.
   */
  disposeDashboard(dashboard) {
    dashboard.dispose();
  }

  /**
   * Registers a listener for the CDF dashboard parameter changes to trigger a filters change event.
   *
   * @param {Object} dashboard The CDE dashboard object to register the listener.
   */
  registerDashboardEvents(dashboard) {
    dashboard.on("cdf", event => this.handleDashboardEvent(event));
  }

  /**
   * Handler for the dashboard events.
   * @param {Object} event
   */
  handleDashboardEvent(event) {
    const { filters, onFiltersChange } = this.props;
    const key = event.parameter;

    if (key && (!filters[key] || filters[key] !== event.value)) {
      onFiltersChange({ [key]: event.value });
    }
  }

  /**
   * Handles component errors.
   * @param {String} error
   */
  handleFailedDashboardLoad(error) {
    if (this.dashboardDiv) {
      this.dashboardDiv.innerHTML = encodeURI(error);
    }
  }

  /**
   * Renders the CDF dashboard.
   * @param {Object} dashboard The CDE dashboard to render
   */
  renderDashboard(dashboard) {
    dashboard.render();
  }

  /**
   * Renders the placeholder for the CDF dashboard.
   */
  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.cdfDashboard}
        ref={myDiv => {
          this.dashboardDiv = myDiv;
        }}
      />
    );
  }
}

/**
 * Component property types.
 */
CDFDashboard.propTypes = {
  /**
   * The cfd embed path.
   */
  cdfEmbedPath: PropTypes.string.isRequired,
  /**
   * The dashboard path to the CDF Dashboard.
   */
  dashboardPath: PropTypes.string.isRequired,
  /**
   * The map of filters present on the dashboard.
   */

  filters: PropTypes.shape({}),
  /**
   * Callback fired when the slice wants a filter to change.
   *
   * @param {object} newFilters The map of dashboard filters to change.
   */
  onFiltersChange: PropTypes.func,
  /**
   * An object with the class names generated for styles
   */
  classes: PropTypes.objectOf(PropTypes.string)
};

/**
 * Component default properties values.
 */
CDFDashboard.defaultProps = {
  filters: {},
  onFiltersChange: () => {},
  classes: {}
};

export default withStyles(style)(CDFDashboard);
