  var button=document.getElementsByClassName('button')[0];
  var hidden = document.getElementsByClassName('hidden_button')[0];
   
      button.addEventListener('click', function(event){
      event.preventDefault();
      var showMe = document.getElementsByClassName('hide')[0];
          showMe.setAttribute('style', 'display:block');
          button.setAttribute('style', 'display:none');
          hidden.setAttribute('style', 'display: block')
          function appearance(element, speed)
	  {
		  setInterval(function(){ element.style.opacity = +element.style.opacity + 0.05;}, speed);
		  
	  }
		  appearance(showMe, 100);
	                                      }
		  
		  )
	hidden.addEventListener('click', function(){
        event.preventDefault();
        var showMe = document.getElementsByClassName('hide')[0]; 
        showMe.setAttribute('style', 'display:none');
        hidden.setAttribute('style', 'display: none');
        button.setAttribute('style', 'display:block');
        
    }
                           
                           
                           
                           )
  

var send = document.getElementsByClassName('send_button')[0];
var ness = document.getElementsByClassName('required');
send.addEventListener('click', function(){
        
            for (var i=0; i<ness.length; i++){
                 ness[i].classList.add('req');
                                             }
    
                                          }
                      )


var formLink = document.getElementsByClassName('write_me')[0];
var blackBack = document.getElementsByClassName('back_in_black')[0];
var form = document.getElementsByClassName('send_mail')[0];


formLink.addEventListener('click', function(){
     event.preventDefault();
        
        form.classList.add('popup_form');
        blackBack.style.display='block';
       var closed = document.getElementsByClassName('close')[0];
      closed.addEventListener('click', function(){
   form.classList.remove('popup_form');
   blackBack.style.display='none';
                  
                                          }                           
                           )  
}
 )
                                                      
                        
   blackBack.addEventListener('click', function(){
         blackBack.style.display='none';
           form.classList.remove('popup_form');    
                                                  }
                              )



