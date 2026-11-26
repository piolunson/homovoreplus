// generated from src/main/java/dev/haz/features/modules — do not edit by hand.
(window.HAZ_DOCS = window.HAZ_DOCS || []).push({
  id: "experimental",
  desc: "odd, situational or trolling modules. you turn these on deliberately.",
  mods: ["AutoHorse","EndermanLook","Journal","MiddleClick","MoFucker","SoundBlocker","TableTroll","Trickshot"],
  details: {
    "AutoHorse": ["Shows horses and plays a sound when you take damage.", [
      ["Duration","number","25","range 5 – 100"],
      ["Scale","number","0.16","range 0.05 – 0.35"],
      ["Volume","number","1.0","range 0.1 – 1.0"]
    ]],
    "EndermanLook": ["Either stares at every Enderman or stops you from staring at them.", [
      ["LookMode","mode","AWAY","one of: AT, AWAY"],
      ["StunHostiles","toggle","on"]
    ]],
    "Journal": ["Keeps a client-side log of the current session and reports it when disabled.", [
      ["Track Distance","toggle","on"],
      ["Track Mined","toggle","on"],
      ["Track Deaths","toggle","on"],
      ["Print On Disable","toggle","on"]
    ]],
    "MiddleClick": ["Throws a pearl or firework on middle click.", [
      ["FireworkInAir","toggle","on"]
    ]],
    "MoFucker": ["On keybind, dumps a water bucket on the nearest enemy and scoops it back up.", [
      ["Range","number","5.0","range 1.0 – 6.0"],
      ["Delay","number","2","range 0 – 20"]
    ]],
    "SoundBlocker": ["Silences or lowers chosen sounds (list managed with .soundblocker add).", [
      ["Volume","number","0","range 0 – 100"],
      ["Weather","toggle","off"],
      ["Explosion","toggle","off"],
      ["TotemPop","toggle","off"],
      ["Mace","toggle","off"]
    ]],
    "TableTroll": ["Fills the ground around you with the block you are holding.", [
      ["Limit","number","4","The maximum number of blocks that can be placed each group."],
      ["Delay","number","0","The delay in ticks between each group of placements."]
    ]],
    "Trickshot": ["Throws an ender pearl to 0 62 0 in the End.", [

    ]]
  }
});
