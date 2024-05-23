document.addEventListener("DOMContentLoaded", function() {
  // Get references to DOM elements
  const htmlCodeTextarea = document.getElementById("html-code");
  const cssCodeTextarea = document.getElementById("css-code");
  const jsCodeTextarea = document.getElementById("js-code");
  const previewIframe = document.getElementById("preview");
  const runButton = document.getElementById("run-btn");
  const exportButton = document.getElementById("export-btn");

  // Function to update preview iframe
  function updatePreview() {
    const htmlCode = htmlCodeTextarea.value;
    const cssCode = "<style>" + cssCodeTextarea.value + "</style>";
    const jsCode = "<script>" + jsCodeTextarea.value + "</script>";
    const combinedCode = htmlCode + cssCode + jsCode;
    previewIframe.srcdoc = combinedCode;
  }

  // Event listener for Run button click
  runButton.addEventListener("click", function() {
    updatePreview();
  });

  // Function to export code as a downloadable file
  function exportCode() {
    const combinedCode = 
      htmlCodeTextarea.value + "\n\n" + 
      cssCodeTextarea.value + "\n\n" + 
      jsCodeTextarea.value;
    const blob = new Blob([combinedCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Event listener for Export button click
  exportButton.addEventListener("click", function() {
    exportCode();
  });
});

