const gnb = document.getElementById('gnb');
const topBtn = document.querySelector('.top');
const scrollBtn1 = document.querySelector('.sec1_btn');
const scrollBtn2 = document.querySelector('.sec2_btn');
const scrollBtn3 = document.querySelector('.sec3_btn');

let lastScrollTop = 0; // 스크롤 위치 잡기

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop){ // 스크롤 방향을 설정하기 위해 조건문을 사용
    gnb.style.opacity = '0'; // 내리면 안보이게
  } else {
    gnb.style.opacity = '1'; // 올리면 보이게
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 현재 스크롤의 값이 0인지 아닌지 확인하기

  if (scrollTop > 200) { // 스크롤 위치가 200보다 크면
    topBtn.style.display = "block"; // 탑버튼 보이게
  } else {
    topBtn.style.display = "none"; // 아니면 숨기게
  }
});

function toSections(scroll_btn, sections) {
scroll_btn.addEventListener('click', function() {
  let section = document.querySelector(sections); // 각 섹션을 기준 잡고
  let position = section.getBoundingClientRect().top + window.scrollY;
  // 각 섹션의 top 위치를 뷰포트 기준으로 가져온 뒤 페이지의 top위치에서 부터 각 섹션의 top까지의 거리를 구하고
  window.scrollTo({ top: position, left: 0, behavior: 'smooth' }); // 부드럽게 이동하기
});
}
toSections(scrollBtn1, '.section2');
toSections(scrollBtn2, '.section3');
toSections(scrollBtn3, '.section4');

topBtn.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // 탑버튼 클릭시 최상단까지 부드럽게 이동하기
});

let acc = document.getElementsByClassName('acc_con1');
let thumbs = document.querySelectorAll('.thumb li');

for (let i = 0; i < acc.length; i++) { // 아코디언 메뉴의 버튼에 해당하는 acc_con1의 순서를 구하기
  acc[i].addEventListener('click', function() {
    for (let n = 0; n < acc.length; n++) { // 다시 한번 acc_con1의 순서를 구해서
      acc[n].nextElementSibling.classList.remove('slide');
      // 다른 acc_con1의 형제 요소들에게서 slide 클래스를 제거하고
      thumbs[n].classList.remove('on');
      // 아래에 아코디언 메뉴의 썸네일에서 on 클래스를 제거하기
    }
    this.nextElementSibling.classList.add('slide'); // 클릭한 acc_con1 형제 요소에게 slide 클래스 부여하기
    thumbs[i].classList.add('on'); // 인덱스 번호가 동일한 썸네일에게 on 클래스를 부여하기
  });
}

document.getElementById("tabMenu1").addEventListener("click", function() {
  openTab('menu1', this); // #tanMenu1을 클릭하면 menu1와 #tabMenu1에게 openTab을 실행하기
});
  
document.getElementById("tabMenu2").addEventListener("click", function() {
  openTab('menu2', this); // #tanMenu2을 클릭하면 menu2와 #tabMenu2에게 openTab을 실행하기
});

function openTab(act_tab, tab_item) {
  let i, tab_cons, tab_btns;
  tab_cons = document.getElementsByClassName("tab_con");
  for (i = 0; i < tab_cons.length; i++) { // 두 탭의 컨텐츠를
    tab_cons[i].style.display = "none"; // display: none; 으로 숨기기
  }
  tab_btns = document.getElementsByClassName("tab_btn");
  for (i = 0; i < tab_btns.length; i++) { // 두 탭의 배경색을
    tab_btns[i].style.backgroundColor = "#aaa"; // #aaa로 변경하기
  }
  document.getElementById(act_tab).style.display="block";
  // 해당 탭에 속하는 컨텐츠를 block 으로 보이게 하고
  tab_item.style.backgroundColor = "#333";
  // 해당 탭의 메뉴의 배경색은 #333으로 변경하기
}

document.getElementById("tabMenu1").click();
// 첫번째 텝메뉴가 선택되어 있게 하기