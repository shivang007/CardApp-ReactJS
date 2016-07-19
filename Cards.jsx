import React from 'react';
import ReactDOM from 'react-dom';

class Cards extends React.Component{
	
	
	render(){
		var hiddenText = {
			display: 'none'
		}
		return(
				
				<div id = {this.props.data.id+'div'} className = {this.props.data.className} onClick = {this.props.onClick}>
					<div id = {this.props.data.id} className = 'hiddenText' style = {hiddenText}>{this.props.data.cardValue}</div>
				</div>

			);
	}

}

export default Cards;