const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "Pause Music";
  } else {
    music.pause();
    playBtn.textContent = "Play Music";
  }
});

document.querySelectorAll(".file-upload__button").forEach((button) => {
  const hiddenInput = button.parentElement.querySelector(".file-upload__input");
  const label = button.parentElement.querySelector(".file-upload__label");
  const defaultLabelText = "No file(s) selected";

  // Set default text for label
  label.textContent = defaultLabelText;
  label.title = defaultLabelText;

  button.addEventListener("click", function () {
    hiddenInput.click();
  });
  hiddenInput.addEventListener("change", function () {
    const filenameList = Array.from(hiddenInput.files).map(function (file) {
      return file.name;
    });
    label.textContent = filenameList.join(", ") || defaultLabelText;
    label.title = label.textContent;
  });
});
