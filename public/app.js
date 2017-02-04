var app = function(){
	console.log('working');
	var view = document.querySelector('#view');
	console.log(view.scrollLeft, view.scrollTop);
	view.scrollLeft = 1;
	var content = document.querySelector("#content");
	console.log(content.scrollWidth);
	
	var button = document.createElement('button');
	var body = document.querySelector('body');
	
	var inputButton = document.createElement("input");
		body.appendChild(inputButton);
		body.appendChild(button);
	button.innerText = "clickMe";
	button.onclick = function(){
		var view = document.querySelector('#view');
		var destination2 = inputButton.value;
		// view.scrollLeft = 5000;
		
		// while (view.scrollLeft<5000){
			var view = document.querySelector('#view');
			var scroller = function(destination){
				// console.log("in the view scroll function");
				
				var view = document.querySelector('#view');	
				console.log(view.scrollLeft);

				if (view.scrollLeft <= destination){
					var y = view.scrollLeft;
					view.scrollLeft = y+5;
					// if (view.scrollLeft % 100 === 0){
					// 	view.style.backgroundColor = "blue";
					// 	if (view.scrollLeft % 200 === 0){
					// 		view.style.backgroundColor = "green";
					// 	}
					// }
					if(view.scrollLeft >= destination){
						clearInterval(smoothScroll);
					} 
				} else if (view.scrollLeft >= destination){
					var y = view.scrollLeft;
					view.scrollLeft = y-5;
					// if (view.scrollLeft % 100 === 0){
					// 	view.style.backgroundColor = "blue";
					// 	if (view.scrollLeft % 200 === 0){
					// 		view.style.backgroundColor = "green";
					// 	}
					// }
					if(view.scrollLeft <= destination){
						clearInterval(smoothScroll);
					}

				}
			}
			var smoothScroll = setInterval(function(){scroller(destination2)}, 20);



			console.log(view.scrollLeft);
		// }
	}
}
window.onload = app;