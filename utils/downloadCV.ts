const handleCVDownload = () => {
  // Create a link element
  const link = document.createElement("a");
  link.href = "/Naveed_CV.pdf"; // Relative path to your PDF file
  link.target = "_blank"; // Open in a new tab
  link.download = "Naveed_CV.pdf"; // Specify the file name

  // Trigger a click event on the link to start the download
  link.click();
};

export default handleCVDownload;
