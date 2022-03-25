var trig1 = document.getElementsByClassName("li2");
var sub1 = document.getElementsByClassName("sublist1");

document.addEventListener('mouseover', function(e){
	for(var i=0; i<trig1.length; i++){
		if(e.target.getAttribute("id")==trig1[i].children[0].getAttribute("id")){
			for(var j=0; j<sub1.length; j++){
				if(i==j){
					if(j==0){
						sub1[j].style.top = "-3px";
						sub1[j+1].style.top = "-228px";
						sub1[j+2].style.top = "-228px";
					}
					else if(j==1){
						sub1[j-1].style.top = "-228px";
						sub1[j].style.top = "-3px";
						sub1[j+1].style.top = "-228px";
					}
					else if(j==2){
						sub1[j].style.top = "-3px";
						sub1[j-1].style.top = "-228px";
						sub1[j-2].style.top = "-228px";
					}
				}
			}
		}
	}
})

document.addEventListener('click', function(e){
	for(var j=0; j<sub1.length; j++){
		for(var k=0; k<sub1[j].childElementCount; k++){
			if(e.target.getAttribute("href")!=sub1[j].children[k].children[0].getAttribute("href")){
				if(window.getComputedStyle(sub1[j]).top=="-3px"){
					sub1[j].style.top = "-228px";
				}
			}
		}
	}
})