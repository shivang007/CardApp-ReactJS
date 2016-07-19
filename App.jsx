import React from 'react';
import Cards from './Cards.jsx';
import ReactDOM from 'react-dom';

var flagFirst = true,
			prevCardDiv = '',
			prevCardNo = null,
			currentCardNo= null,
			currentCardDiv ='',
			score = 0,
			currentCardValue = null,
			prevCardValue =null,
 			inprogress = false;
console.log('typeof score: '+ typeof(score));

class App extends React.Component{
	forceUpdateHandler() {
      this.forceUpdate();
   };
	constructor(){
		super();
		function shuffle(a) {
		    var j, x, i;
		    for (i = a.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = a[i - 1];
		        a[i - 1] = a[j];
		        a[j] = x;
		    }
		}
		var myArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
		shuffle(myArray);


		this.state={
			//myArray : [ {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}  ],
			//myArray : [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
			data:
			[
				{
					id: 1,
					className: 'cards',
					cardValue: myArray[0]
				},
				{
					id: 2,
					className: 'cards',
					cardValue: myArray[1]
				},
				{
					id: 3,
					className: 'cards',
					cardValue: myArray[2]
				},
				{
					id: 4,
					className: 'cards',
					cardValue: myArray[3]
				},
				{
					id: 5,
					className: 'cards',
					cardValue: myArray[4]
				},
				{
					id: 6,
					className: 'cards',
					cardValue: myArray[5]
				},
				{
					id: 7,
					className: 'cards',
					cardValue: myArray[6]
				},
				{
					id: 8,
					className: 'cards',
					cardValue: myArray[7]
				},
				{
					id: 9,
					className: 'cards',
					cardValue: myArray[8]
				},
				{
					id: 10,
					className: 'cards',
					cardValue: myArray[9]
				},
				{
					id: 11,
					className: 'cards',
					cardValue: myArray[10]
				},
				{
					id: 12,
					className: 'cards',
					cardValue: myArray[11]
				},
				{
					id: 13,
					className: 'cards',
					cardValue: myArray[12]
				},
				{
					id: 14,
					className: 'cards',
					cardValue: myArray[13]
				},
				{
					id: 15,
					className: 'cards',
					cardValue: myArray[14]
				},
				{
					id: 16,
					className: 'cards',
					cardValue: myArray[15]
				}
			],
		onSelectCards : function(event){
		if(flagFirst){
			prevCardNo = event.target.id;
			prevCardDiv = event.target.id;+'div';
			prevCardValue = event.target.childNodes[0].innerText;
			//console.log(prevCardValue);
			//console.log(prevCardNo);
			//console.log(prevCardDiv);
			event.target.style.display = 'block';
			event.target.style.color = '#2470AC';
			event.target.childNodes[0].style.display = 'block';
			event.target.style.background = '#F4BCAD';
			flagFirst = false;
		}else if(!inprogress){
			currentCardNo = event.target.id;
			currentCardValue = event.target.childNodes[0].innerText;
			currentCardDiv = event.target.id;+'div';
			event.target.style.display = 'block';
			event.target.style.color = '#2470AC';
			event.target.childNodes[0].style.display = 'block';
			event.target.style.background = '#F4BCAD';
			console.log('currentCardValue:' + currentCardValue);
			console.log('prevCardValue:' + prevCardValue);
			if (currentCardValue === prevCardValue) {
				score += 2;
			}else{
				if(score){
					score -= 2;
				}
			}
			//console.log("currentCardNo"+currentCardNo);
			//console.log("currentDiv"+currentCardDiv);
			//console.log("prevCardNo"+prevCardNo);
			//console.log("prevCardDiv"+prevCardDiv);
			
			inprogress = true;
			setTimeout(function(){
				document.getElementById(prevCardNo).childNodes[0].style.display = 'none';
				document.getElementById(currentCardNo).childNodes[0].style.display = 'none';
				document.getElementById(prevCardDiv).style.background= 'url(../card200264.jpg)';
				document.getElementById(currentCardDiv).style.background= 'url(../card200264.jpg)';
				inprogress = false;
				flagFirst = true;
				//console.log('prev array: '+ myArray);
				//setStateHandler();
				

				function setStateHandler(){
						console.log('original: '+ myArray);
						shuffle(myArray);
						console.log('shuffled: '+ myArray);
						var z = 0;

						//for(z=0; z<myArray.length; z++){
						//	setState({data.cardValue})
						//}
				}
				setStateHandler();
				//forceUpdateHandler();
				//console.log('new array: '+ myArray);
				
			},2000);
			console.log(score);
			document.getElementById("scoreSpan").innerHTML = score;
			
		}
		
	}
	}
	//this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	//this.setStateHandler = this.setStateHandler.bind(this);
};

	/*setStateHandler() {
      var newArray = myArray;
      console.log('inside handler: ' +newArray);
   };*/


	

	render(){
		return(
				<div className= "app-container">
				<div className = "scoreDiv">Your Score: <span id = "scoreSpan"></span></div>
					{this.state.data.map((card, i) => <Cards key = {i} data = {card} onClick= {this.state.onSelectCards}/>)} 
				</div>
			);
	}
}
export default App;