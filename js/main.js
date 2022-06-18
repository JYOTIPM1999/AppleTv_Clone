const selectElement = (element) => document.querySelector(element);
selectElement(".mobile-menu").addEventListener("clicl",() => {
    selectElement("header").classList.toggle("active");
})