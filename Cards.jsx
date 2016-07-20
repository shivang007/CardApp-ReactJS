import React from 'react';
import ReactDOM from 'react-dom';

class Cards extends React.Component{
	
	
	render(){
		var hiddenText = {
			display: 'none'
		}
		return(
				<div className= "col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<div id = {this.props.data.id+'div'} className = {this.props.data.className} onClick = {this.props.onClick}>
					<div id = {this.props.data.id} className = 'hiddenText' style = {hiddenText}>{this.props.data.cardValue}</div>
				</div>
				</div>
			);
	}

}

export default Cards;