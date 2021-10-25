/* Search */

const searchFunction = () => {
  const trs = document.querySelectorAll('#myTable tr:not(.header)');
  const filter = document.querySelector('#myInput').value;
  const regex = new RegExp(filter, 'i');
  const isFoundInTds = (td) => regex.test(td.innerHTML);
  const isFound = (childrenArr) => childrenArr.some(isFoundInTds);
  const setTrStyleDisplay = ({ style, children }) => {
    style.display = isFound([...children]) ? '' : 'none';
  };
  
  trs.forEach(setTrStyleDisplay);
};

/* Back To Top Button */

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
