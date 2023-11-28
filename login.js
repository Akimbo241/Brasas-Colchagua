const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnLogIn = document.querySelector("#btnLogIn");

btnLogIn.addEventListener("click", async () => {
  const valueUsername = username.value;
  const valuePassword = password.value;
  const urlApiLogin = "https://colchagua.onrender.com/login";
  const res = await fetch(urlApiLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: valueUsername,
      password: valuePassword,
    }),
  });
  const response = await res.json();
  const { login } = response;
  if (login) {
    window.location.assign("/");
  } else {
    alert("Error al iniciar sesion");
  }
});
