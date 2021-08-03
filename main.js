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



  function changeLanguageSpanish(){
    document.getElementById("nav-contact").innerHTML = "contacto";
    document.getElementById("contact-us").innerHTML = "Contactanos!";
    document.getElementById("contact-us2").innerHTML = "Contactanos!";
    document.getElementById("subtext").innerHTML = "Mariscos y comida mexicana fresca";
    document.getElementById("yelp-page").innerHTML = "Pagina de Yelp";
    document.getElementById("view-menu").innerHTML = "Ver Menu";
    document.getElementById("business-hours").innerHTML = "Horas de operacion:";
    document.getElementById("mensaje").innerHTML = "Mensaje:";
    document.getElementById("directions").innerHTML = "Direcciones:";

    document.getElementById("monday").innerHTML = "Lunes: 8-9pm";
    document.getElementById("tuesday").innerHTML = "Martes: 8-9pm";
    document.getElementById("wednesday").innerHTML = "Miercoles: 8-9pm";
    document.getElementById("thursday").innerHTML = "Jueves: 8-9pm";
    document.getElementById("friday").innerHTML = "Viernes: 7-9pm";
    document.getElementById("sat-sun").innerHTML = "Sabado/Domingo: 7-9pm";
    document.getElementById("my-form-button").innerHTML = "Enviar";
    document.getElementById("phone").innerHTML = "Numero de Telefono: (951) 352-3214";
    document.getElementById("email").innerHTML = "Correo Electronico: clindoriverside@gmail.com"

  }

  function changeLanguageEnglish(){
    document.getElementById("nav-contact").innerHTML = "Contact";
    document.getElementById("contact-us").innerHTML = "Contact us!";
    document.getElementById("contact-us2").innerHTML = "Contact us!";
    document.getElementById("subtext").innerHTML = "Fresh Mexican food and Seafood";
    document.getElementById("yelp-page").innerHTML = "Yelp page";
    document.getElementById("view-menu").innerHTML = "View Menu";
    document.getElementById("business-hours").innerHTML = "Business Hours:";
    document.getElementById("mensaje").innerHTML = "Message:";
    document.getElementById("my-form-button").innerHTML = "Submit";
    document.getElementById("directions").innerHTML = "Directions";
    document.getElementById("email").innerHTML = "Email: clindoriverside@gmail.com"


    document.getElementById("monday").innerHTML = "Monday: 8-9pm"
    document.getElementById("tuesday").innerHTML = "Tuesday: 8-9pm"
    document.getElementById("wednesday").innerHTML = "Wednesday: 8-9pm"
    document.getElementById("thursday").innerHTML = "Thursday: 8-9pm"
    document.getElementById("friday").innerHTML = "Friday: 7-9pm"
    document.getElementById("sat-sun").innerHTML = "Sat/Sun: 7-9pm"
    document.getElementById("phone").innerHTML = "Phone number: (951) 352-3214";

  }
        



var images = [
  
  "menudoUpdated.jpeg",
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




           

