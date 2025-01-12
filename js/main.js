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
  let tabItems = document.querySelectorAll('.js_tabPersonal_item')


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
      tabItems.forEach(el => {
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
// copy text 
(() => {
  let copyBtn = document.querySelectorAll(".js_connect_copy");
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
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = secundes;
      }
    }
    setInterval(counts, 1000);
  }
})();

// time dead line animation
(() => {
  let d = document.querySelector('#d2');
  let h = document.querySelector('#h2');
  let m = document.querySelector('#m2');
  let s = document.querySelector('#s2');

  let boxTime = document.querySelector('.js_carusel_time2');
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
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = secundes;
      }
    }
    setInterval(counts, 1000);
  }
})();

// time dead line animation
(() => {
  let d = document.querySelector('#d3');
  let h = document.querySelector('#h3');
  let m = document.querySelector('#m3');
  let s = document.querySelector('#s3');

  let boxTime = document.querySelector('.js_carusel_time3');
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
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = secundes;
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


// lk btn activate unstake
(() => {
  let unstakeBtn = document.querySelectorAll('.js_unstake');
  let unstakeBox = document.querySelector('.js_pop_clam');
  let unstaleClose = document.querySelector('.js_pop_clam_close');


  if (unstakeBtn) {
    for (let i = 0; i < unstakeBtn.length; i++) {
      unstakeBtn[i].addEventListener('click', function () {
        unstakeBox.classList.add('active');
      })
    }
  }
  if (unstaleClose) {
    unstaleClose.addEventListener('click', function () {
      unstakeBox.classList.remove('active');
    })
  }


})();

// lk btn activate refund
(() => {
  let refundBtn = document.querySelectorAll('.js_refund');
  let refundBox = document.querySelector('.js_pop_refund');
  let refundClose = document.querySelector('.js_pop_refund_close');


  if (refundBtn) {
    for (let i = 0; i < refundBtn.length; i++) {
      refundBtn[i].addEventListener('click', function () {
        refundBox.classList.add('active');
      })
    }
  }
  if (refundClose) {
    refundClose.addEventListener('click', function () {
      refundBox.classList.remove('active');
    })
  }

})();

// lk btn activate pay
(() => {
  let payBtn = document.querySelectorAll('.js_pay');
  let payBox = document.querySelector('.js_pop_pay');
  let payClose = document.querySelector('.js_pop_pay_close');


  if (payBtn) {
    for (let i = 0; i < payBtn.length; i++) {
      payBtn[i].addEventListener('click', function () {
        payBox.classList.add('active');
      })
    }
  }
  if (payClose) {
    payClose.addEventListener('click', function () {
      payBox.classList.remove('active');
    })
  }

})();

// lk btn activate coming
(() => {
  let comingBtn = document.querySelectorAll('.js_coming');
  let comingBox = document.querySelector('.js_pop_coming');
  let comingClose = document.querySelector('.js_pop_coming_close');


  if (comingBtn) {
    for (let i = 0; i < comingBtn.length; i++) {
      comingBtn[i].addEventListener('click', function () {
        comingBox.classList.add('active');
      })
    }
  }
  if (comingClose) {
    comingClose.addEventListener('click', function () {
      comingBox.classList.remove('active');
    })
  }

})();


// connect wallet
(() => {
  let connectBtn = document.querySelectorAll('.js_connect');
  let connectBox = document.querySelector('.js_pop_connect');
  let connectClose = document.querySelector('.js_pop_connect_close');


  if (connectBtn) {
    for (let i = 0; i < connectBtn.length; i++) {
      connectBtn[i].addEventListener('click', function () {
        connectBox.classList.add('active');
      })
    }
  }
  if (connectClose) {
    connectClose.addEventListener('click', function () {
      connectBox.classList.remove('active');
    })
  }

})();

// wallet language mobile
(() => {
  let qrBtn = document.querySelector('.js_pop_qr_mobile');
  let qrBox = document.querySelector('.js_connect_qr');
  
  if (qrBtn) {
      qrBtn.addEventListener('click', function () {
        qrBox.classList.toggle('active');
        this.classList.toggle('active')
      })
  }

})();

// language
(() => {
  let languageBtn = document.querySelector('.js_catalog_header_connect');
  let languageBox = document.querySelector('.js_catalog_header_connect_box');
  
  if (languageBtn) {
      languageBtn.addEventListener('click', function () {
        languageBox.classList.add('active');
      })
  }
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(languageBtn);
    const gambLk1 = e.composedPath().includes(languageBox);
    if (languageBtn) {
      if (!lkEl && !gambLk1) {
        languageBox.classList.remove('active');
      }
    }
  })

})();


// calculator
(() => {
  let plus = document.querySelector('#plus');
  let minus = document.querySelector('#minus');
  let sum = document.querySelector('#sum')
  
  if (plus) {
      plus.addEventListener('click', function () {
        let a = sum.innerHTML;
        sum.innerHTML = Number(a) + 1;
      })
  }

  if (minus) {
    minus.addEventListener('click', function () {
      let a = sum.innerHTML;
      sum.innerHTML = Number(a) - 1;
      if(Number(a) - 1 < 1 ){
        sum.innerHTML = 1;
      }
    })
}
})();


// buy tab
(() => {
  let sortBtn = document.querySelectorAll(".js_personal_tab");
  let tabBox = document.querySelectorAll('.js_card_buy_bottom_tab')

  if (sortBtn) {
    for (let i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener('click', function () {
        sortBtn.forEach(el => {
          el.classList.remove('active');
        });
        tabBox.forEach(el => {
          el.classList.remove('active');
        });
        
        tabBox[i].classList.add('active');
        this.classList.add('active');
      })
    }
  }

})();

