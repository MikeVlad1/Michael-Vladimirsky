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



