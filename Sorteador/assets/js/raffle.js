function sortear(){


		var Maior = document.getElementById("Maior").value;
	    var menor = document.getElementById("Menor").value;
	    var sorteio = document. getElementById("Sortear").value;
	    vetor = new Array(sorteio);




	    for(var i = 0; i<sorteio-1;i++){
	    	var r = Math.floor((Math.random()*Maior)+menor);
	    	vetor.push(r);		
		}	
		document.write(vetor);
		}
	   