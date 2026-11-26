// generated from src/main/java/dev/haz/features/modules — do not edit by hand.
(window.HAZ_DOCS = window.HAZ_DOCS || []).push({
  id: "player",
  desc: "everyday player helpers and automations: eating, farming, inventory and so on.",
  mods: ["AntiHunger","AutoBreed","AutoEat","AutoFarm","AutoMount","AutoNametag","AutoPortal","AutoRespawn","AutoTame","AutoTemplate","AutoTool","ChestSwap","FastPlace","Fastuse","ForceSuicide","Freecam","FreeLook","InstantRekit","InventoryKeeper","ItemSaver","KeyPotion","NoGlitchBlocks","NoGlitchItems","NoRotate","NoSlotSet","Nuker","Reach","Replenish"],
  details: {
    "AntiHunger": ["Reduces hunger drain by spoofing movement packets.", [
      ["OnGround","toggle","on"],
      ["Sprinting","toggle","on"]
    ]],
    "AutoBreed": ["Feeds nearby animals to breed them.", [
      ["Range","number","4.0","range 1.0 – 6.0"],
      ["OnlyAdults","toggle","on"],
      ["StopWhenBothInLove","toggle","on"],
      ["Delay","number","500","range 0 – 3000"]
    ]],
    "AutoEat": ["Eats food when health or hunger is low.", [
      ["Health","number","12","range 1 – 36"],
      ["Food","number","14","range 1 – 20"],
      ["Priority","mode","Health","one of: Health, Food"],
      ["Offhand","toggle","off"],
      ["PauseNearEnemy","toggle","on"]
    ]],
    "AutoFarm": ["Harvests and replants mature crops around you.", [
      ["Range","number","4.5","range 1.5 – 6.0"],
      ["Harvest","toggle","on"],
      ["Replant","toggle","on"],
      ["Delay","number","200","range 0 – 1500"]
    ]],
    "AutoMount": ["Mounts the closest rideable entity in reach.", [
      ["Range","number","3.5","range 1.0 – 6.0"],
      ["Horses","toggle","on"],
      ["Boats","toggle","on"],
      ["Minecarts","toggle","on"],
      ["Pigs","toggle","off"],
      ["OnlyOnGround","toggle","on"],
      ["Delay","number","300","range 0 – 2000"]
    ]],
    "AutoNametag": ["Automatically renames nearby entities with nametags.", [
      ["Nametagged","toggle","off"],
      ["Range","number","3.0","range 1.0 – 10.0"],
      ["Delay","number","1","range 0 – 20"],
      ["SwapSilent","toggle","on"],
      ["Multitask","toggle","off"],
      ["Swing","toggle","on"],
      ["Rotate","toggle","on"]
    ]],
    "AutoPortal": ["For the base hunter who has places to be.", [
      ["Render","toggle","on"],
      ["FadeTime","number","1.0","range 0.05 – 2.0"],
      ["FillColor","color","rgba(85, 0, 255, 44)"],
      ["OutlineColor","color","rgba(85, 0, 255, 44)"]
    ]],
    "AutoRespawn": ["Respawns automatically after a death.", [

    ]],
    "AutoTame": ["Tames the closest untamed animal with the right food.", [
      ["Range","number","4.0","range 1.0 – 6.0"],
      ["Wolves","toggle","on"],
      ["Cats","toggle","on"],
      ["Horses","toggle","on"],
      ["Parrots","toggle","on"],
      ["Striders","toggle","off"],
      ["Delay","number","400","range 0 – 2000"]
    ]],
    "AutoTemplate": ["Rebuilds a saved block template around you.", [
      ["Template","text",""],
      ["Rotate","mode","None","one of: None, CW90, CW180, CW270"],
      ["Loop","toggle","off"],
      ["BlocksPerTick","number","1","range 1 – 8"],
      ["Delay","number","100","range 0 – 1000"]
    ]],
    "AutoTool": ["Switches to the fastest tool while mining and restores the old slot.", [
      ["Restore","toggle","on"],
      ["Swords","toggle","on"],
      ["PauseOnUse","toggle","on"],
      ["NoBreakDelay","toggle","on"]
    ]],
    "ChestSwap": ["Each toggle swaps your elytra and chestplate in the chest slot.", [

    ]],
    "FastPlace": ["Place items and blocks faster.", [
      ["Selection","mode","WHITELIST","one of: WHITELIST, BLACKLIST, ALL"],
      ["Delay","number","0","range 0 – 4"],
      ["StartDelay","number","0.0","range 0.0 – 1.0"],
      ["Whitelist","text","minecraft:experience_bottle,minecraft:snowball,minecraft:egg"],
      ["Blacklist","text","minecraft:ender_pearl,minecraft:ender_eye"]
    ]],
    "Fastuse": ["Use items and interact with blocks faster", [
      ["All","toggle","off"],
      ["Experience","toggle","on"],
      ["Blocks","toggle","off"],
      ["EnderChests","toggle","on"]
    ]],
    "ForceSuicide": ["Points crystal aura at yourself and keeps totems out of your offhand.", [
      ["BlockTotems","toggle","on","Keeps totems out of your offhand so you actually die."],
      ["StripDelay","number","100","Milliseconds waited before the totem is stripped again."]
    ]],
    "Freecam": ["Fly around freely without moving your player.", [
      ["Speed","number","0.5","range 0.1 – 5.0"],
      ["Accelerate","number","2.3","range 1.0 – 3.0"]
    ]],
    "FreeLook": ["Meteor-style free look: rotates the camera or the player independently.", [
      ["Mode","mode","PLAYER","one of: PLAYER, CAMERA"],
      ["Toggle Perspective","toggle","on"],
      ["Camera Sensitivity","number","8.0","range 1.0 – 20.0"],
      ["Arrows","toggle","on"],
      ["Arrow Speed","number","4.0","range 0.5 – 10.0"]
    ]],
    "InstantRekit": ["Restores a saved kit from an open container in a single tick.", [
      ["TopUpStacks","toggle","on"],
      ["CloseOnDone","toggle","off"]
    ]],
    "InventoryKeeper": ["Saves your hotbar (or the whole inventory) and puts items back into their slots.", [
      ["Only Hotbar","toggle","on"],
      ["Refresh","number","20","range 1 – 200"]
    ]],
    "ItemSaver": ["Prevents your tools from breaking.", [

    ]],
    "KeyPotion": ["Throws a splash potion on keybind press.", [
      ["OnGround","toggle","off"]
    ]],
    "NoGlitchBlocks": ["Prevents ghost blocks by not predicting block placements.", [
      ["Place","toggle","on"],
      ["Swing","toggle","on"]
    ]],
    "NoGlitchItems": ["Prevents ghost items in the inventory.", [

    ]],
    "NoRotate": ["Ignores server-forced rotations.", [

    ]],
    "NoSlotSet": ["Prevents the server from forcing your selected slot.", [

    ]],
    "Nuker": ["Breaks all blocks around you through SpeedMine. Requires SpeedMine.", [
      ["Range","number","5.14","range 0.0 – 7.0"],
      ["Shape","mode","All","one of: All, Flat"],
      ["Blocks","mode","All","one of: All, Select"],
      ["Render","toggle","on","","Render"],
      ["LineWidth","number","1.5","range 0.5 – 5.0","Render"],
      ["LineColor","color","rgba(255, 40, 40, 255)","","Render"],
      ["FillColor","color","rgba(255, 40, 40, 0)","","Render"]
    ]],
    "Reach": ["Extends player reach.", [
      ["BlockReach","number","4.0","range 4.0 – 6.0"],
      ["EntityReach","number","2.5","range 3.0 – 6.0"]
    ]],
    "Replenish": ["Automatically refills items in the hotbar.", [
      ["Percentage","number","20","range 10 – 50"],
      ["Alternative","toggle","off"]
    ]]
  }
});
