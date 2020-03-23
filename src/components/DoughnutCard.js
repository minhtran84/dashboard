import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../styles/doughnutcard.css';

class DoughnutCard extends React.Component {

    render() {
        return (
            <div class="card" className="doughnutcard">
                <div class="card-header">
                    <h4 className="doughnutcard_header">{this.props.header}</h4>
                </div>
                <div class="card-body">
                    <Doughnut 
                        data={{
                            labels: ["Hài lòng","Không hài lòng"],
                            datasets: [{
                                label: "Revenue",
                                backgroundColor: ["#5FAD56","#E55934"],
                                borderColor: ["rgb(39,42,61)","rgb(39,42,61)"],
                                data: ["1007", "150"], //real data
                            }],
                            }
                        }
                        width={816}
                        height={408}
                        options={{
                            maintainAspectRatio: true,
                            legend: {
                                display: true,
                                reverse: false
                            },
                            title: {}
                        }}
                        className="doughnutcard_body"
                    />

                    {/* <div> */}
                        {/* <canvas height="408" width="816" className="chartcard_body"></canvas> */}

                        {/* <canvas data-bs-chart="{style="display: block; height: 204px; width: 408px;" width="306" height="153" ></canvas> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default DoughnutCard;