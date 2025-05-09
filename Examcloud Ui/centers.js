const centerSelect = document.getElementById('centerSelect');
const examStart = document.getElementById('examStart');
const examEnd = document.getElementById('examEnd');
const centerCapacity = document.getElementById('centerCapacity');
const addCenterBtn = document.getElementById('addCenterBtn');
const selectedCentersList = document.getElementById('selectedCentersList');
const centerForm = document.getElementById('centerForm');

let centers = [];

function renderCenters() {
  selectedCentersList.innerHTML = '';
  centers.forEach((center, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${center.name}</strong><br>
      <span>Start: ${center.start}</span><br>
      <span>End: ${center.end}</span><br>
      <span>Capacity: ${center.capacity}</span>`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
      centers.splice(idx, 1);
      renderCenters();
    };
    li.appendChild(removeBtn);
    selectedCentersList.appendChild(li);
  });
}

addCenterBtn.onclick = function() {
  const name = centerSelect.value;
  const start = examStart.value;
  const end = examEnd.value;
  const capacity = centerCapacity.value;
  if (!name || !start || !end || !capacity || capacity < 1) {
    alert('Please fill all fields and enter a valid capacity.');
    return;
  }
  // Prevent duplicate centers
  if (centers.some(c => c.name === name)) {
    alert('This center has already been added.');
    return;
  }
  centers.push({ name, start, end, capacity });
  renderCenters();
  centerSelect.selectedIndex = 0;
  examStart.value = '';
  examEnd.value = '';
  centerCapacity.value = '';
};

centerForm.onsubmit = function(e) {
  e.preventDefault();
  if (centers.length === 0) {
    alert('Please add at least one center.');
    return;
  }
  // Proceed to next step (implement as needed)
  alert('Centers saved! Proceeding...');
}; 