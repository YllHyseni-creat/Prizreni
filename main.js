
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

      
            const emri = document.getElementById("emri").value.trim();
            const email = document.getElementById("email").value.trim();
            const mesazhi = document.getElementById("mesazhi").value.trim();

            if (emri === "" || email === "" || mesazhi === "") {
                formMessage.style.color = "#ef8354";
                formMessage.textContent = "Ju lutem plotësoni të gjitha fushat!";
                return;
            }

            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.style.color = "#ef8354";
                formMessage.textContent = "Ju lutem shkruani një email të vlefshëm!";
                return;
            }

           
            formMessage.style.color = "#2d3142";
            formMessage.textContent = "Mesazhi u dërgua me sukses! Faleminderit që na kontaktuat.";

           
            form.reset();

           
            setTimeout(() => {
                formMessage.textContent = "";
            }, 4000);
        });
    }
});