function Openquiz(){
  let l = new XMLHttpRequest;
    l.onreadystatechange = function () {
      l.readyState === XMLHttpRequest.DONE && (200 === l.status ? t.innerHTML = l.responseText : console.error("Error:", l.status))
    }, l.open("GET", e, !0), l.send()
}


let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", function () {
  let e = document.querySelector(".nav-bar"),
    t = window.pageYOffset;
    e.classList.remove('naver');
  window.innerWidth <= 768 && 
  (t > prevScrollPos ? e.classList.add("naver") : e.classList.remove("naver"), prevScrollPos = t)
});




const togglenavMiddleF = document.getElementById("togglenavMiddle"),
  leftSSidebar = document.querySelector(".left-sidebar"),
  mainContent = document.querySelector(".Main-content");
togglenavMiddleF.addEventListener("click", function () {
  leftSSidebar.classList.toggle("leftToggle"), mainContent.classList.toggle("Mainer")
});
const togglenavMiddle2 = document.getElementById("togglenavMiddle2"),
  leftSidebar = document.querySelector(".left-sidebar"),
  dropsdown1 = document.querySelector(".dropsdown");
togglenavMiddle2.addEventListener("click", function () {
  document.getElementById("modal").classList.toggle("modalDisplay"), dropsdown1.classList.toggle("dropsdownToggle")
});
const togglenavMiddle = document.getElementById("togglenavMiddle"),
  navMiddleUl = document.querySelector(".dropsdown");
togglenavMiddle.addEventListener("click", function () {
  navMiddleUl.classList.add("navMiddleUlToggle");
  let e = document.getElementById("modal");
  e.classList.add("modalDisplay")
});
const modal1 = document.getElementById("modal");
modal1.addEventListener("click", function () {
  navMiddleUl.classList.remove("dropsdownToggle"), modal1.classList.remove("modalDisplay");
  let e = document.querySelector(".left-sidebar");
  e.classList.remove("lefttoggle768px") && e.classList.add("lefttoggle768px")
});
const TopicsLink = document.getElementById("TopicsLink");
TopicsLink.addEventListener("click", () => {
  document.querySelector(".left-sidebar").classList.add("lefttoggle768px"), document.querySelector(".dropsdown").classList.remove("dropsdownToggle")
});
let chevron = document.querySelector(".chevron");
chevron.addEventListener("click", function () {
  document.querySelector(".left-sidebar").classList.remove("lefttoggle768px"), navMiddleUl.classList.add("dropsdownToggle")
});
const SearchInput = document.getElementById("SearchInput"),
  SearchIcon = document.getElementById("topSvg");
SearchIcon.addEventListener("click", function () {
  SearchInput.classList.toggle("Tactive")
});
const nominalGroup = document.querySelectorAll(".topic1-content p");
nominalGroup.forEach(e => {
  e.addEventListener("click", function () {
    let t = e.getAttribute("data-section"),
      l = e.getAttribute("data-para"),
      o = document.querySelector(l);
    o.classList.add("highlight"), setTimeout(() => {
      o.classList.remove("highlight")
    }, 5e3), document.querySelector(t).scrollIntoView({
      behavior: "smooth"
    })
  })
});
const topic1Plus = document.getElementById("topic1Plus");

function filterList() {
  let e = document.querySelector("#search-input"),
    t = e.value.toLowerCase(),
    l = document.querySelectorAll(".topics a");
  l.forEach(e => {
    e.textContent.toLowerCase().includes(t.toLowerCase()) ? e.style.display = "" : e.style.display = "none"
  })
}

topic1Plus.addEventListener("click", () => {
  document.querySelector(".topic1-content").classList.toggle("topic1-content-toggle")
}), window.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelectorAll(".topics a"),
    t = document.getElementById("Main-content"),
    l = document.querySelectorAll("#home-link, .home-link"),
    o = t.innerHTML;

const hrefs = [
  'The Nominal Group.html',
]

e.forEach((a, i)=>{
  a.addEventListener('click', ()=>{
    if(i < hrefs.length){
      a.href = hrefs[i];
    }

  });
});


  function n(e) {
    let l = new XMLHttpRequest;
    l.onreadystatechange = function () {
      l.readyState === XMLHttpRequest.DONE && (200 === l.status ? t.innerHTML = l.responseText : console.error("Error:", l.status))
    }, l.open("GET", e, !0), l.send()
  }

e.forEach(t =>{
  t.addEventListener('contextmenu', (q)=>{
q.preventDefault();
  })
})

  e.forEach(e => {
    e.addEventListener("click", t => {
      t.preventDefault();
      let l = e.getAttribute("href");
      n(l)
    })
  }), l.forEach(e => {
    e.addEventListener("click", e => {
      e.preventDefault(), t.innerHTML = o

    })
  })
}), document.querySelector("#search-input").addEventListener("input", filterList), document.querySelector("#searchSpanclose").addEventListener("click", () => {
  let e = document.querySelector("#search-input");
  e.value = "";
  let t = document.querySelectorAll(".topics a");
  t.forEach(e => {
    "none" === e.style.display && (e.style.display = "")
  })
});

function eL(divClass, nextSibling) {
  divs = document.getElementById(divClass);
  siblingS = document.getElementById(nextSibling);

  divs.addEventListener('mouseover', () => {
    siblingS.classList.add('contentBelow-width')
  })
  divs.addEventListener('mouseout', () => {
    siblingS.classList.remove('contentBelow-width')
  })
}

function e1() {
  eL('eF', 'cC');
}

function e2() {
  eL('eA', 'cA');
}

function e3() {
  eL('eG', 'cB');
}

function e4() {
  eL('eX', 'cU');
}


function showTable(g) {
  if (g.innerHTML === 'Click to view Table') {
    g.innerHTML = 'Click to close Table'
    document.querySelector('.loader').classList.add('loadershow');
    setTimeout(function () {
      document.querySelector('.loader').classList.remove('loadershow');
      document.querySelector('.table1oga').classList.toggle('table1ogaTgg');
    }, 2000);
  } else {
    g.innerHTML = 'Click to view Table'
    document.querySelector('.loader').classList.remove('loadershow');
    document.querySelector('.table1oga').classList.toggle('table1ogaTgg');
  }

}

let scrollsvg = document.querySelector('.scrollsvg');


 scrollsvg.addEventListener('click', ()=>{
  window.scrollTo({ top: 0, behavior: 'smooth'})
 });

window.addEventListener('scroll', ()=>{
 scrollsvg.classList.add('scsvg');
 setTimeout(()=>{
scrollsvg.classList.remove('scsvg');
 }, 5000);
});
 