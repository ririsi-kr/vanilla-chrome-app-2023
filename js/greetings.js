const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
//1. querySelector를 사용하여 html의 id 위치 선언하기
// document의 함수 중에는 getElementById 라는 함수가 있는데, 이 함수가 HTML에서 id를 통해 element를 찾아준다.
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KYE = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWorte = loginInput.value;
  localStorage.setItem(USERNAME_KYE, usernameThatTheUserWorte);
  paintGreetings(usernameThatTheUserWorte);
}

function paintGreetings(username) {
  greeting.innerText = `Hi, ${username} 🤍`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);
//3.
//[addEventListener]은 document의 특정요소 (Id,class,tag 등등..)event
//(ex - click하면 함수를 실행하라, 마우스를 올리면 함수를 실행하라 등등.. )를 등록할 때 사용
//[submit]는 서버의 폼 핸들러(form handler)로 폼 데이터(form date)를 전송하는 제출 버튼(submit button)을 정의합니다.
//*submit는 제출을 누르면 새로고침이 된다.

const savedUsername = localStorage.getItem(USERNAME_KYE);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
