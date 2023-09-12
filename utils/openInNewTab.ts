const openInNewTab = (url: string) => {
  const newTab = window.open(url, "_blank");
  if (newTab) {
    newTab.focus();
  }
};

export default openInNewTab;
