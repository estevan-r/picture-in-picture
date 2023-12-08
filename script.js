const videoElement = document.getElementById("video");
const btn = document.getElementById("btn");

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here
    console.log("whoops, error here:", error);
  }
};

btn.addEventListener("click", async () => {
  // Disable btn
  btn.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset btn
  btn.disabled = false;
});

// On Load
selectMediaStream();
