// generated from src/main/java/dev/haz/features/modules — do not edit by hand.
(window.HAZ_DOCS = window.HAZ_DOCS || []).push({
  id: "movement",
  desc: "everything about getting around: elytra, speed, bypasses and movement tweaks.",
  mods: ["AirJump","AntiLevitation","AutoWalk","CC","CobwebBypass","ElytraAssist","ElytraBounce","ElytraControl","ElytraDash","ElytraFly","FakeFly","FastAccel","FastPortal","NoFall","NoJumpDelay","NoSlow","Parkour","SafeWalk","Scaffold","Sprint","Strafe","TickShift","Velocity"],
  details: {
    "AirJump": ["Allows jumping in air when pressing key.", [
      ["Use","key","NONE","Key that triggers the air jump while held (default none)."],
      ["SetOnGround","toggle","on","Mark yourself as on the ground when jumping, so the server accepts the extra jump."]
    ]],
    "AntiLevitation": ["Prevents the player from being levitated.", [

    ]],
    "AutoWalk": ["Automatically moves forward.", [
      ["Lock","toggle","off","Stop walking while you hold jump on the ground, so you do not walk off a ledge."]
    ]],
    "CC": ["Fast fall, step and QuadSupreme terrain grid.", [
      ["FastFall","toggle","on","Make you fall faster than vanilla, at FastFallSpeed.","Movement"],
      ["FastFallSpeed","number","1.0","range 0.0 – 10.0","Movement"],
      ["Step","toggle","on","Step up blocks up to StepHeight without jumping.","Step"],
      ["StepMode","mode","VANILLA","one of: VANILLA, NORMAL","Step"],
      ["StepHeight","number","1.0","range 0.0 – 2.5","Step"],
      ["Quad","toggle","on","Use the QuadSupreme terrain grid (radius, depth and y-offset below).","Quad"],
      ["Radius","number","5","range 2 – 16","Quad"],
      ["Depth","number","3","range 1 – 8","Quad"],
      ["Height","number","0.02","range 0 – 1","Quad"],
      ["LineWidth","number","1.5","range 0.5 – 5","Quad"],
      ["Color","color","rgba(0, 200, 255, 200)","Grid colour.","Quad"],
      ["FadeStart","number","0.25","range 0 – 1","Quad"],
      ["Pulse","toggle","on","Pulse the grid colour while it is shown.","Quad"],
      ["PulseSpeed","number","3","range 0 – 12","Quad"]
    ]],
    "CobwebBypass": ["Keeps normal movement speed inside cobwebs.", [
      ["Mode","mode","IGNORE","one of: IGNORE, SPEED"],
      ["NormalSpeed","mode","SPRINT","one of: WALK, SPRINT"],
      ["TimerPercentage","number","100","range 0 – 100"],
      ["RaiseSpeed","number","0","range 0 – 250"],
      ["EnableHitboxPercent","number","100","range 0 – 100"],
      ["WhenSlowDown","toggle","on","Only bypass the cobweb slowdown for one tick after the server actually slows you."],
      ["CountPotions","toggle","on","Count Speed potion effects when working out how much the cobweb slows you."],
      ["CountBeacons","toggle","on","Count beacon (ambient) Speed effects the same way."]
    ]],
    "ElytraAssist": ["Aim-assist for elytra: nudges your aim the least amount needed to clear obstacles, always preferring to climb over dive.", [
      ["Lookahead","number","10.0","range 10.0 – 60.0"],
      ["Clearance","number","0.15","range 0.0 – 1.5"],
      ["MaxYaw","number","90.0","range 0.0 – 90.0"],
      ["React","number","20.0","range 4.0 – 40.0"],
      ["ClimbBias","number","3.0","range 0.0 – 20.0"]
    ]],
    "ElytraBounce": ["Bounce-fly on your elytra: glides just above the ground, Meteor style.", [
      ["Auto Jump","toggle","on","Hold jump automatically while bounce-flying."],
      ["Yaw Lock","mode","Smart","one of: None, Smart, Simple"],
      ["Yaw","number","0.0","range 0.0 – 360.0"],
      ["Pitch Lock","toggle","on","Lock your pitch at Pitch while flying."],
      ["Pitch","number","85.0","range 0.0 – 90.0"],
      ["Restart","toggle","on","Restart the glide automatically after it ends, waiting RestartDelay."],
      ["Restart Delay","number","7","range 0 – 20"],
      ["Sprint Constantly","toggle","on","Keep sprinting while flying, even between hops."],
      ["Manual Takeoff","toggle","off","Only start gliding when you jump yourself, never automatically."],
      ["Jump Delay","number","0","range 0 – 20"]
    ]],
    "ElytraControl": ["Meteor-style elytra control: your keys drive the flight vector, no fireworks needed.", [
      ["Fall Multiplier","number","0.01","range 0.0 – 1.0"],
      ["Horizontal Speed","number","1.0","range 0.0 – 10.0"],
      ["Vertical Speed","number","1.0","range 0.0 – 10.0"],
      ["Acceleration","toggle","off","Ramp speed up from AccelerationStart to the full speed instead of snapping to it."],
      ["Acceleration Step","number","1.0","range 0.1 – 5.0"],
      ["Acceleration Start","number","0.0","range 0.0 – 5.0"],
      ["Auto Takeoff","toggle","off","Start gliding automatically when you jump with an elytra equipped."],
      ["Stop In Water","toggle","on","Stop the controlled flight as soon as you touch water."],
      ["HazeyBypassAttempt","toggle","off","Swaps your worn elytra for a chestplate for a short window on a fixed interval, then puts the elytra back on."],
      ["OneTick","toggle","off","Keep the chestplate on for a single tick instead of the set time."],
      ["Frequency","number","5.0","Seconds the elytra stays on between two chestplate windows."],
      ["Time","number","1.0","How long the chestplate stays on, in seconds."],
      ["Refly","toggle","on","Start gliding again as soon as the elytra is back on, so you keep flying through the swap."],
      ["Keeper+","toggle","on","FakeFly-style keeper: while the chestplate window is on, re-start the glide every tick so the client keeps flying while the server only sees the chestplate."],
      ["Debug","toggle","off","Print every HazeyBypassAttempt step to chat (equip, clicks, block reasons)."]
    ]],
    "ElytraDash": ["Swap on your elytra, lift straight into flight, and auto-fire fireworks; swaps back on disable.", [
      ["Takeoff","mode","VELOCITY","one of: VELOCITY, VANILLA"],
      ["MinBoostTicks","number","3","range 0 – 20"]
    ]],
    "ElytraFly": ["Steer your elytra flight with WASD; auto-fires fireworks for thrust.", [
      ["LockPitch","toggle","on","Hold Pitch instead of your look pitch while flying."],
      ["Pitch","number","0.0","range -45.0 – 45.0"],
      ["ClimbPitch","number","45.0","range 15.0 – 89.0"],
      ["Hover","toggle","off","Hover in place with HoverPitch when no movement keys are held."],
      ["HoverPitch","number","-1.3","range -45.0 – 0.0"],
      ["AutoRocket","toggle","off","Fire fireworks automatically to keep thrust."]
    ]],
    "FakeFly": ["Keeps a chestplate on the server while the client glides (MaceAura forces it).", [
      ["DelayMs","number","0","range 0 – 1000"],
      ["PulseMode","mode","INVENTORY","one of: INVENTORY, PACKET"],
      ["Control","mode","FIREWORK","one of: FIREWORK, SPEED"],
      ["VerticalSpeed","number","0.0","range -3.0 – 3.0"],
      ["HorizontalSpeed","number","1.0","range 0.1 – 3.0"],
      ["FireworkInterval","number","20","range 5 – 60"],
      ["InstantStop","toggle","off","Tell the server you stopped gliding immediately when FakeFly ends."]
    ]],
    "FastAccel": ["Accelerates movement instantly.", [
      ["InAir","toggle","off","Also accelerate while you are in the air."],
      ["InWater","toggle","off","Also accelerate while you are in water."],
      ["Speed","number","1.0","range 0.1 – 5.0"]
    ]],
    "FastPortal": ["Throws an ender pearl when inside nether portals", [
      ["Cooldown","number","2.0","range 0.5 – 20.0"]
    ]],
    "NoFall": ["Prevents you from taking fall damage.", [
      ["Mode","mode","PACKET","Packet rewrites the onGround flag of your movement packets. Grim sends one on-ground packet just before you land."],
      ["GroundDistance","number","1.0","Grim: blocks above the ground at which the on-ground packet is sent. Smaller is more legit, but the timing is riskier."]
    ]],
    "NoJumpDelay": ["Removes the delay between jumps.", [

    ]],
    "NoSlow": ["remove slowdown", [
      ["Crawl","toggle","on","Keep normal speed while crawling."],
      ["Eat","toggle","on","Keep normal speed while eating, if server TPS is above 18."]
    ]],
    "Parkour": ["Automatically jumps at the edge of blocks.", [

    ]],
    "SafeWalk": ["Prevents you from walking off ledges.", [
      ["Legit","toggle","off","Sneak at the edge instead of stopping, with Offset as the maximum overhang."],
      ["Offset","number","0.3","range 0.0 – 0.5"]
    ]],
    "Scaffold": ["Places blocks beneath you as you walk, through the PlacementManager. No rotations.", [
      ["Radius","number","1.0","range 1.0 – 5.0"],
      ["Depth","number","1","range 1 – 5"],
      ["Lookahead","number","1.0","range 0.0 – 5.0"],
      ["Render","toggle","on","Draw the blocks Scaffold is about to place.","Render"],
      ["FadeTime","number","0.5","range 0.05 – 2.0","Render"],
      ["LineWidth","number","1.5","range 0.5 – 5.0","Render"],
      ["LineColor","color","rgba(85, 255, 85, 180)","Outline colour of the scaffold preview.","Render"],
      ["FillColor","color","rgba(85, 255, 85, 35)","Fill colour of the scaffold preview.","Render"]
    ]],
    "Sprint": ["Automatically sprints whenever you move. Omni sprints in any direction.", [
      ["Mode","mode","NORMAL","one of: NORMAL, OMNI"]
    ]],
    "Strafe": ["Mint air strafe: keeps horizontal speed up in the air, never jumps.", [
      ["SlowFall","toggle","off","Limit fall speed and fall distance with FallSpeed and FallDistance."],
      ["FallSpeed","number","0.85","range 0.45 – 1.0"],
      ["FallDistance","number","1.25","range 0.5 – 2.0"]
    ]],
    "TickShift": ["Stores acceleration while standing still and releases it while moving.", [
      ["MaxTicks","number","20","range 1 – 40"],
      ["Packets","number","1","range 1 – 5"],
      ["ChargeSpeed","number","1","range 1 – 5"]
    ]],
    "Velocity": ["Cancels knockback, explosions, and entity/block push.", [
      ["PhaseOnly","toggle","on","Only cancel velocity while you are inside a block (phasing)."],
      ["Knockback","toggle","on","Cancel knockback from attacks."],
      ["Explosions","toggle","off","Cancel explosion velocity."],
      ["EntityPush","toggle","on","Cancel being pushed by entities."],
      ["BlockPush","toggle","on","Cancel being pushed by pistons and other blocks."]
    ]]
  }
});
