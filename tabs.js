document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".panel-tabset > .panel-heading");
  const contents = document.querySelectorAll(".panel-tabset-content > div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  });
});
