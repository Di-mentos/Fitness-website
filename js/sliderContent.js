var buttons = document.getElementsByClassName("headers");
var content = document.getElementsByClassName("content");

document.addEventListener('click', function(s){
	for(var i=0; i<buttons[0].childElementCount; i++){
		if(s.target.getAttribute("href")==buttons[0].children[i].children[0].getAttribute("href")){
			for(var j=0; j<content.length; j++){
				if(j==i){
					if(j==0){
						buttons[0].children[j].children[0].style.color = "#000";
						buttons[0].children[j+1].children[0].style.color = "#fff";
						buttons[0].children[j+2].children[0].style.color = "#fff";
						content[j].style.display = "block";
						content[j+1].style.display = "none";
						content[j+2].style.display = "none";
					}
					else if(j==1){
						buttons[0].children[j-1].children[0].style.color = "#fff";
						buttons[0].children[j].children[0].style.color = "#000";		
						buttons[0].children[j+1].children[0].style.color = "#fff";
						content[j-1].style.display = "none";
						content[j].style.display = "block";		
						content[j+1].style.display = "none";
					}
					else if(j==2){
						buttons[0].children[j-2].children[0].style.color = "#fff";
						buttons[0].children[j-1].children[0].style.color = "#fff";
						buttons[0].children[j].children[0].style.color = "#000";		
						content[j-2].style.display = "none";
						content[j-1].style.display = "none";
						content[j].style.display = "block";				
					}
				}
			}
		}
	}
})