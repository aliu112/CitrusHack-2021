var checkPageButton;
document.addEventListener('DOMContentLoaded', function() {
    checkPageButton = document.getElementById('check');
    checkPageButton.addEventListener("click", function() {
    if(checkPageButton.checked == true){
       localStorage.currentState = true;
    }  
    if(checkPageButton.checked == false){
      localStorage.currentState = false;
   } 
   if(localStorage.currentState == true){
     checkPageButton.checked = true;
   }
   if(localStorage.currentState == false){
    checkPageButton.checked = false;
  }
      chrome.tabs.getSelected(null, function(tab) {
        if(checkPageButton.checked == true){
            var x = setInterval(alertFunc,1000000);
        }
        else{
            clearInterval(x);
        }
        
      });
    }, false);
  }, false);

  function alertFunc(){
    if(checkPageButton.checked == false)
    {
      clearInterval(x);
    }
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Drink Water";
    window.speechSynthesis.speak(msg);
    window.alert("DRINK WATER");
  }

