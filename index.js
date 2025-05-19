function formSubmission(){
  localStorage.firstName = document.querySelector("#firstName").value;
  localStorage.email = document.querySelector("#email").value;
  localStorage.phone = document.querySelector("#tel").value;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("multiform");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formSubmission();

    window.location.href = "./page2.html";
  });
});
