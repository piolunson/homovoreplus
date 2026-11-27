// generated from src/main/java/dev/haz/features/modules — do not edit by hand.
(window.HAZ_DOCS = window.HAZ_DOCS || []).push({
  id: "experimental",
  desc: "odd, situational or trolling modules. you turn these on deliberately.",
  mods: ["AutoHorse","EndermanLook","HitboxDesync","Journal","MiddleClick","PosLogger","SoundBlocker","TableTroll"],
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
    "HitboxDesync": ["Precisely offsets your position to glitch out Minecraft hitbox calculations.", [
      ["Alternating","toggle","off","Modifies your position in such a way that it messes with other clients."],
      ["Minimal","toggle","off","Makes alternating minimal, only required on certain servers."],
      ["Specific","toggle","off","Specific alternating mode, only required against certain clients."],
      ["Close","toggle","off","Whether or not to have the surround place blocks on desynced positions."],
      ["SelfDisable","toggle","on","Toggles off the module after having desynced your hitbox."],
      ["JumpDisable","toggle","on","Toggles off the module whenever your Y level changes."]
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
    "PosLogger": ["Prints the closest player's position and rotations to the chat.", [
      ["Delay","number","1","Seconds between two position messages."],
      ["ShowIDs","toggle","off","Shows every entity id above its head."]
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
    ]]
  }
});
