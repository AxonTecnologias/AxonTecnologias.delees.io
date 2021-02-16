(function() {

  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);




})();



function sendMail() {
    window.alert("EnteR!");
    var link = "mailto:address@server.com?"
             + "subject=" + "Requiero servicio de Delees"
             + "&body=" + "Nombre: " + document.getElementById("validateName").value + "." + "%0D%0A" +
                          "Email: " + document.getElementById("validateName").value + "." + "%0D%0A" +
                          "Teléfono: " + document.getElementById("validatePhone").value + "." + "%0D%0A" +
                          "Municipio: " + document.getElementById("validateCounty").value + "." + "%0D%0A" +
                          document.getElementById('validateMessage').value;

    window.location.href = link;
}
