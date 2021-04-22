const videoBox = document.querySelector("#video");
const buttonsBox = document.querySelector(".buttonsBox");

var videoWidth = 650;
var videoHeight = 500;

if (window.innerWidth < videoBox.width) {
  videoBox.width = window.innerWidth;
  videoBox.height = (videoBox.width * 500) / 650;
  videoHeight = videoBox.height;
  videoWidth = videoBox.width;
}

videoBox.src = `//www.pkcast123.me/embed.php?player=desktop&live=${channelList[0].tvId}&vw=${videoWidth}&vh=${videoHeight}`;

channelList.forEach((channel, index) => {
  let innerH = buttonsBox.innerHTML;
  innerH += `<button class="channel-btn" id="cb-${index}" >${channel.title}</button>`;
  buttonsBox.innerHTML = innerH;
});

const channelButtons = document.querySelectorAll(".channel-btn");
channelButtons[0].disabled = true;

videoBox.addEventListener("click", () => {
  e.preventDefault();
});

channelButtons.forEach((channelButton, index) => {
  channelButton.addEventListener("click", () => {
    videoBox.src = `//www.pkcast123.me/embed.php?player=desktop&live=${channelList[index].tvId}&vw=${videoWidth}&vh=${videoHeight}`;
    // videoBox.src = channelList[index].link;
    channelButton.disabled = true;
    channelButtons.forEach((button, idx) => {
      if (idx !== index) button.disabled = false;
    });
  });
});
