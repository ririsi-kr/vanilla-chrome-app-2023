const clock = document.querySelector('h2#clock');
//1.html의 h2 id인 clock이 무엇인지 선언한다.clock
// => 1. html 문서에서 id가 clock인 h2 element를 clock이라는 변수로 지정한다.
//시간을 나타낼때는 두가지 조건이 필요한다.

//2.함수 getClock를 만든다
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
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

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
