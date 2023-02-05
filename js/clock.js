const clock = document.querySelector("h2#clock");
//? 1. html에 시계가 들어갈 위치 태그에 아이디를 부여하고 그 아이디를 js에 가져와 이름을 선어해준다.
//   #clock 아이디만 사용할 수 있고 2. 겟엘레먼트바이아이디("clock"을 사용할 수도 있다.)

//todo #5.0 setInterval
//clock.innerText = "hahaha";
//clock이 잘 연결됐는지 innerText를 사용해 출력해볼 수 있다.

// interval와 timeout에 대해 먼저 알아야 한다.
// interval: interval은 '매번' 일어나야 하는 무언가를 말한다. ex) 매 2초마다 무언가 실행

//setInterval는 두개의 argument를 받는다.
// 1. 실행하고자 하는 function
// 2. 호출되는 function 간격을 몇 ms(milliseconds: 1s는 1000ms)로 할지
// ex)"Hello를 5초 마다 출력해줘
// 코드: function sayHello() {
//      console.log("Hello");
// setInterval(sayHello, 5000);
//! setInterval:일정한 간격으로 실행시키기: setInterval(함수이름, 몇초 단위로 출력할지 ms)

//todo #5.1 setTimeout
//1. 먼저 호출하려는 함수를 넣는다.
//2. 얼마나 기다릴지 ms 단위로 넣는다.
//! setTimeout: 일정한 시간 뒤에 실행시키기: setTimeout(함수이름, 몇초 후에 실행할지 ms)

//todo "Date"
//! new Date() 는 오늘의 날짜와 현시간을 가져온다.
//* const로 date = new Date()를 선언해준 뒤에 아래의 입력값을 실행해야 정상적인 현시간이 출력된다.
//* new Date()로 나온 현재시간.getHours()
// date.getDate()는 오늘 일자 date.getDay()는 오늘 요일/ date.getFullYear은 현재 년도
// getHours, getMinutes 등을 사용할 수 있다.

//? 2. 현재 날짜와 시간을 가서와서 실행할 함수를 만든다.
function getClock() {
  const date = new Date();
  //4.현재 시간을 나타내줄 new Date() 선언하기
  // => 4.현재 시간을 나타내줄 new Date() 를 date 라는 이름의 변수로 선언하기

  // String : 안에 있는 값을 string으로 바꿔준다.
  // date.getHours : 현재 시간에서 '시'를 number로 보여줌.
  //따라서 이걸 감쌌으니까 현재 '시'가 문자가 됨.

  // padStart(2, "0") : 만약 주어진 string 이 "1"일 경우, 이렇게 붙이면 "01" 이 됨.

  //padStart는 (2-몇자리인지 숫자로, "-string")을 입력해야하기때문에 시,분,초를 모두 string으로 감싸줘야한다.
  // => padStart는 string 자료형에만 사용할 수 있는 함수이기 때문에,
  //date.getHours() 를 통해 얻은 number를 String으로 감싸줌으로써 string 자료형으로 변환해주어야 한다.
  // => padStart와 string 자료형에 대한 구체적은 설명은 study/string.js 를 참고!
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //5. 각 시,분,초를 string으로 감싸고 padStart을 0* 두자리로 선언하기
  // 백틱(``)을 사용했다. 백틱은 ${} 이거를 사용하기 위함. 따옴표면 안됨!
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  //6. html의 H2 id인 clock에 들어갈 내용 넣기
  //innerText 안의 입력값을 리턴한다/ 선언한 이름.innerText = `${}`
}

getClock();
//6.처음 화면에 1초 뒤부터 시간이 보여지기 때문에 먼저 newDate() 시간을 한번 띄워준 후에 함수가 작동하게 설정한다.
setInterval(getClock, 1000);
//3.setInterval은 시간을 지정하여 그 간격으로 계속 리턴해주는 명령어이다.
// => 3.setInterval은 시간을 지정하여 그 간격으로 계속 주어진 함수를 실행하는 함수이다.

//setInterval(나타낼것, 시간의 간격을 숫자로
// => setInterval(실행하고자 하는 함수, 시간의 간격(숫자))

// setInterval과 setTimeout 차이
//지정한 시간간격으로 보여주기 / 지정한 시간후에 나타내기
// => setInterval : 지정한 시간간격으로 주어진 함수를 실행하기
// => setTimeout : 지정한 시간후에 주어진 함수를 실행하기

//? 8. 그 다음 매 1초마다 시간값 실행하기

// 현재시간이 시,분,초 단위로 매 1초 단위로 출력되고 있지만 두가지 문제가 있다.
// (1). 한자릿숫일때 1,2,3...으로 출력되는 것 01,02,03.. 같이 두자릿수로 출력되야한다.
// (2). 출력을 시작할때 1초 setInterval로 입력값을 불러오기 때문에 1초 후 부터 입력값이 출력 된다.
//    -> 웹사이트가 로드되자마자 즉시 getClock()를 실행되기를 원한다.
//       (=1초 뒤가 아닌 페이지를 실행하는 0초 시작부터 시간이 실행되기를 원한다.)

//todo #5.2 padStart
//(2)를 해결하기 위해서는 padStart()을 사용하면 된다.
//padStart()는 string에 쓸 수 있는 함수 이다.
//! 형식:padStart(몇자리수, "만약 길이가 되지 않을때 앞쪽에 추가될 string")
//! padStart를 사용할땐 string형식만 사용 가능하기때문에 숫자일 경우, string()으로 감싸서 변경해줘야한다.
// "padEnd"는 반대로 만약 길이가 되지 않을때 뒤쪽에 추가하는 명령어이다.
