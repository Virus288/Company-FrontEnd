import React from 'react'
import {Bar} from "react-chartjs-2";
import { withRouter } from "react-router-dom";
import backend from "../Links.json";

class Charts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0,
            Done: false,
            chartData: {
                labels: [],
                datasets: [{
                    label: "Profit",
                    data: [],
                    backgroundColor:[]
                }]
            }
        }
    }

    FetchData() {
        fetch(`${backend.backend}/salesstats?store=${this.props.match.params.store}`, {
            method: "GET",
            credentials: "include"
        })
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result,
                        Done: true
                    });
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
                }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition:"right"
    }

    componentDidMount() {
        this.FetchData()
    }

    render(){

     const RenderData = () => {
         if(this.state.Data.Message){
             return ( <h2>{this.state.Data.Message}</h2> )
         }
         let data = [];
         let data2 = [];
         let colors = [];

         for(let x=0;x< this.state.Data["files"].length; x++){
             data.push(this.state.Data["files"][x].slice(0, -5))
             data2.push(this.state.Data["profits"][x])
             colors.push("#" + Math.floor(Math.random()*16777215).toString(16))
         }
         this.state.chartData.labels = data
         this.state.chartData.datasets[0].data = data2
         this.state.chartData.datasets[0].backgroundColor = colors

         return (
             <div id="chart">
                 <Bar
                     data={this.state.chartData}
                     options={{
                         title: {
                             display: this.props.displayTitle,
                             text: "Data of your sells based on your last few days",
                             fontSize: 25
                         },
                         maintainAspectRatio: true, // Automatyczna wielkość w zależności od tego, co jest na ekranie
                         legend: {
                             display: this.props.displayLegend,
                             position: this.props.legendPosition,
                             labels: {
                                 fontColor: "blue",
                             }
                         },
                         tooltips: {
                             enabled: true
                         }
                     }}
                 />
             </div>
         )

     }


        return this.state.Done ?
            <RenderData /> : (
                <h2>Fetching data...</h2>
            );
    }
}

export default withRouter(Charts)
