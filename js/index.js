const campaignSelection = document.querySelector(".campaign-selection__list");
const campaignArray = [
  { campaignName: "Valeria", campaignIMG: "./img/game1.jpg" },
  {
    campaignName: "Paradise Lost",
    campaignIMG: "./img/game2.jpg",
  },
  { campaignName: "DragonFall", campaignIMG: "./img/game3.jpg" },
  {
    campaignName: "Titan Knight",
    campaignIMG: "./img/game4.jpg",
  },
];

window.addEventListener("load", () => {
  campaignBuilder();
  selectOutline();
});

function campaignBuilder() {
  let campaignDivString = "";

  for (let item of campaignArray) {
    function htmlCreator() {
      return `
        <div class="campaign">
          <img src="${item.campaignIMG}">
          <div>${item.campaignName}</div>
        </div>
      `;
    }
    campaignDivString += htmlCreator();
  }

  campaignSelection.innerHTML = campaignDivString;
}

function selectOutline() {
  let campaignList = document.querySelectorAll(".campaign");
  for (let campaign of campaignList) {
    campaign.addEventListener("click", () => {
      if (!campaign.classList.contains("campaign-1")) {
        for (let campaign2 of campaignList) {
          campaign2.classList.remove("campaign-1");
        }
        campaign.classList.add("campaign-1");
      }
    });
  }
}
