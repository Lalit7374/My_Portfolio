import React from 'react';

const Projects = () => {
       const handleGitHubRedirect = () => {
              window.open("https://github.com/Lalit7374/Product_Verification_System", "_blank"); // Replace with your GitHub repo URL
            };
            const handleGitHubRedirect1 = () => {
              window.open("https://github.com/Lalit7374/TaskPilot", "_blank"); // Replace with your GitHub repo URL
            };
            const handleGitHubRedirect2 = () => {
              window.open("https://github.com/Lalit7374/Customer-Feedback", "_blank"); // Replace with your GitHub repo URL
            };
            const handleGitHubRedirect3 = () => {
              window.open("https://github.com/Lalit7374/Ticket_Go", "_blank"); // Replace with your GitHub repo URL
            };
            
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">My Projects</h1>
        <div className="projects-container space-y-5 px-5 md:px-10 shadow-lg rounded-xl mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="project-1 cursor-pointer hover:bg-gray-200 bg-slate-100 shadow-lg p-5 text-center rounded-xl space-y-3">
              <i className="bi bi-patch-check-fill text-6xl"></i>
              <h1 className="text-3xl">Product Verification System</h1>
              <p>
  The Product Verification System leverages blockchain technology to ensure product authenticity. By using QR codes, customers can scan and verify the origins and history of a product, ensuring it’s genuine and protecting against counterfeit goods. This system offers transparency, security, and trust between businesses and consumers, reducing fraud and maintaining brand integrity.
</p>

              <br />
              <button   onClick={handleGitHubRedirect} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer">
                Check
              </button>
            </div>

            <div  className="project-2 cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="fa-solid fa-list-check text-6xl"></i>
              <h1 className="text-3xl">TaskPilot</h1>
              <p>TaskPilot is a comprehensive project and team management tool built with the MERN stack.
It helps organizations streamline projects, assign tasks, track employee attendance, and manage timesheets all in one integrated platform.This project demonstrates end-to-end full-stack development with clean architecture, RESTful APIs, JWT authentication, and modern UI design using Material-UI and Bootstrap 5.
  
</p>

              <br />
              <br />
              <button onClick={handleGitHubRedirect1} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer">
                Check
              </button>
            </div>

            <div className="project-3 cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="fa-solid fa-user-check text-6xl"></i>
              <h1 className="text-3xl">Customer Review System</h1>
              <p>Customer Review System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).It allows users to share, manage, and view reviews for hotels and services in a secure, user-friendly interface.The project implements JWT authentication, RESTful APIs, and CRUD operations for reviews — showcasing practical experience in end-to-end web application development.

</p>

              <br />
              <br />
              <button onClick={handleGitHubRedirect2} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer">
                Check
              </button>
            </div>

            <div className="project-4 cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="fa-solid fa-user-tie text-6xl"></i>
              <h1 className="text-3xl">Ticket_Go</h1>
              <p>Ticket_Go is a ticket booking system designed to allow users to book, cancel, and view tickets. It uses a variety of data structures to manage and optimize ticket operations, including queues for booking, stacks for cancellations, and linked lists to store booking history.This project is built using Django for the backend and Python for data structure management.
  
</p>

              <button  onClick={handleGitHubRedirect3} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
