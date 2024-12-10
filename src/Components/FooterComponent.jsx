import React from 'react'

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer bg-dark text-light py-3">
        <div className="container text-center">
          <span>&copy; {currentYear} Employee Management System. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent