document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const appContent = document.querySelector(".appContent");
  const projectDetails = document.querySelector(".project-details");
  const projectImage = projectDetails.querySelector(".project-image");
  const projectTitle = projectDetails.querySelector("h2");
  const projectDescription = projectDetails.querySelector("p");
  const projectImagesContainer = projectDetails.querySelector(
    ".project-images-container"
  );
  const closeBtn = projectDetails.querySelector(".close-btn");

  const descriptions = {
    "Electric Vehicle usage analysis": `This project mainly focused on the usage of evectric vehicles of differrent buildand types. It also included the type of vehicleby make year. the main take aways of this project are:
    <ul>
    <li>The total number of electric vehicles manufactured</li>
    <li>The average kilometers run by the EV</li>
    <li>Top 10 vehicles by the models</li></ul>`,
    "Credit card analysis": `This project is based on how many people wereoffered the credit card and among them howmany have accepted the offer. The key takeaways of this project include:
    <ul>
    <li>Total number of bank accounts</li>
    <li>The total number of people who have accepted the offer.</li>
    <li>The quarterly income of all the card holders</li></ul>`,
  };

  const projectImages = {
    "Electric Vehicle usage analysis": ["electricVehicleResult.jpg"],
    "Credit card analysis": ["creditCardResult.jpg"],
  };

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const img = project.querySelector("img").src;
      const title = project.querySelector("h4").textContent;
      const description = descriptions[title] || "Description not available.";
      const images = projectImages[title] || [];

      projectImage.style.backgroundImage = `url(${img})`;
      projectTitle.textContent = title;
      projectDescription.innerHTML = description;

      // Clear previous images
      projectImagesContainer.innerHTML = "";
      // Add new images
      images.forEach((imageSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        projectImagesContainer.appendChild(imgElement);
      });

      appContent.classList.add("shifted");
      projectDetails.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    appContent.classList.remove("shifted");
    projectDetails.classList.remove("active");
  });
});
