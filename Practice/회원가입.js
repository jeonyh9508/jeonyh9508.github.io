// 아이디 : /^[a-zA-Z][a-zA-Z0-9]{3,11}$/
// 비밀번호 : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/
// 이름 : /^[가-힣]{2,}$/
// 이메일 : /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/
// 전화번호 : /^010-\d{4}-\d{4}$/

//아이디 : 영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내
//비밀번호 : 영문자, 숫자, 특수문자 조합으로 8~15자 이내
//비밀번호 확인 : 위 비밀번호와 동일하게
//이름 : 한글 2자 이상
//이메일 : 이메일 형식
//전화번호 : 전화번호 형식

const userId = document.querySelector("#userId");
const idCheck = document.querySelector(".userId");
const pw = document.querySelector("#pw");
const pwCheck = document.querySelector(".pw");
const pwc = document.querySelector("#pwc");
const pwcCheck = document.querySelector(".pwc");
const userName = document.querySelector("#userName");
const userNameCheck = document.querySelector(".userName");
const mail = document.querySelector("#mail");
const mailCheck = document.querySelector(".mail");
const tel = document.querySelector("#tel");
const telCheck = document.querySelector(".tel");

userId.addEventListener("input", (e) => {
  const idExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  console.log(idExp.test(e.target.value));
  if (idExp.test(e.target.value)) {
    idCheck.innerHTML = "확인";
    idCheck.style.color = "green";
  } else if (e.target.value === "") {
    idCheck.innerHTML = "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내";
    idCheck.style.color = "black";
  } else {
    idCheck.innerHTML = "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내";
    idCheck.style.color = "red";
  }
});
