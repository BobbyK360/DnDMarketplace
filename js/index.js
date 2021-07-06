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

// document.addEventListener("DOMContentLoaded", () => {
//   campaignBuilder();
//   selectOutline();
// });

window.addEventListener("load", () => {
  campaignBuilder();
  selectOutline();
});

function campaignBuilder() {
  for (let element of campaignArray) {
    //creating campaign div
    let campaignDivContainer = document.createElement("div");
    campaignDivContainer.classList.add("campaign");

    //creating an IMG to go into the Div
    let campaignIMG = document.createElement("img");
    campaignIMG.src = element.campaignIMG;

    //creating a div that goes into campaign div
    let campaignName = document.createElement("div");
    campaignName.innerHTML = element.campaignName;

    //append IMG and div to campaign div
    campaignDivContainer.appendChild(campaignIMG);
    campaignDivContainer.appendChild(campaignName);

    //append to parent div
    campaignSelection.appendChild(campaignDivContainer);
  }
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
