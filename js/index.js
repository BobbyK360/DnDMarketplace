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
const weaponTypeArray = [
  "Battleaxe",
  "Blowgun",
  "Boomerang",
  "Club",
  "Crossbow - Hand",
  "Crossbow - Light",
  "Crossbow - Heavy",
  "Dagger",
  "Dart",
  "Double-Bladed Scimitar",
  "Flail",
  "Glaive",
  "Greataxe",
  "Greatclub",
  "Greatsword",
  "Halberd",
  "Handaxe",
  "Javelin",
  "Lance",
  "Laser Pistol",
  "Laser Rifle",
  "Light Hammer",
  "Longbow",
  "Longsword",
  "Mace",
  "Maul",
  "Morningstar",
  "Musket",
  "Net",
  "Pike",
  "Pistol",
  "Quarterstaff",
  "Rapier",
  "Revolver",
  "Rifle - Automatic",
  "Rifle - Hunting",
  "Scimitar",
  "Shortbow",
  "Shortsword",
  "Shotgun",
  "Sickle",
  "Sling",
  "Spear",
  "Trident",
  "War Pick",
  "Warhammer",
  "Whip",
  "Yklwa",
];

window.addEventListener("load", () => {
  campaignBuilder();
  selectOutline();
  loadWeaponType();
});

function campaignBuilder() {
  const campaignSelection = document.querySelector(".campaign-selection__list");
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

function loadWeaponType() {
  const weaponTypeEl = document.getElementById("weapon-type");
  let weaponTypeString = "";
  for (let weapon of weaponTypeArray) {
    function htmlCreator() {
      return `
        <option value="${weapon}">${weapon}</option>
      `;
    }
    weaponTypeString += htmlCreator();
  }
  weaponTypeEl.innerHTML = weaponTypeString;
}
