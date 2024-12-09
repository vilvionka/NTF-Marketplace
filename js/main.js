(() => {

  let one = document.querySelector('.addition i.one');
  let too = document.querySelector('.addition i.too');
  let free = document.querySelector('.addition i.free');
  let foo = document.querySelector('.addition i.foo');
  let explanations = document.querySelectorAll('.addition i');
  let boxText = document.querySelector('.explanation_box');
  let box = document.querySelector('.explanation');


  for (let i = 0; i < explanations.length; i++) {
    explanations[i].addEventListener('click', function () {
      boxText.innerHTML = this.getAttribute('data-text');
      box.classList.add('active');
      box.style.top = this.getBoundingClientRect().top + window.pageYOffset + 'px';
      box.style.left = this.getBoundingClientRect().left + 'px';
      if (document.documentElement.clientWidth < 500) {
        box.style.left = '20px';
      }
    })
  }


  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(box);
    const gambLk1 = e.composedPath().includes(one);
    const gambLk2 = e.composedPath().includes(too);
    const gambLk3 = e.composedPath().includes(free);
    const gambLk4 = e.composedPath().includes(foo);
    if (box) {
      if (!lkEl && !gambLk1) {
        if (!lkEl && !gambLk2) {
          if (!lkEl && !gambLk3) {
            if (!lkEl && !gambLk4) {
              box.classList.remove('active');
            }
          }
        }
      }
    }
  })

})();

(() => {
  let inp = document.querySelectorAll('.js_catalog_header_form_box_input');
  if (inp) {
    for (let i = 0; i < inp.length; i++) {
      inp[i].addEventListener('focus', function () {
        console.log(this.closest('.js_catalog_header_form_box'));
        this.closest('.js_catalog_header_form_box').classList.add('active');
      });
      inp[i].addEventListener('blur', function () {
        this.closest('.js_catalog_header_form_box').classList.remove('active');
      });
    }
  }


})();