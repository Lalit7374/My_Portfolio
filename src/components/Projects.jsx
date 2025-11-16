import React from 'react';

const Projects = () => {
       const handleGitHubRedirect = () => {
              window.open("https://github.com/Lalit7374/Product_Verification_System", "_blank"); // Replace with your GitHub repo URL
            };
            const handleGitHubRedirect1 = () => {
              window.open("https://github.com/Lalit7374/Ticket_Go", "_blank"); // Replace with your GitHub repo URL
            };
            const handleGitHubRedirect2 = () => {
              window.open("https://github.com/Lalit7374/Break_Remainder", "_blank"); // Replace with your GitHub repo URL
            };
            const handleGitHubRedirect3 = () => {
              window.open("https://github.com/Lalit7374?tab=repositories", "_blank"); // Replace with your GitHub repo URL
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
              <h1 className="text-3xl">Expance Tracker</h1>
              <p>
  The Expense Tracker is a personal finance tool designed to help users manage their spending. It allows easy tracking of income, expenses, and savings, offering insights into spending habits and budgeting. The application aims to simplify financial management, helping users make informed decisions and stay on top of their financial goals.
</p>

              <br />
              <br />
              <button onClick={handleGitHubRedirect1} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer">
                Check
              </button>
            </div>

            <div className="project-3 cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="fa-solid fa-user-check text-6xl"></i>
              <h1 className="text-3xl">Image Recogination</h1>
              <p>
  The Image Recognition system leverages machine learning to identify and classify objects in images. It uses advanced algorithms to analyze visual data, enabling real-time recognition of various items or scenes. This tool can be applied to various fields such as security, retail, and healthcare, providing accurate and fast image analysis.
</p>

              <br />
              <br />
              <button onClick={handleGitHubRedirect2} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer">
                Check
              </button>
            </div>

            <div className="project-4 cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="fa-solid fa-user-tie text-6xl"></i>
              <h1 className="text-3xl">Employee Management System</h1>
              <p>
  The Employee Management System simplifies the process of managing employee information. It allows organizations to track employee details, attendance, payroll, and performance. This system streamlines administrative tasks, improves data accuracy, and enhances overall efficiency in human resource management.
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
