// Load JSON + Render Cards
document.addEventListener("DOMContentLoaded", () => {

  // Load JSON file
  fetch("users.json")
    .then(res => res.json())
    .then(data => {
      
      // Compile Handlebars template
      const source = document.getElementById("card-template").innerHTML;
      const template = Handlebars.compile(source);

      // Render HTML
      const container = document.getElementById("cards-container");
      container.innerHTML = data.map(user => template(user)).join("");

      // Button click handlers
      container.querySelectorAll("[data-action]").forEach(btn => {
        btn.onclick = () => {
          alert(btn.dataset.action + " clicked for " + btn.dataset.id);
        };
      });
    });
});
