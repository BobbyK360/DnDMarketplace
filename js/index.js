const campaignArray = [
  { campaignName: "Valeria", campaignIMG: "./img/game1.jpg" },
  {
    campaignName: "Paradise Lost",
    campaignIMG: "./img/game2.jpg",
    // campaignID: "paradise-lost"
  },
  { campaignName: "DragonFall", campaignIMG: "./img/game3.jpg" },
  {
    campaignName: "Titan Knight",
    campaignIMG: "./img/game4.jpg",
  },
];
const weaponTypeArray = [
  "Weapon Type",
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
          <input type="radio" name="campaign-list" id="campaign__${item.campaignName.replace(/\s+/g, '')}" />
          <label for="campaign__${item.campaignName.replace(/\s+/g, '')}">
          <img src="${item.campaignIMG}">
          <div>${item.campaignName}</div>
        </label>
        </div>
      `;
    }
    campaignDivString += htmlCreator();
  }
  campaignSelection.innerHTML = campaignDivString;
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

  const weaponTypeFirstDropdown = document.querySelector(
    "#weapon-type > option:first-child"
  );
  weaponTypeFirstDropdown.value = "unspecified";
}
