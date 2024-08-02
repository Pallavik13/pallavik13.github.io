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
    "Student database management": `This project involved developing a mobile-friendly application for managing the student database with Oracle database connectivity.
      The main key points of this project are:
      <ul>
        <li>The student registration can be done easily.</li>
        <li>Updating the student details is easy such as fees.</li>
        <li>Updating marks scored by the student.</li>
        <li>Viewing the total number of installments the fees is paid in.</li>
        <li>The number of times the student has attempted the exam and marks in each attempt.</li>
      </ul>`,
    "Examination seat allotment": `Developed an innovative Android application named RYMEC QPilotX for efficient student exam seat allotment. The app automates the seat allocation process, ensuring fair distribution and optimal utilization of exam hall space.Key features include
      <ul>
      <li>user-friendly interfaces for administrators to manage seat allotments</li>
      <li>real-time updates for students</li>
      <li>and secure data handling to maintain confidentiality</li>
      </ul>Successfully implemented and tested in a real-world academic environment, RYMEC QPilotX significantly streamlines the exam preparation process, enhancing both administrative efficiency and student experience.`,
  };

  const projectImages = {
    "Student database management": [
      "student1.jpg",
      "student2.jpg",
      "student3.jpg",
      "student4.jpg",
      "student5.jpg",
      "student6.jpg",
    ],
    "Examination seat allotment": [
      "exam1.jpg",
      "exam2.jpg",
      "exam3.jpg",
      "exam4.jpg",
      "exam5.jpg",
      "exam6.jpg",
      "exam7.jpg",
      "exam8.jpg",
      "exam9.jpg",
      "exam10.jpg",
      "exam11.jpg",
      "exam12.jpg",
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
