window.addEventListener("DOMContentLoaded", function() {
  
    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }



  function darkmode(){
      document.getElementById("Gallery").style.backgroundColor = "#0f0d0d";
      document.getElementById("Gallery").style.color = "white";

      document.getElementById("Gallery").style.color = "white";
  }



function page1(){
    document.getElementById("page1").style.opacity = "100%";
    document.getElementById("page2").style.opacity = "0%";
    document.getElementById("page3").style.opacity = "0%";
    document.getElementById("page4").style.opacity = "0%";
    document.getElementById("page5").style.opacity = "0%";
    document.getElementById("page6").style.opacity = "0%";

    document.getElementById("button1").style.backgroundColor = "white";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";
    document.getElementById("button5").style.backgroundColor = "red";
    document.getElementById("button6").style.backgroundColor = "red";

    document.getElementById("button1").style.color = "red";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button3").style.color = "white";
    document.getElementById("button4").style.color = "white";
    document.getElementById("button5").style.color = "white";
    document.getElementById("button6").style.color = "white";



  
 

    
}

function page2(){
    document.getElementById("page2").style.opacity = "100%";
    document.getElementById("page1").style.opacity = "0%";
    document.getElementById("page3").style.opacity = "0%";
    document.getElementById("page4").style.opacity = "0%";
    document.getElementById("page5").style.opacity = "0%";
    document.getElementById("page6").style.opacity = "0%";

    document.getElementById("button2").style.backgroundColor = "white";
    document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";
    document.getElementById("button5").style.backgroundColor = "red";
    document.getElementById("button6").style.backgroundColor = "red";

    document.getElementById("button2").style.color = "red";
    document.getElementById("button1").style.color = "white";
    document.getElementById("button3").style.color = "white";
    document.getElementById("button4").style.color = "white";
    document.getElementById("button5").style.color = "white";
    document.getElementById("button6").style.color = "white";
}

function page3(){
    document.getElementById("page3").style.opacity = "100%";
    document.getElementById("page1").style.opacity = "0%";
    document.getElementById("page2").style.opacity = "0%";
    document.getElementById("page4").style.opacity = "0%";
    document.getElementById("page5").style.opacity = "0%";
    document.getElementById("page6").style.opacity = "0%";

    document.getElementById("button3").style.backgroundColor = "white";
    document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";
    document.getElementById("button5").style.backgroundColor = "red";
    document.getElementById("button6").style.backgroundColor = "red";

    document.getElementById("button3").style.color = "red";
    document.getElementById("button1").style.color = "white";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button4").style.color = "white";
    document.getElementById("button5").style.color = "white";
    document.getElementById("button6").style.color = "white";

}

function page4(){
  document.getElementById("page4").style.opacity = "100%";
  document.getElementById("page1").style.opacity = "0%";
  document.getElementById("page2").style.opacity = "0%";
  document.getElementById("page3").style.opacity = "0%";
  document.getElementById("page5").style.opacity = "0%";
  document.getElementById("page6").style.opacity = "0%";

  document.getElementById("button4").style.backgroundColor = "white";
  document.getElementById("button1").style.backgroundColor = "red";
  document.getElementById("button2").style.backgroundColor = "red";
  document.getElementById("button3").style.backgroundColor = "red";
  document.getElementById("button5").style.backgroundColor = "red";
  document.getElementById("button6").style.backgroundColor = "red";

  document.getElementById("button4").style.color = "red";
  document.getElementById("button1").style.color = "white";
  document.getElementById("button2").style.color = "white";
  document.getElementById("button3").style.color = "white";
  document.getElementById("button5").style.color = "white";
  document.getElementById("button6").style.color = "white";
}

function page5(){
  document.getElementById("page5").style.opacity = "100%";
  document.getElementById("page1").style.opacity = "0%";
  document.getElementById("page2").style.opacity = "0%";
  document.getElementById("page3").style.opacity = "0%";
  document.getElementById("page4").style.opacity = "0%";
  document.getElementById("page6").style.opacity = "0%";

  document.getElementById("button5").style.backgroundColor = "white";
  document.getElementById("button1").style.backgroundColor = "red";
  document.getElementById("button2").style.backgroundColor = "red";
  document.getElementById("button3").style.backgroundColor = "red";
  document.getElementById("button4").style.backgroundColor = "red";
  document.getElementById("button6").style.backgroundColor = "red";

  document.getElementById("button5").style.color = "red";
  document.getElementById("button1").style.color = "white";
  document.getElementById("button2").style.color = "white";
  document.getElementById("button3").style.color = "white";
  document.getElementById("button4").style.color = "white";
  document.getElementById("button6").style.color = "white";
}

function page6(){
  document.getElementById("page6").style.opacity = "100%";
  document.getElementById("page1").style.opacity = "0%";
  document.getElementById("page2").style.opacity = "0%";
  document.getElementById("page3").style.opacity = "0%";
  document.getElementById("page4").style.opacity = "0%";
  document.getElementById("page5").style.opacity = "0%";

  document.getElementById("button6").style.backgroundColor = "white";
  document.getElementById("button1").style.backgroundColor = "red";
  document.getElementById("button2").style.backgroundColor = "red";
  document.getElementById("button3").style.backgroundColor = "red";
  document.getElementById("button4").style.backgroundColor = "red";
  document.getElementById("button5").style.backgroundColor = "red";

  document.getElementById("button6").style.color = "red";
  document.getElementById("button1").style.color = "white";
  document.getElementById("button2").style.color = "white";
  document.getElementById("button3").style.color = "white";
  document.getElementById("button4").style.color = "white";
  document.getElementById("button5").style.color = "white";
}


        
        



var images = [
  
  "menudo.jpg",
  "restaurant.jpg",
  "background.jpg",
  
]

           


var imageHead = document.getElementById("img");


var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 4000);