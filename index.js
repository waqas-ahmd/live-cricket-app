const videoBox = document.querySelector("#video");
videoBox.src = `//www.pkcast123.me/embed.php?player=desktop&live=${channelList2[0].link}&vw=620&vh=500`;

const buttonsBox = document.querySelector(".buttonsBox");

if (window.innerWidth < videoBox.width) videoBox.width = window.innerWidth;

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
    videoBox.src = `//www.pkcast123.me/embed.php?player=desktop&live=${channelList2[index].link}&vw=620&vh=500`;
    // videoBox.src = channelList[index].link;
    channelButton.disabled = true;
    channelButtons.forEach((button, idx) => {
      if (idx !== index) button.disabled = false;
    });
  });
});
