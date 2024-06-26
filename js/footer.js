let windowHeight = Number(window.innerHeight);
  let stickyFooter = document.querySelector(".stickyFooter");
  let stickyFooterHeight = Number(stickyFooter.clientHeight);
  let position = `${windowHeight}` - `${stickyFooterHeight}`;
  stickyFooter.style.top = `${position}px`;
addEventListener ("resize", function () {
  let windowHeight = Number(window.innerHeight);
  let stickyFooter = document.querySelector(".stickyFooter");
  let stickyFooterHeight = Number(stickyFooter.clientHeight);
  let position = `${windowHeight}` - `${stickyFooterHeight}`;
  stickyFooter.style.top = `${position}px`;
})