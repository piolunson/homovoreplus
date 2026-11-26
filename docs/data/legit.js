// generated from src/main/java/dev/haz/features/modules — do not edit by hand.
(window.HAZ_DOCS = window.HAZ_DOCS || []).push({
  id: "legit",
  desc: "one-click versions of the combat modules, meant to be used by hand.",
  mods: ["AutoHitCrystal","AutoInvTotem","CrystalMacro","KeyPearl"],
  details: {
    "AutoHitCrystal": ["Places obsidian and a crystal where you look, then hits the crystal.", [
      ["Delay","number","30.0","range 0.0 – 200.0"],
      ["Crystal","mode","SINGLE_TAP","one of: NONE, SINGLE_TAP, DOUBLE_TAP"],
      ["Place Mode","mode","SILENT","one of: SILENT, MANUAL"],
      ["Silent","toggle","off"],
      ["Perfect Timing","toggle","off"],
      ["Pause On Kill","toggle","off"],
      ["AimAssist","toggle","on"]
    ]],
    "AutoInvTotem": ["Moves a totem from your inventory into your offhand, one click at a time.", [
      ["Delay","number","120","range 0 – 1000"],
      ["Health","number","0","range 0 – 20"],
      ["Inventory","toggle","on"],
      ["Hotbar","toggle","off"]
    ]],
    "CrystalMacro": ["Places crystals and obsidian on left click, breaks the crystal you look at.", [
      ["ActivateKey","number","1","range -1 – 400"],
      ["PlaceDelay","number","0.0","range 0.0 – 20.0"],
      ["BreakDelay","number","0.0","range 0.0 – 20.0"],
      ["StopOnKill","toggle","on"],
      ["PlaceObsidianIfMissing","toggle","on"],
      ["Switch","mode","Normal","one of: Silent, Normal, SwitchBack, None"]
    ]],
    "KeyPearl": ["Throws an ender pearl.", [
      ["NoEntityTrace","toggle","on"],
      ["Solid","toggle","on"],
      ["DisableOnElytra","toggle","off"],
      ["DisableOnRiding","toggle","off"],
      ["Await","toggle","off"]
    ]]
  }
});
