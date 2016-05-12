import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstDate: "5/10/2016",
            EndDate: "5/31/2016",
            daysToAdd: 0,
            progressBarVlaue: 0,
            errorMsg: false
        };
    }

    componentDidMount() {
		this.startTime(this.state.FirstDate, this.state.EndDate);
    }

    ChangeDate(daysToAdd){
    	console.log('prop', daysToAdd);
    	this.setState({daysToAdd});		
    }



    startTime(FirstDate, EndDate) {
		var monthFirstDate = new Date(FirstDate),
			date = new Date();
		if(this.state.daysToAdd != 0)
			date.setDate(date.getDate() + Number(this.state.daysToAdd.daysToAdd)); 

		var monthEndDate = new Date(EndDate),
			timeDiff = (Math.abs(monthEndDate.getTime() - date.getTime()))/1000,
			timeDiffAll = (Math.abs(monthEndDate.getTime() - monthFirstDate.getTime()))/1000,
			progressBarVlaue = (timeDiff/timeDiffAll)*100;

		progressBarVlaue = Math.floor(100 - progressBarVlaue);

		if(this.state.progressBarVlaue < 0){
			this.state.errorMsg = true;
		}
		else
			this.state.errorMsg = false;

		this.setState({progressBarVlaue});

		var t = setTimeout(function(){this.startTime(FirstDate, EndDate);}.bind(this), 1000);
	}

    render() {
    	var divWidth = { width: this.state.progressBarVlaue + '%'};

        return (       

            <div className="container">
                <h1>Countdown with ReactJS</h1>
                <div className="progressBarWrapper">
                	<div className="progressBar" style={divWidth} >{this.state.progressBarVlaue + '%'}</div>
                </div>
                <Input changeDate={daysToAdd => this.ChangeDate({daysToAdd})}/>
                { this.state.errorMsg ? <span className="errorMsg">Invalid number</span> : null }
                
            </div> 
        );
    }
}