       
     var container = document.getElementById("main_div");
	   var array_value = ["1","2","3","4","5","6","7","8","9"]
     var array_value_randomize =[]
     var array_color_initial = []
	   var array_button_initial= []   

     function initializeButton(){
      for(var i=0; i<array_value.length; i++){
        array_value_randomize[i] = array_value[i]
        var load_button = "Button" + array_value_randomize[i]
        init_button = document.createElement("input");
        init_button.setAttribute("type","Button")
        init_button.setAttribute("value",array_value_randomize[i])
        init_button.setAttribute("id",load_button)
        init_button.setAttribute("font-size","14px");
        init_button.setAttribute("background-color","#4CAF50");
        init_button.className = "button_id";
          init_button.onclick = function(){
            str = document.querySelector('input[name = "color"]:checked').value
            array_color_initial.push(str)
            array_button_initial.push(this.id)
            this.style.backgroundColor = str 
          } // init-button noClick function     
        container.appendChild(init_button)
      }  //for-loop 
    }// initilizeButton 

      function doReset(){
       	location.reload()
      }

	    function doShuffle() {
        counter = array_value.length
    			while (counter > 0) {
				    index = Math.floor(Math.random() * counter);
        		counter--;
        		temp = array_value[counter];
        		array_value[counter] = array_value[index];
    				array_value[index] = temp;
        	} //while loop	
        document.getElementById("main_div").innerHTML = "";// Clear Main div Content
    		initializeButton()
    		for(k = 0; k < 9; k++){
    			document.getElementById(array_button_initial[k]).style.backgroundColor = array_color_initial[k]
    		}				
    } //doShuffle  

