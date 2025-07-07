export const handleScroll = (docId: string) => {
  const el = document.getElementById(docId);
  if (el) {
    // Scroll so that the element is centered vertically in the viewport
    const elementRect = el.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle =
      absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

    window.scrollTo({
      top: middle,
      behavior: 'smooth',
    });
  }
};
