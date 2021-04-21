console.log(channelList);

const videoBox = document.querySelector("#video");
const buttonsBox = document.querySelector(".buttonsBox");

if (window.innerWidth < videoBox.width) videoBox.width = window.innerWidth;

channelList.forEach((channel, index) => {
  let innerH = buttonsBox.innerHTML;
  innerH += `<button class="channel-btn" id="cb-${index}" >${channel.title}</button>`;
  buttonsBox.innerHTML = innerH;
});

const channelButtons = document.querySelectorAll(".channel-btn");
channelButtons[0].disabled = true;

channelButtons.forEach((channelButton, index) => {
  channelButton.addEventListener("click", () => {
    videoBox.src = channelList[index].link;
    channelButton.disabled = true;
    channelButtons.forEach((button, idx) => {
      if (idx !== index) button.disabled = false;
    });
  });
});
