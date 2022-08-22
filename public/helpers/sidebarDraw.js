// var offcanvasElementList = [].slice.call(
//   document.querySelectorAll('.offcanvas')
// );
// var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
//   return new bootstrap.Offcanvas(offcanvasEl);
// });

const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');

console.log(sidebar);
console.log(menuBtn);

// Event Listeners
eventListeners();

function eventListeners() {
  // Sidebar toggle
  menuBtn.addEventListener('click', toggleSidebar);
}

function toggleSidebar(e) {
  e.preventDefault();

  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
  } else {
    sidebar.classList.add('show');
  }
}
