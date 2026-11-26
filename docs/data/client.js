// generated from src/main/java/dev/haz/features/modules — do not edit by hand.
(window.HAZ_DOCS = window.HAZ_DOCS || []).push({
  id: "client",
  desc: "the client itself: chat, hud, notifications, discord, targets and anticheat behaviour.",
  mods: ["AntiCheat","AntiSpam","ChatSpammer","DiscordRPC","ExtraChat","Hud","JoinOnLaunch","LiquidHotbar","NoNarrator","NoSoundLag","Notifications","PosLogger","ResourcePackDownloader","SkinBlink","SpinBot","Targets"],
  details: {
    "AntiCheat": ["Manages the client's behavior on different anti-cheats.", [
      ["2b2t","toggle","off"],
      ["Limiter","toggle","off"],
      ["NoServerSlot","toggle","on"],
      ["StrictDirection","mode","NCP","one of: OFF, NCP, GRIM"],
      ["Mining","mode","VANILLA","one of: VANILLA, GRIM, GRIM_STRICT"],
      ["Placements","mode","VANILLA","one of: VANILLA, PAPER"],
      ["MovementSync","toggle","off"],
      ["Rotations","mode","SILENT","one of: MOTION, SILENT"],
      ["Swing","toggle","on"],
      ["Place","toggle","on"],
      ["Hit","toggle","on"],
      ["MiningSwing","toggle","off"],
      ["AssumeBlockBreaking","toggle","on"]
    ]],
    "AntiSpam": ["Prevents players from spamming the game chat.", [
      ["Unicode","toggle","off"]
    ]],
    "ChatSpammer": ["Customisable chat spammer with placeholders, configured with .spammer.", [
      ["Random","toggle","on"],
      ["DelayMs","number","4000","range 100 – 600000"],
      ["Name","text",""]
    ]],
    "DiscordRPC": ["BlackOut-style customizable Discord Rich Presence.", [
      ["AppID","text","DEFAULT_APP_ID"],
      ["Line1Mode","mode","CUSTOM","one of: CUSTOM, SERVER, DIMENSION, HEALTH, STATS"],
      ["Line1Custom","text","Haz Client [version]|Playing on [server]"],
      ["Line2Mode","mode","CUSTOM","one of: CUSTOM, SERVER, DIMENSION, HEALTH, STATS"],
      ["Line2Custom","text","HP: [health]|[ping] ms"],
      ["RefreshDelay","number","100","range 20 – 1000"],
      ["RotateLines","toggle","on"],
      ["HideIP","toggle","off"],
      ["AntiLeakRadius","number","50000","range 1000 – 100000"],
      ["LargeImage","text","icon","","Images"],
      ["LargeText","text","Haz Client [version]","","Images"],
      ["ShowAvatar","toggle","on","","Images"],
      ["SmallImage","text","","","Images"],
      ["SmallText","text","[player]","","Images"]
    ]],
    "ExtraChat": ["Chat tweaks: suffix, green text, timestamps, filters, coords protection and more.", [
      ["Suffix","toggle","off"],
      ["SuffixText","text","| haz"],
      ["GreenText","toggle","off"],
      ["Fade","toggle","off"],
      ["Duration","number","10","range 1 – 30"],
      ["Timestamps","toggle","off"],
      ["Color","color","rgba(0, 9, 0, 8)"],
      ["PortalChat","toggle","off"],
      ["SecretName","toggle","off"],
      ["CoordProtect","toggle","off"],
      ["MinDigits","number","5","range 2 – 10"],
      ["AntiSpam","toggle","off"],
      ["Discord","toggle","off"],
      ["URLs","toggle","off"],
      ["Announcer","toggle","off"],
      ["Swearing","toggle","off"]
    ]],
    "Hud": ["Static-position HUD elements", [
      ["Radar Enemy Color","color","rgba(255, 255, 255, 255)","","Colors"],
      ["Radar Friend Color","color","rgba(0, 255, 100, 255)","","Colors"],
      ["Radar Self Color","color","rgba(255, 255, 255, 255)","","Colors"],
      ["Active Module Color","color","rgba(175, 0, 0, 255)","","Colors"],
      ["Coordinates Position","mode","BOTTOM_RIGHT","","Elements"],
      ["ActiveModules Position","mode","CENTER_RIGHT","","Elements"]
    ]],
    "JoinOnLaunch": ["Joins a server or opens a world by itself when the game launches.", [
      ["Mode","mode","SERVER","one of: SERVER, LAST_SERVER, SINGLEPLAYER"],
      ["Server","text","hypixel.net"],
      ["LastServer","text",""],
      ["World","text","world"],
      ["Delay","number","40","range 0 – 400"],
      ["OnlyOnce","toggle","on"]
    ]],
    "LiquidHotbar": ["Liquid-style hotbar with status and experience bars.", [
      ["Status Bars","toggle","on","","Elements"],
      ["Experience Bar","toggle","on","","Elements"],
      ["Offhand Slot","toggle","on","","Elements"],
      ["Item Name","toggle","on","","Elements"],
      ["Item Decorations","toggle","on","","Elements"],
      ["Background","color","rgba(12, 12, 16, 170)","","Colors"],
      ["Accent","color","rgba(175, 0, 0, 255)","","Colors"],
      ["Bar Background","color","rgba(0, 0, 0, 140)","","Colors"]
    ]],
    "NoNarrator": ["Disables the narrator feature.", [

    ]],
    "NoSoundLag": ["Prevents sound effects from lagging the game.", [

    ]],
    "Notifications": ["Displays notifications for various client events", [
      ["Module Toggle","toggle","on"],
      ["Deaths","toggle","on"],
      ["TotemPops","toggle","on"],
      ["Gear","toggle","off"]
    ]],
    "PosLogger": ["Prints the closest player's position and rotations to the chat.", [
      ["Delay","number","1","Seconds between two position messages."],
      ["ShowIDs","toggle","off","Shows every entity id above its head."]
    ]],
    "ResourcePackDownloader": ["Downloads resource packs from Modrinth into your resourcepacks folder.", [
      ["Packs","text","low-fire-pack, low-shield-pack, spunky-pvp-texture-pack, crystal-pvp-lt3-essentials"],
      ["AutoSelect","toggle","on"],
      ["Redownload","toggle","off"],
      ["OpenFolder","toggle","off"]
    ]],
    "SkinBlink": ["Toggles the skin model rendering.", [
      ["Speed","number","0.1","range 0.0 – 20.0"],
      ["Random","toggle","off"]
    ]],
    "SpinBot": ["Makes it harder to accurately aim at the player.", [
      ["Yaw","mode","Spin","one of: Off, Add, Static, Spin, Jitter"],
      ["Pitch","mode","Down","one of: Off, Custom, Static, Down, Up, Jitter"],
      ["YawAdd","number","20.0","range -180.0 – 180.0"],
      ["CustomPitch","number","20.0","range -90.0 – 90.0"],
      ["SpinSpeed","number","16.0","range 1.0 – 40.0"],
      ["FlipTicks","number","2","range 2 – 20"]
    ]],
    "Targets": ["Configure which entities combat modules target.", [
      ["Players","toggle","on"],
      ["Hostiles","toggle","off"],
      ["Neutrals","toggle","off"],
      ["Passives","toggle","off"]
    ]]
  }
});
