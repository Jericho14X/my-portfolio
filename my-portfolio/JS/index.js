
function toggleStatus() {
  const dot = document.getElementById("status-dot");
  const text = document.getElementById("status-text");

  if (!dot || !text) return;

  if (text.innerText === "Available for projects") {
    text.innerText = "Currently Busy";
    dot.style.backgroundColor = "red";
  } else {
    text.innerText = "Available for projects";
    dot.style.backgroundColor = "lightgreen";
  }
}

/**
 * Filters the displayed skills based on category
 * @param {string} category - The class name to filter by
 * @param {HTMLElement} buttonElement - The clicked button to mark as active
 */
function filterSkills(category, buttonElement) {
  // Reset active state on buttons
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  // Filter skills
  const items = document.querySelectorAll('.skill-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

/**
 * Filters the displayed project cards based on category
 * @param {string} category - The class name to filter by
 */
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

    filterSkills('all', document.querySelector('.filter-btn[onclick*="all"]'));
});