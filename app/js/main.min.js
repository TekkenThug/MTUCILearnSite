document.addEventListener("DOMContentLoaded", function() {
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
})