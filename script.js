function openTab(tabName, elmnt, color) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Reset all tab button colors
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show selected tab and color the button
  document.getElementById(tabName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Open default tab on page load
window.onload = function() {
  document.getElementById("defaultOpen").click();
};





// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var p;

// Full-width images
function one() {
    for (p = 0; p < elements.length; p++) {
    elements[p].style.msFlex = "100%";  // IE10
    elements[p].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (p = 0; p < elements.length; p++) {
    elements[p].style.msFlex = "50%";  // IE10
    elements[p].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (p = 0; p < elements.length; p++) {
    elements[p].style.msFlex = "25%";  // IE10
    elements[p].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var p = 0; p < btns.length; p++) {
  btns[p].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

