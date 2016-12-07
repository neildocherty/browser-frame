// var min = document.querySelectorAll('.min');

toggleMinify(document.querySelectorAll('.min'));
toggleMaxify(document.querySelectorAll('.max'));
toggleDelify(document.querySelectorAll('.del'));

function toggleMinify(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {

      let browser = (this.parentElement.parentElement.parentElement);

      browser.classList.remove('maxified');

      if ( browser.classList.contains('minified') ) {
        browser.classList.remove('minified');
      }
      else {
        browser.classList.add('minified');
      }
      e.preventDefault();
    });
  };
}

function toggleMaxify(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {

      let browser = (this.parentElement.parentElement.parentElement);

      browser.classList.remove('minified');

      if ( browser.classList.contains('maxified') ) {
        browser.classList.remove('maxified');
      }
      else {
        browser.classList.add('maxified');
      }
      e.preventDefault();
    });
  };
}



function toggleDelify(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {

      this.parentElement.parentElement.parentElement.remove();

      e.preventDefault();
    });
  };
}
