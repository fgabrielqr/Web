$(document).ready(function(){
    $('#matricula').mask('0000000');
});

$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
});

$(document).ready(function(){
    $('#data').mask('00/00/0000');
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
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