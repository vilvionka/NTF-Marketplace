// i animation hidden and visible pop
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

// focus and blur input
(() => {
  let inp = document.querySelectorAll('.js_catalog_header_form_box_input');
  if (inp) {
    for (let i = 0; i < inp.length; i++) {
      inp[i].addEventListener('focus', function () {
        this.closest('.js_catalog_header_form_box').classList.add('active');
        if (this.closest('.js_standartForm_left')) {
          this.closest('.js_standartForm_left').classList.add('active');
        }
      });
      inp[i].addEventListener('blur', function () {
        this.closest('.js_catalog_header_form_box').classList.remove('active');
        if (this.closest('.js_standartForm_left')) {
          this.closest('.js_standartForm_left').classList.remove('active');
        }
      });
    }
  }
})();

// active box checkbox filter (checked)
(() => {
  let checkBox = document.querySelectorAll('.js_checkbox_catalog');

  if (checkBox) {
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener('click', function () {
        if (this.checked) {
          this.closest('.js_border_top').classList.add('active');
          this.closest('.js_border_left').classList.add('active');
        } else {
          this.closest('.js_border_top').classList.remove('active');
          this.closest('.js_border_left').classList.remove('active');
        }
      });

    }
  }
})();

//move pop card catalog NFT
(() => {
  let moveBox = document.querySelector('.js_move_pop');
  let moveBtns = document.querySelectorAll('.js_catalog_move');
  let close = document.querySelector('.js_pove_pop_item_close');

  for (let i = 0; i < moveBtns.length; i++) {
    if (moveBtns) {
      moveBtns[i].addEventListener('click', function () {
        moveBox.classList.add('active');
      })
    }
  }
  if (close) {
    close.addEventListener('click', function () {
      moveBox.classList.remove('active');
    })
  }
})();

// filter animation desctop
(() => {
  let filterBtn = document.querySelector('.js_catalog_control_filter');
  let filterBox = document.querySelector('.js_catalog_box_filter');
  let boxGeneral = document.querySelector('.js_catalog_box');
  let filterMobile = document.querySelector('.js_pop_filter')
  let filterBoxMobile = document.querySelector('.js_catalog_box_filter_mobile')

  if (filterBtn) {
    filterBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      boxGeneral.classList.toggle('filter');
      filterBox.classList.toggle('hidden');
      filterMobile.classList.add('active')
    })


    filterMobile.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(filterBoxMobile);
      if (!lkEl) {
        filterMobile.classList.remove('active');
      }
    })
  }
})();


// burger animation 
(() => {
  let burgerBtn = document.querySelector('.js_catalog_header_burger');
  let menuBox = document.querySelector('.js_menu_pop');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      menuBox.classList.toggle('active');
    })
  }
})();


// search animation mobile
(() => {
  let searchBtn = document.querySelector('.js_catalog_header_search');
  let searchBox = document.querySelector('.js_search_pop');
  let searchClose = document.querySelector('.js_search_pop_close')

  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      searchBox.classList.add('active');
    })
    searchClose.addEventListener('click', function () {
      searchBox.classList.remove('active');
    })
  }
})();

// sort animation 
(() => {
  let sortBtn = document.querySelector('.js_catalog_control_add');
  let sortBox = document.querySelector('.js_catalog_control_add_sort');


  if (sortBtn) {
    sortBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      sortBox.classList.toggle('active');
    })
  }
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(sortBtn);
    const gambLk1 = e.composedPath().includes(sortBox);
    if (sortBtn) {
      if (!lkEl && !gambLk1) {
        sortBox.classList.remove('active');
        sortBtn.classList.remove('active');
      }
    }
  })
})();

// lk balance animation 
(() => {
  let waletBtn = document.querySelector('.js_balance_btn');
  let waletBox = document.querySelector('.js_balance_walet');


  if (waletBtn) {
    waletBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      waletBox.classList.toggle('active');
    })
  }
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(waletBtn);
    const gambLk1 = e.composedPath().includes(waletBox);
    if (waletBtn) {
      if (!lkEl && !gambLk1) {
        waletBox.classList.remove('active');
        waletBtn.classList.remove('active');
      }
    }
  })
})();

// lk_switch animation
(() => {
  let switchBtn = document.querySelector('.js_switch_btn');
  let switchMarkers = document.querySelectorAll('.js_personal_marker');


  if (switchBtn) {
    switchBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      switchMarkers.forEach(el => {
        if (el.classList.contains('active')) {
          el.classList.remove('active')
        } else {
          el.classList.add('active')
        }
      });
    })
  }

})();


// more text animation 
(() => {
  let moreTextBox = document.querySelector('.js_more_text_box');
  let moreTextBtn = document.querySelector('.js_more_text_btn');


  if (moreTextBtn) {
    moreTextBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      moreTextBox.classList.toggle('active');
      if (moreTextBtn.classList.contains('active')) {
        this.innerHTML = 'Collapse';
      } else {
        this.innerHTML = 'Show more';
      }
    })
  }

})();


// copy text 
(() => {
  let copyBtn = document.querySelectorAll(".js_copy_btn");
  for (let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener("click", function () {
      navigator.clipboard.writeText(this.previousElementSibling.innerText).then(function () {
      }).catch(function (error) {
      });
    });
  }

})();

// time dead line animation
(() => {
  let d = document.querySelector('#d');
  let h = document.querySelector('#h');
  let m = document.querySelector('#m');
  let s = document.querySelector('#s');

  // let dNext = document.querySelector('.day p');
  // let hNext = document.querySelector('.hour p');
  // let mNext = document.querySelector('.minute p');
  // let sNext = document.querySelector('.sec p');

  let boxTime = document.querySelector('.js_carusel_time');
  if (boxTime) {
    let deadLine = boxTime.getAttribute('data-time');
    let date = new Date(deadLine);



    function counts() {
      let now = new Date();
      gap = date - now;

      let days = Math.floor(gap / 1000 / 60 / 60 / 24);
      let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(gap / 1000 / 60) % 60;
      let secundes = Math.floor(gap / 1000) % 60;

      if (gap < 0) {
        boxTime.classList.add('hidden');
      } else {
        d.innerHTML = days;
        //   dNext.innerHTML = days - 1;

        h.innerHTML = hours;
        //    let nextHours;
        //   if(hours - 1 < 0){
        //     nextHours = 23;
        //   }else{
        //    nextHours = hours - 1;
        //   }
        //   hNext.innerHTML = nextHours;

        m.innerHTML = minutes;
        //  let nextMinute;
        //  if(minutes - 1 < 0){
        //    nextMinute = 59;
        //  }else{
        //    nextMinute = minutes - 1;
        //  }
        //  mNext.innerHTML = nextMinute;

        s.innerHTML = secundes;
        //  let nextSec;
        //  if(secundes - 1 < 0){
        //    nextSec = 59;
        //  }else{
        //    nextSec = secundes - 1;
        // }
        //  sNext.innerHTML = nextSec;
      }
    }

    setInterval(counts, 1000);
  }
})();

// tab form
(() => {
  let tabBtn = document.querySelectorAll(".js_tab_btn");
  let tabBox = document.querySelectorAll(".js_tab_box");

  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function () {
      tabBtn.forEach(el => {
        el.classList.remove('active');
      });
      this.classList.add('active');
      tabBox.forEach(el => {
        el.classList.remove('active')
      });
      tabBox[i].classList.add('active');
    })
  }

})();
// personal sort animation
(() => {
  let sortBtn = document.querySelectorAll(".js_personal_sort");

  if (sortBtn) {
    for (let i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener('click', function () {
        sortBtn.forEach(el => {
          el.classList.remove('active');
        });
        this.classList.add('active')
      })
    }
  }

})();
// personal sort animation
(() => {
  let sortBtn = document.querySelectorAll(".js_personal_sort_new");

  if (sortBtn) {
    for (let i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener('click', function () {
        sortBtn.forEach(el => {
          el.classList.remove('active');
        });
        this.classList.add('active')
      })
    }
  }

})();

// add input
(() => {
  let btnInput = document.querySelectorAll('.js_add_btn');
  let boxInput = document.querySelectorAll('.js_add_box');

  if (btnInput) {
    for (let i = 0; i < btnInput.length; i++) {
      btnInput[i].addEventListener('click', function () {
        let boxEl = document.createElement('div');
        let boxEl2 = document.createElement('div');
        let spanEl = document.createElement('span');
        let inpEl = document.createElement('input');
        let iEl = document.createElement('i');

        let spanElText = document.createTextNode("Type");
        spanEl.appendChild(spanElText);

        inpEl.setAttribute("placeholder", "Meaning");
        inpEl.setAttribute("type", "text");

        boxEl.classList.add('standartForm_box_item_add_box_item', 'border_top_botoom', 'js_catalog_header_form_box');
        boxEl2.classList.add('standartForm_box_item_add_box_item', 'border_left_right', 'js_standartForm_left');
        inpEl.classList.add('js_catalog_header_form_box_input');
        boxEl2.appendChild(spanEl);
        boxEl2.appendChild(inpEl);
        boxEl2.appendChild(iEl);
        boxEl.appendChild(boxEl2);
        this.previousElementSibling.appendChild(boxEl);
      })
    }
  }

  if (boxInput) {
    for (let i = 0; i < boxInput.length; i++) {
      boxInput[i].addEventListener('click', function (e) {
        const target = e.target.closest('i');
        if (!target) return;
        target.closest('.js_catalog_header_form_box').classList.add('none');
      })
    }
  }
})();

// add input link
(() => {
  let btnInput = document.querySelectorAll('.js_add_btn_link');
  let boxInput = document.querySelectorAll('.js_add_box');

  if (btnInput) {
    for (let i = 0; i < btnInput.length; i++) {
      btnInput[i].addEventListener('click', function () {
        let boxEl = document.createElement('div');
        let boxEl2 = document.createElement('div');
        let inpEl2 = document.createElement('input');
        let inpEl = document.createElement('input');
        let iEl = document.createElement('i');

        inpEl2.setAttribute("placeholder", "name");
        inpEl2.setAttribute("type", "text");

        inpEl.setAttribute("placeholder", "You link");
        inpEl.setAttribute("type", "text");

        boxEl.classList.add('standartForm_box_item_add_box_item', 'border_top_botoom', 'js_catalog_header_form_box');
        boxEl2.classList.add('standartForm_box_item_add_box_item', 'border_left_right', 'js_standartForm_left');
        inpEl2.classList.add('standartForm_box_item_add_name');
        inpEl.classList.add('standartForm_box_item_add_link');
        boxEl2.appendChild(inpEl2);
        boxEl2.appendChild(inpEl);
        boxEl2.appendChild(iEl);
        boxEl.appendChild(boxEl2);
        this.previousElementSibling.appendChild(boxEl);
      })
    }
  }

  if (boxInput) {
    for (let i = 0; i < boxInput.length; i++) {
      boxInput[i].addEventListener('click', function (e) {
        const target = e.target.closest('i');
        if (!target) return;
        target.closest('.js_catalog_header_form_box').classList.add('none');
      })
    }
  }
})();

// support too drop files
(() => {

  let boxDrop = document.querySelectorAll('.js_download_box');
  //let fileLabelText = document.querySelector('.js_support_complaint_box_fiel1');
  let inpAddFile = document.querySelectorAll('.js_download_inp');
  let droppedFiles;

  if (boxDrop) {
    for (let i = 0; i < boxDrop.length; i++) {
      boxDrop[i].addEventListener('dragover', fileHover);
      boxDrop[i].addEventListener('dragenter', fileHover);
      boxDrop[i].addEventListener('dragleave', fileHoverEnd);
      boxDrop[i].addEventListener('drop', function (e) {
        fileHoverEnd(e);
        let el = this.querySelector('span');
        droppedFiles = e.dataTransfer.files;
        showFiles(droppedFiles, el);
      });
    }
    for (let i = 0; i < inpAddFile.length; i++) {
      inpAddFile[i].addEventListener('change', function (e) {
        let el = this.closest('.js_download_box').querySelector('span')
        droppedFiles = e.target.files;
        showFiles(droppedFiles, el);
      });
    }
    function overrideDefault(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    function fileHover(e) {
      overrideDefault(e);
      //this.classList.add('active');
    }

    function fileHoverEnd(e) {
      overrideDefault(e);
      //this.classList.remove('active');
    }




    function showFiles(files, el) {
      if (files.length > 1) {
        el.innerText = files.length + ' ' + 'файла загружено';
      } else {
        el.innerText = files[0].name;
      }
    }
  }
})();
