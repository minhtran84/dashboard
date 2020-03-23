import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../styles/barcard.css';

class BarCard extends React.Component {
    
    render() {
        return (
            <div class="card" className="barcard">
                <div class="card-header">
                    <h4 className="barcard_header">{this.props.header}</h4>
                </div>
                <div class="card-body">
                    <Bar 
                        data={{
                            labels: ["January","February","March"],
                            datasets: [{
                                label: "HS trực tuyến",
                                backgroundColor: "#2F97C1",
                                borderColor: "#2F97C1",
                                data: ["890","824","845"], //real data
                            }],
                            }
                        }
                        width={816}
                        height={408}
                        options={{
                            maintainAspectRatio: true,
                            legend: {
                                display: false
                            },
                            title: {},
                            scales: {
                                xAxes: [{"gridLines":{"drawBorder":true,"drawTicks":false,"drawOnChartArea":false}}],
                                yAxes: [{"gridLines":{"drawBorder":true,"drawTicks":false,"drawOnChartArea":false}}]
                            }
                        }}
                        className="barcard_body"
                    />
                </div>
            </div>
        );
    }
}

export default BarCard;