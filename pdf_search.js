async function caricaCandidatura() {
    const response = await fetch("https://raw.githubusercontent.com/Byte-Your-Dreams/Documents/main/public/pdf_list.json");
    const files = await response.json();

    const sezione = document.getElementById("documenti-candidatura");
    files.forEach(file => {
        if (file.path.startsWith("Documents/")) {
            const link = document.createElement("a");
            link.href = `https://raw.githubusercontent.com/Byte-Your-Dreams/Documents/main/${file.path}`;
            link.target = "_blank";
            link.classList.add("btn", "btn-link", "text-decoration-none", "d-block", "mb-2");
            link.textContent = file.name;

            sezione.appendChild(link);
        }
    });
}

caricaCandidatura();