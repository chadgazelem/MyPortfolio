// const links = [
//     {
//       label: "Week1 notes",
//       url: "week1/index.html"
//     }
//   ]

const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
alert(' Form Submitted');
}
function search(event) {
  alert('Form Submitted');
  event.preventDefault();
  }