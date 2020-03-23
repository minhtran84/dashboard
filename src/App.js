import React from 'react';
import './App.css';

import Nagigation from './components/Navigation';
import DoughnutCard from './components/DoughnutCard';
import BarCard from './components/BarCard';

class App extends React.Component {

  render() {
    return (
      <div className="App">

          <Nagigation />

          <div>{/* start Third Row  */}
          <div class="container mb-3">
            <div class="row">
                <div class="col-md-6">
                    <DoughnutCard header="Mức độ hài lòng" />
                </div>
                <div class="col-md-6">
                    <BarCard header="Hồ sơ trực tuyến"/>
                </div>
            </div>
          </div>
        </div>{/* end Third Row */}

      </div>//end div app
    );
  }
}

export default App;
