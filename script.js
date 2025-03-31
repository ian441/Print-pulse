document.getElementById('myForm').addEventListener('submit', function() {
    // This will clear the form after submission
    setTimeout(() => {
      this.reset();
    }, 1000); // Small delay to ensure submission goes through
  });
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sidebarCheckbox = document.getElementById('sidebar-active');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Uncheck the checkbox to close the sidebar
            sidebarCheckbox.checked = false;
        });
    });
});