async function caricaCandidatura() {
    try {
        const response = await fetch("https://<username>.github.io/Documents/public/pdf_list.json");
        
        if (!response.ok) {
            throw new Error(`Errore nella risposta: ${response.status}`);
        }

        const files = await response.json();
        
        // Filtra e organizza i file PDF per sezione
        const sezione = document.getElementById("documenti-candidatura");
        const accordionEsterni = document.getElementById("accordion-esterni");
        const accordionInterni = document.getElementById("accordion-interni");

        files.forEach(file => {
            const link = document.createElement("a");
            link.href = `https://github.com/Byte-Your-Dreams/Documents/raw/main/${file.path}`;
            link.target = "_blank";
            link.classList.add("btn", "btn-link", "text-decoration-none", "d-block", "mb-2");
            link.textContent = file.name;

            if (file.folder === "Documenti Esterni") {
                accordionEsterni.appendChild(link);
            } else if (file.folder === "Documenti Interni") {
                accordionInterni.appendChild(link);
            } else {
                sezione.appendChild(link);
            }
        });
    } catch (error) {
        console.error("Errore nel caricamento o nel parsing del JSON:", error);
    }
}

caricaCandidatura();