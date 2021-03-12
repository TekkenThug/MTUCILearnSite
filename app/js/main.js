document.addEventListener("DOMContentLoaded", function() {
  // Tabs
  const tabs = document.querySelectorAll(".header__login-tab");
  activingTabs(tabs);
  function activingTabs(tabsLink) {
    tabsLink.forEach(elem => {
      elem.addEventListener("click", function(e) {
        e.preventDefault();

        if (!elem.classList.contains("active") && !elem.classList.contains("disabled")) {
          tabsLink.forEach(removerElem => {removerElem.classList.remove("active")});
          elem.classList.add("active");
        }
      })
    });
  }

  // Login 
  const loginForm = document.querySelector(".header__login-form");

  loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const login = loginForm.querySelector("input[name='login']").value.trim(),
          password = loginForm.querySelector("input[name='password']").value.trim(),
          msgErrorLogin = loginForm.querySelector(".msg-error.login"),
          msgErrorPassword = loginForm.querySelector(".msg-error.password"),
          msgErrorForm = loginForm.querySelector(".msg-error.form");

    msgErrorLogin.innerHTML = msgErrorPassword.innerHTML = msgErrorForm.innerHTML = "";

    if (login === "") {
      msgErrorLogin.innerHTML = "Введите логин";
    } else if (password === "") {
      msgErrorPassword.innerHTML = "Введите пароль";
    } else {
      const requestBody = JSON.stringify({login: login, password: password});
      const request = await fetch("./vendor/auth.php", {
        method: "POST",
        headers: {
          'Content-type': 'application/json;charset=utf-8'
        },
        body: requestBody
      });

      const response = await request.json();

      if (!response.status) {
        msgErrorForm.innerHTML = "Ошибка, проверьте правильность данных";
      }
    }
  })
})