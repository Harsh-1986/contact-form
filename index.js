let form = document.querySelector("#contact");
console.log(form);
let msg = document.querySelector("#message");
console.log(msg);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value.trim();
  console.log(name);
  let email = document.querySelector("#email").value.trim();
  console.log(email);

  if (name && email) {
    msg.textContent = `Hi ${name}!, Your form has been received`;

    form.reset();
  }
});
