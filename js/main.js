// Video player functionality
const videoPlayBtn = document.getElementById("play-video-btn");
videoPlayBtn.addEventListener("click", () => {
  videoPlayBtn.parentElement.innerHTML = `          <iframe
            class="accomodation-section__video"
            src="https://www.youtube.com/embed/PIO8uhSen7M?si=E2XsexvTa6tEn9vc&amp;controls=0&autoplay=1&enablejsapi=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`;
});
