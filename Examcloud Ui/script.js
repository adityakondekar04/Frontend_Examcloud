// Add your JS here if you want to handle button clicks or form validation

document.querySelector('.discard-btn').onclick = function() {
  document.getElementById('examForm').reset();
};

document.getElementById('examForm').onsubmit = function(e) {
  e.preventDefault();
  // You can add validation or navigation here
  alert('Proceeding to center selection...');
}; 