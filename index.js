console.log(channelList);

const title = document.querySelector(".channel-title");
const videoBox = document.querySelector("#video");
const buttonsBox = document.querySelector(".buttonsBox");

channelList.forEach((channel, index) => {
  let innerH = buttonsBox.innerHTML;
  innerH += `<button class="channel-btn" id="cb-${index}" >${channel.title}</button>`;
  buttonsBox.innerHTML = innerH;
});

const channelButtons = document.querySelectorAll(".channel-btn");

channelButtons.forEach((channelButton, index) => {
  channelButton.addEventListener("click", () => {
    videoBox.src = channelList[index].link;
    title.innerHTML = channelList[index].title;
  });
});
