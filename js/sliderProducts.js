var prList = document.getElementsByClassName("proteins");
var product = document.getElementsByClassName("protein-product");

var k=0;
var j=4; /*Активен 5-й элемент */
/*первый if: если произошел клик по блоку li или по изображению, которое его перекрывает*/
document.addEventListener('click', function(m){
	for(var i=0; i<prList[0].childElementCount; i++){
		if(m.target.getAttribute("id")==prList[0].children[i].getAttribute("id") || m.target.getAttribute("alt")==prList[0].children[i].children[0].getAttribute("alt")){
			k = i;			
			if(k!=j){
				prList[0].children[k].style.background = "#e74c3c";
				product[k].style.display = "block";	
				prList[0].children[j].style.background = "white";
				product[j].style.display = "none";
				j = k;	
			}
		}
	}
})

var e = 0;
var f = 4; /*Активен 5-й элемент */
document.addEventListener('mouseover', function(q){
	for(var i=0; i<prList[0].childElementCount; i++){
		if(q.target.getAttribute("id")==prList[0].children[i].getAttribute("id") || q.target.getAttribute("alt")==prList[0].children[i].children[0].getAttribute("alt")){
			e = i;
			if(e!=f){
				prList[0].children[e].style.background = "#e74c3c";
				prList[0].children[e].style.boxShadow = "none";
				prList[0].children[e].style.cursor = "pointer";
				prList[0].children[f].style.background = "white";
				prList[0].children[f].style.boxShadow = "-23px -7px 30px 2px rgba(0, 0, 0, .05)";
				if(f==5){
					prList[0].children[f].style.boxShadow = "-25px -12px 34px -5px rgba(0, 0, 0, .05), 18px -1px 25px -13px rgba(0, 0, 0, .05)";
				}
				else if(f==0){
					prList[0].children[f].style.boxShadow = "-5px -12px 34px -5px rgba(0, 0, 0, .05)";
				}
				f = e;
			}
		}
	}
})