document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé !"); // 🔥 Vérifie si ce message apparaît dans la console

    function toggleSelection(event) {
        let element = event.target;
        console.log("Clic détecté sur :", element); // 🔥 Voir si un clic est bien détecté
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        } else {
            element.classList.add("selected");
        }
    }

    let images = document.querySelectorAll(".images img");
    let offers = document.querySelectorAll(".offer");

    images.forEach(img => img.addEventListener("click", toggleSelection));
    offers.forEach(offer => offer.addEventListener("click", toggleSelection));

    document.querySelector(".next-button").addEventListener("click", function () {
        alert("Prochaine étape !");
    });
});
