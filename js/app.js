// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.querySelector("body");
//   cx = window.innerWidth / 2;
//   cy = window.innerHeight / 2;

//   body.addEventListener("mousemove", (e) => {
//     clientX = e.pageX;
//     clientY = e.pageY;

//     request = requestAnimationFrame(updateMe);
//   });
//   function updateMe() {
//     dx = clientX - cx;
//     dy = clientY - cy;
//     tiltx = dy / cy;
//     tilty = dx / cx;
//     radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
//     degree = radius * 12;
//     gsap.to(".home", 1, {
//       transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`,
//     });
//   }
// });

function scrollHeader() {
  let navbar = document.getElementById("navbar");
  if (this.scrollY >= 50) navbar.classList.add("scroll-header");
  else navbar.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

let newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: 1.3,
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

let partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 2,
  // centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
let partnersSwiper2 = new Swiper(".partnersSwiper2", {
  slidesPerView: 2,
  // centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

partnersSwiper.controller.control = partnersSwiper2;
partnersSwiper2.controller.control = partnersSwiper;

new Swiper(".buildSwiperFirst", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Swiper(".buildSwiperSecond", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  pagination: {
    el: ".page-2",
  },
  navigation: {
    nextEl: ".next-2",
    prevEl: ".prev-2",
  },
});
new Swiper(".buildSwiperThird", {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  speed: 1000,
  pagination: {
    el: ".page-3",
  },
  navigation: {
    nextEl: ".next-3",
    prevEl: ".prev-3",
  },
});
new Swiper(".buildSwiperFourth", {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  speed: 1000,
  pagination: {
    el: ".page-4",
  },
  navigation: {
    nextEl: ".next-4",
    prevEl: ".prev-4",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
new Swiper(".buildSwiperFive", {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 1000,
  pagination: {
    el: ".page-5",
  },
  navigation: {
    nextEl: ".next-5",
    prevEl: ".prev-5",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
mainLayout = document.getElementById("main");
let navToggle = document.getElementById("burger");
navClose = document.getElementById("x-japan");
navCollapse = document.getElementById("bottom");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navCollapse.classList.toggle("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navCollapse.classList.remove("show-menu");
  });
}

if (mainLayout) {
  mainLayout.addEventListener("click", () => {
    navCollapse.classList.remove("show-menu");
  });
}
let openBtn = document.getElementById("opener");
closeBtn = document.getElementById("closer");
activeUl = document.getElementById("active-ul");
hiddenUl = document.getElementById("hidden-ul");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    activeUl.classList.add("hide-ul");
    hiddenUl.classList.add("show-ul");

    activeUl.classList.remove("show-ul");
    hiddenUl.classList.remove("hide-ul");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    activeUl.classList.remove("hide-ul");
    hiddenUl.classList.remove("show-ul");

    activeUl.classList.add("show-ul");
    hiddenUl.classList.add("hide-ul");
  });
}

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]"),
  closers = document.querySelectorAll(".closer");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeUl = document.getElementById("active-ul");
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("show-ul");
    });
    target.classList.add("show-ul");
    target.classList.remove("hide-ul");
    activeUl.classList.add("hide-ul");

    closers.forEach((closer) => {
      closer.addEventListener("click", () => {
        tabContents.forEach((tabContent) => {
          tabContent.classList.add("hide-ul");
        });
        activeUl.classList.add("show-ul");
        activeUl.classList.remove("hide-ul");
      });
    });
  });
});

let count1 = document.getElementById("count-1");
let count2 = document.getElementById("count-2");
let count3 = document.getElementById("count-3");
let count4 = document.getElementById("count-4");

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 10, 16, 2000);
  counterAnim("#count2", 5000, 60, 1500);
  counterAnim("#count3", -1000, 6200, 2000);
  counterAnim("#count4", 50, 6, 2500);
});
AOS.init();

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
