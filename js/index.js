//=== ONLOAD - FUNCTION CALLS ===
window.addEventListener("load", () => {
  campaignBuilder();
  loadEquipmentType();
  loadRarity();
  loadCombatStyle();
  loadWeaponType();
});

//=== Campaign Loader ===
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

function campaignBuilder() {
  const campaignSelection = document.querySelector(".campaign-selection__list");
  let campaignDivString = "";
  for (let item of campaignArray) {
    function htmlCreator() {
      return `
        <div class="campaign">
          <input type="radio" name="campaign-list" id="campaign__${item.campaignName.replace(
            /\s+/g,
            ""
          )}" />
          <label for="campaign__${item.campaignName.replace(/\s+/g, "")}">
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

//=== Load Search Filter Fields ===
const equipmentTypeArray = [
  "Equipment Type",
  "Weapon",
  "Armour",
  "Item",
  "Jewellery",
  "Gems",
  "Potions",
];

const rarityArray = [
  "Rarity",
  "Common",
  "Uncommon",
  "Rare",
  "Very Rare",
  "Legendary",
  "Artifact",
  "Varies",
  "Unknown",
];

const combatStyle = [
  "Combat Style",
  "Melee",
  "Ranged"
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

function loadEquipmentType() {
  const equipmentTypeEl = document.getElementById("typeof-item");
  let equipmentTypeString = "";
  for (let equipment of equipmentTypeArray) {
    function htmlCreator() {
      return `
        <option value="${equipment}">${equipment}</option>
      `;
    }
    equipmentTypeString += htmlCreator();
  }
  // console.log(equipmentTypeString);
  equipmentTypeEl.innerHTML = equipmentTypeString;

  const firstDropdown = document.querySelector(
    "#typeof-item > option:first-child"
  );
  firstDropdown.value = "unspecified";
}

function loadRarity() {
  const rarityEl = document.getElementById("item-rarity");
  let rarityString = "";
  for (let rarity of rarityArray) {
    function htmlCreator() {
      return `
        <option value="${rarity}">${rarity}</option>
      `;
    }
    rarityString += htmlCreator();
  }
  // console.log(equipmentTypeString);
  rarityEl.innerHTML = rarityString;

  const firstDropdown = document.querySelector(
    "#item-rarity > option:first-child"
  );
  firstDropdown.value = "unspecified";
}

function loadCombatStyle() {
  const combatStyleEl = document.getElementById("combat-style");
  let combatStyleString = "";
  for (let style of combatStyle) {
    function htmlCreator() {
      return `
        <option value="${style}">${style}</option>
      `;
    }
    combatStyleString += htmlCreator();
  }
  // console.log(equipmentTypeString);
  combatStyleEl.innerHTML = combatStyleString;

  const firstDropdown = document.querySelector(
    "#combat-style > option:first-child"
  );
  firstDropdown.value = "unspecified";
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

  const firstDropdown = document.querySelector(
    "#weapon-type > option:first-child"
  );
  firstDropdown.value = "unspecified";
}
