var copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var targetId = this.getAttribute("data-target");
    var targetElement = document.getElementById(targetId);
    var textToCopy = targetElement.innerText;
    copyToClipboard(textToCopy);
    
    var tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = "Copied!";
    document.body.appendChild(tooltip);
    
    var buttonRect = button.getBoundingClientRect();
    tooltip.style.left = (buttonRect.right - tooltip.offsetWidth) + "px";
    tooltip.style.top = (buttonRect.top - tooltip.offsetHeight) + "px";
    
    setTimeout(function() {
      document.body.removeChild(tooltip);
    }, 600); 
  });
});

function copyToClipboard(text) {
  var tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
