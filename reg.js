document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const toastContainer = document.getElementById('toastContainer');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (password !== confirmPassword) {
        showToast('Passwords do not match');
        return;
      }
  
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted successfully');
      showToast('Registration successful');
    });
  
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      toastContainer.appendChild(toast);
      toast.style.display = 'block';
  
      setTimeout(() => {
        toast.style.display = 'none';
        toastContainer.removeChild(toast);
      }, 3000);
    }
  });
  