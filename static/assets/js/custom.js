//===== close navbar-collapse when a  clicked
let navbarTogglerNine = document.querySelector(
    ".navbar-nine .navbar-toggler"
  );
  navbarTogglerNine.addEventListener("click", function () {
    navbarTogglerNine.classList.toggle("active");
  });

  //========= glightbox
  GLightbox({
    'href': 'https://youtu.be/GPO28KjzYHg?list=TLGGT6k7DSLaO3ExNzExMjAyMQ',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoplayVideos': true,
  });