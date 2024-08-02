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
    "Registration Form": `This project included designing a basic registration form that has the followinf functionalities
    <ul>
    <li>Form Structure: Design the structure of the registration form, which should include fields for user information.</li>
    <li>Validation: Implement validation to ensure that users provide appropriate information</li>
    <li>Responsive Design: Ensure the registration form is responsive and functions well on various screen sizes.</li>
    <li>Submission: Allow users to submit their registration information.</li>
    <li>Confirmation Page: Design a confirmation page or message to acknowledge successful registration.</li></ul>`,
    "To-Do List": `This project included designing a to-do list with local storage so that the data is retained even when the window is colsed.
    <ul>
    <li>1. Functionality: Users should be able to:
    <ul>
    <li>- Add new tasks.</li>
    <li>- Edit existing tasks.</li>
    <li>- Delete tasks.</li>
    <li>- Mark tasks as completed or uncompleted.</li>
    </ul></li>
    <li>2. Local Storage: Tasks should be stored locally so that they are retained even if the user closes the browser.</li>
    <li>3. User Interface: Focus on improving the user interface for a seamless and intuitive user experience.</li></ul>`,

    "E-Commerce website": `This website included buying of items depending on the user requirements. This also included the shopping list that shows the total items bought and total cost`,
  };

  const projectImages = {
    "Registration Form": ["registrationForm1.jpg", "registrationForm2.jpg"],
    "To-Do List": ["todoResult.jpg"],
    "E-Commerce website": [
      "ecommerce1.jpg",
      "ecommerce2.jpg",
      "ecommerce3.jpg",
    ],
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
