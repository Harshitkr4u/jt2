// Sample Course Data
const sampleCourses = [
  { title: "Executive Leadership & Strategy", category: "Leadership", location: "London / Dubai", duration: "5 Days" },
  { title: "Advanced Corporate Finance", category: "Finance", location: "London / Online", duration: "3 Days" },
  { title: "Agile Project Management Masterclass", category: "Project", location: "Istanbul / Dubai", duration: "5 Days" },
  { title: "Strategic HR Business Partnering", category: "HR", location: "London", duration: "4 Days" }
];

// Display Courses based on filter
function renderCourses(courses) {
  const listContainer = document.getElementById('courseList');
  if (courses.length === 0) {
    listContainer.innerHTML = `<p>No courses found matching your criteria.</p>`;
    return;
  }

  listContainer.innerHTML = courses.map(c => `
    <div class="course-item">
      <h4>${c.title}</h4>
      <p><strong>Category:</strong> ${c.category} | <strong>Location:</strong> ${c.location} | <strong>Duration:</strong> ${c.duration}</p>
    </div>
  `).join('');
}

// Filter courses by search input
function filterCourses() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = sampleCourses.filter(c => 
    c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
  );
  renderCourses(filtered);
}

// Filter courses by clicking a category card
function selectCategory(categoryName) {
  const filtered = sampleCourses.filter(c => c.category === categoryName);
  renderCourses(filtered);
  document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

// Simple Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('userName').value;
  const status = document.getElementById('formStatus');
  
  status.textContent = `Thank you, ${name}! Your inquiry has been submitted successfully.`;
  status.style.color = 'green';
  document.getElementById('enquiryForm').reset();
}

// Initial display of all courses
renderCourses(sampleCourses);