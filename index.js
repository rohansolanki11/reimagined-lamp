function formSubmission(){
  localStorage.firstName = document.querySelector("#firstName").value;
  localStorage.email = document.querySelector("#email").value;
  localStorage.phone = document.querySelector("#tel").value;
}

document.querySelector("#submitBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  formSubmission();
  window.location.href = "./page2.html";
})