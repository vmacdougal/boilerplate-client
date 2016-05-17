import React from 'react';
import {Panel, Button, PageHeader} from 'react-bootstrap';
import TinyLineChart from './charts/TinyLineChart';
import SimpleLineChart from './charts/SimpleLineChart';
import VerticalLineChart from './charts/VerticalLineChart';
import BiaxialLineChart from './charts/BiaxialLineChart';
import DottedLineChart from './charts/DottedLineChart';
import TinyBarChart from './charts/TinyBarChart';
import PositiveNegativeBarChart from './charts/PositiveNegativeBarChart';


var ReCharts = React.createClass({
  render: function() {
    return (
      <div>

        <div className='row'>
          <div className='col-lg-12'>
            <PageHeader>ReCharts</PageHeader>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <Panel header={<span>Simple Line Chart Example</span>} >
              <SimpleLineChart />
            </Panel>
          </div>
          <div className='col-lg-6'>
            <Panel header={<span>Tiny Line Chart Example</span>} >
              <TinyLineChart />
            </Panel>
            <Panel header={<span>Tiny Bar Chart Example</span>} >
              <TinyBarChart />
            </Panel>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <Panel header={<span>Vertical Line Chart Example</span>} >
              <VerticalLineChart />
            </Panel>
          </div>
          <div className='col-lg-6'>
            <Panel header={<span>Biaxial Line Chart Example</span>} >
              <BiaxialLineChart />
            </Panel>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <Panel header={<span>Dotted Line Chart Example</span>} >
              <DottedLineChart />
            </Panel>
          </div>
          <div className='col-lg-6'>
            <Panel header={<span>Bar Chart Example</span>} >
              <PositiveNegativeBarChart />
            </Panel>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <Panel header={<span>ReCharts Charts Usage</span>} >
              <div>
                <p>ReCharts is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of ReCharts along with a few plugins to enhance the user experience. The ReCharts plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for ReCharts Charts is available on their website, <a target='_blank' href='http://www.ReChartscharts.org/'>http://www.ReChartscharts.org/</a>.</p>
                <Button bsSize='large' block href='http://recharts.org/'>View ReCharts Charts Documentation</Button>
              </div>
            </Panel>
          </div>
        </div>

      </div>

    );
  }
});

export default ReCharts;
