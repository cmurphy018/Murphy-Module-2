document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(images => {
            const gallery = document.getElementById("gallery");

            images.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image.imageURL;
                imgElement.alt = image.title;
                imgElement.title = image.title;

                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error loading images:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(images => {
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Clears existing images to prevent duplicates

            images.forEach(image => {
                // Create container for image and overlay
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("image-container");

                // Create image element
                const imgElement = document.createElement("img");
                imgElement.src = image.imageURL;
                imgElement.alt = image.title;
                
                // Create overlay div
                const overlay = document.createElement("div");
                overlay.classList.add("overlay");
                overlay.innerHTML = `
                    <h3>${image.title}</h3>
                    <p><strong>Artist:</strong> ${image.artist}</p>
                    <p><strong>Place:</strong> ${image.place}</p>
                    <p><strong>Year:</strong> ${image.year}</p>
                `;

                // Append elements
                imageContainer.appendChild(imgElement);
                imageContainer.appendChild(overlay);
                gallery.appendChild(imageContainer);
            });
        })
        .catch(error => console.error("Error loading images:", error));
});