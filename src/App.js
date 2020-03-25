import React from 'react';
import './App.css';

import Nagigation from './components/Navigation';
import SimpleCard from './components/SimpleCard';
import ProCard from './components/ProCard';
import DoughnutCard from './components/DoughnutCard';
import BarCard from './components/BarCard';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">

          <Nagigation />

          <div>{/* start First Row  */}
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <SimpleCard header="Tổng số TTHC" number="1089" icon="faFileAlt"/>
                    </div>
                    <div class="col-md-4">
                        <SimpleCard header="Sở ngành" number="17" icon="faBuilding"/>
                    </div>
                    <div class="col-md-4">
                        <SimpleCard header="Quầy giao dịch" number="23" icon="faDesktop"/>
                    </div>
                </div>
            </div>
          </div>{/* end First Row  */}

          <div>{/* start Second Row  */}
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <ProCard header="Tình hình xử lý HS" number="11725" cardType="tinhhinhxl" />
                    </div>
                    <div class="col-md-6">
                        <ProCard header="HS trực tuyến" number="5734" cardType="hstructuyen" />
                    </div>
                </div>
            </div>
          </div>{/* end Second Row */}

          <div>{/* start Third Row  */}
            <div class="container">
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

          <Footer />

      </div>//end div app
    );
  }
}

export default App;
