var iFileName = "beastheart_final.js";

RequiredSheetVersion('13');

/* ==== INFORMATION =======================================	
    Subject:	Class and Subclasses
    Effect:		This script adds the Beastheart class, 
                developed by MCDM (mcdmproductions.com).
    Code by:	G33x
    Date:		2025-10-04 (sheet v13.x.x)
    Notes:		This file adds optional material to "MPMB's 
                Character Record Sheet" found at 
                https://flapkan.com/mpmb/charsheets

                It is recommended to enter the code in a 
                fresh sheet before adding any other 
                information (i.e. before making your 
                character with it).
======================================================== */
/* ==== SOURCE ========================================= */
SourceList["BHMC"] = {
  name : "Beastheart & Monstrous Companions",
  abbreviation : "BHMC",
  group : "MCDM",
  date : "2021/10/05"
};
/* ===================================================== */


/*  DEBUGGING
    Acrobat error offset ≈ +2600 lines
   (i.e. Acrobat line 2756 = real line 156)
*/
/* --------------------------------------------------------
   Beastheart and Monstrous Companions (MCDM)
   Custom Class & Companion Add-On for MPMB Character Sheet
   --------------------------------------------------------
*/ 

/* -------------------------------------------------------------------------
   Beastheart Companion Global Helpers
   ------------------------------------------------------------------------- */
  
  
   // Create Beastheart Companion function
    var createBeastheartCompanion = function (bhcomp) {
    var types = {
        'basilisk': {
            compName : "Basilisk",
            compSize : 3,
            compType : "Monstrosity",
            compAC : 15,
            compHP : 7,
            compMove : "30ft",
            compStats : [16,10,15,5,12,10],
            compSaves : ["","","2","","",""],
            compSkills: {               
                "Athletics" : "+3",
                "Survival" : "+1"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 11,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Poison Spittle (2 Ferocity)",
            comp1stLevelTraitDesc : "A signature attack that deals\n  PB extra damage and one creature within 5ft also takes\n  PB poison damage.",
            comp3rdLevelTraitName : "Poison Gaze (5 Ferocity)",
            comp3rdLevelTraitDesc : "3 creatures basilisk can see in\n  15ft - Con save or become poisoned",
            comp5thLevelTraitName : "Lesser Petrifying Gaze (8 Ferocity)",
            comp5thLevelTraitDesc : "Target within 30ft\n  must make Con save or be restrained. On fail, target\n  must repeat save at the end of next turn or become\n  petrified for 1 hour",
            compDescription : "is a multilegged, reptilian horror whose deadly gaze transforms victims into stone.",
            compBaseTraitName : "Heavy Glare",
            compBaseTraitDesc : "When I hit a target that the basilisk\n  can see, the target must make a Con save or it can't\n  make opportunity attacks and its speed is reduced by\n  10ft until the start of its next turn.",
        },
        'blood hawk': {
            compName : "Blood Hawk",
            compSize : 4,
            compType : "Beast",
            compAC : 13,
            compHP : 7,
            compMove : "10ft, Fly 60ft",
            compStats : [8,16,12,5,14,10],
            compSaves : ["","","3","","2",""],
            compSkills: {
                "Perception" : "+2"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 12,
            compSenses : "Keen Sight:\nAdv on sight-based Wis (Perception) checks",
            compLangs : "",
            compSigAttackName : "Beak",
            compSigDamageType : "piercing",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Distracting Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, next attack against target has advantage",
            comp3rdLevelTraitName : "Swooping Attack (5 Ferocity)",
            comp3rdLevelTraitDesc : "Move up to speed without\n  provoking opportunity attacks. Make signature attack\n  any time during the move. A hit has normal effect and\n  target makes Dex save or drop one held item.",
            comp5thLevelTraitName : "Storm of Talons (8 Ferocity)",
            comp5thLevelTraitDesc : "Move up to speed without\n  provoking opportunity attacks and make a signature\n  attack against one creature within 5ft. Target must make\n  a Dex save or takes PB x d10 slashing damage and is\n  blinded until end of hawk's next turn. Target takes half\n  damage on successful save and isn't blinded.",
            compDescription : "takes its name from its crimson feathers and aggressive nature, the blood hawk\n  fearlessly attacks almost any animal, stabbing it with its dagger-like beak.",
            compBaseTraitName : "Swoop In (Reaction: 1/Long Rest)",
            compBaseTraitDesc : "If I am within 30ft of\n  hawk and get hit by an attack, the hawk can fly to me\n  without provoking opportunity attacks. If it ends its\n  move within 5ft of me, it takes the hit instead, but only\n  takes half damage.",
            compBaseFeatureName : "",
            compBaseFeatureDesc : ""
        },
        'bulette': {
            compName : "Bulette",
            compSize : 2,
            compType : "Monstrosity",
            compAC : 15,
            compHP : 7,
            compMove : "30ft, Burrow 30ft",
            compStats : [16,10,15,5,8,8],
            compSaves : ["","","2","","",""],
            compSkills: {
                "Perception" : "+2"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 9,
            compSenses : "Darkvision 60ft, Tremorsense 30ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Violent Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, deal PB extra damage and move\n  target 5ft in any direction.",
            comp3rdLevelTraitName : "Burrowing Trip (5 Ferocity)",
            comp3rdLevelTraitDesc : "Move up to half burrowing\n  speed without provoking opportunity attacks. Each\n  creature standing on the ground bulette moves under\n  must make a Dex Save or fall prone.",
            comp5thLevelTraitName : "Deadly Leap (8 Ferocity)",
            comp5thLevelTraitDesc : "Bulette leaps 30ft. If it lands on\n  one or more creatures, those creatures must make a Str\n  save or take PB x d6 bludgeoning damage and be\n  knocked prone. On success, the targets take half damage\n  and is moved to a space of the Bulette's choice within\n  5ft. If no space is available, it remains prone in\n  Bulette's square.",
            compDescription : "or the 'land shark' is a massive predator that lives only to feed and terrorizes\n   any lands it inhabits.",
            compBaseTraitName : "Plated Protection",
            compBaseTraitDesc : "I can ride the bulette while it is\n  burrowing.",
            compBaseFeatureName : "",
            compBaseFeatureDesc : ""
        },
        'deinonychus': {
            compName : "Deinonychus",
            compSize : 3,
            compType : "Beast",
            compAC : 13,
            compHP : 7,
            compMove : "40ft",
            compStats : [15,16,14,5,12,8],
            compSaves : ["2","3","","","",""],
            compSkills: {               
                "Perception" : "+1",
                "Stealth" : "+3"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 11,
            compSenses : "",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Overwhelming Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, deal extra PB damage\n  and target cannot take reactions until the start of\n  Deinonychus' next turn.",
            comp3rdLevelTraitName : "Clever Girl (5 Ferocity)",
            comp3rdLevelTraitDesc : "Deinonychus can take a Hide\n  action before or after making a signature attack. If the\n  attack hits, the target is knocked prone. Deinonychus\n  can move between the Hide and attack actions and\n  remain hidden even if the movement would negate hide.",
            comp5thLevelTraitName : "Keep Them Down (8 Ferocity)",
            comp5thLevelTraitDesc : "Leap at target within 5ft.\n  Target must make Dex save or take PB x d12 slashing\n  damage, falls prone, and is grappled (DC 10+PB). Target\n  can't stand while it is grappled. If deinonychus attacks a\n  different target, the grapple ends.",
            compDescription : "exudes a dangerous ferocity. Each foot is armed with a large, sickle-shaped\n  claw.",
            compBaseTraitName : "Part of the Pack (1/Long Rest)",
            compBaseTraitDesc : "If I am charmed, stunned,\n  or frightened, and within 5ft of deinonychus, it can end\n  one of those conditions.",
            compBaseFeatureName : "",
            compBaseFeatureDesc : ""
        },
        'earth elemental': {
            compName : "Earth Elemental",
            compSize : 2,
            compType : "Elemental",
            compAC : 15,
            compHP : 7,
            compMove : "30ft, Burrow 30ft",
            compStats : [16,8,15,5,10,8],
            compSaves : ["","","2","","",""],
            compSkills: {
                "Athletics" : "+2"
            },
            compDR : "",
            compImms : "Poison",
            compCondImms : "Petrified,\n  Poisoned",
            compPP : 10,
            compSenses : "Darkvision 60ft, Tremorsense 30ft",
            compLangs : "",
            compSigAttackName : "Slam",
            compSigDamageType : "bludgeoning",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Stretch Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  against any target in 10ft. On hit, deal extra PB damage\n  and pull target 5ft closer.",
            comp3rdLevelTraitName : "Earthshaker (5 Ferocity)",
            comp3rdLevelTraitDesc : "The elemental strikes the\n  ground. Each creature within 10ft must make a Dex save\n  or be knocked prone. I automatically make the save.",
            comp5thLevelTraitName : "Transmute Ground (8 Ferocity)",
            comp5thLevelTraitDesc : "Pick a 10ft square that\n  the elemental can see within 30ft. Each creature standing\n  in the area must make a Str save or become restrained. A\n  creature can use their action to make a Str save to free\n  themselves or another creature, ending the restrained\n  condition.",
            compDescription : "consists of dirt and stone, occasionally set with chunks of metal, gems, and\n  bright minerals.",
            compBaseTraitName : "Toss Me",
            compBaseTraitDesc : "If I am within 5ft, elemental can hurl me 5ft x\n  PB in any direction (including up). If I would normally\n  take damage from landing, they can make a DC15 Dex\n  save to take none.",
            compBaseFeatureName : "Earth Glide",
            compBaseFeatureDesc : "The elemental can burrow\n  through nonmagical, unworked earth and\n  stone and doesn't disturb the material it\n  moves through. While using Earth Glide,\n the elemental can't be used as a mount."
        },
        'gelatinous cube': {
            compName : "Gelatinous Cube",
            compSize : 2,
            compType : "Ooze",
            compAC : 11,
            compHP : 8,
            compMove : "30ft",
            compStats : [16,8,16,5,10,8],
            compSaves : ["","","2","","",""],
            compSkills: {
                "Stealth" : "-1"
            },
            compDR : "",
            compImms : "Acid",
            compCondImms : "Blinded, Deafened,\n  Prone",
            compPP : 10,
            compSenses : "Blindsight 60ft (Blind beyond 60ft)",
            compLangs : "",
            compSigAttackName : "Pseudopod",
            compSigDamageType : "acid",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Burning Acid (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  with a reach of 10ft. On hit, deal extra PB acid damage.\n  Target can't regain HPs until the start of my next turn.",
            comp3rdLevelTraitName : "Slime Shower (5 Ferocity)",
            comp3rdLevelTraitDesc : "Cube showers all within 5ft,\n  except me, with acidic slime. Each creature in the area\n  must make a Dex save or take 1d6 acid damage and\n  their speed is reduced to 0 until the start of cube's next\n  turn.",
            comp5thLevelTraitName : "Engulf (8 Ferocity)",
            comp5thLevelTraitDesc : "Select target within 5ft. Target must\n  make a Dex save or be engulfed by the cube, taking\n  PBd6 acid damage and the target moves into the cube's\n  space. While engulfed, the target is restrained, can't\n  breathe, and takes PBd6 acid damage at the start of each\n  of cube's turns. The target must succeed on a Str check\n  to escape and move to a square of its choice within 5ft.\n  Only 1 large, or 4 medium or smaller creatures can be\n  engulfed at a time",
            compDescription : "is a quivering mass of transparent, acidic goo... roughly in the shape of a\n   cube.",
            compBaseFeatureName : "Flowing Form",
            compBaseFeatureDesc : "I can enter and move\n  through the cube's space without\n  restriction or being engulfed and can\n  attack or interact with any engulfed\n  creature without taking damage from or\n  dealing damage to the cube.",
            compBaseFeature2Name : "Transparent",
            compBaseFeature2Desc : "When cube is in plain sight\n  and has not moved or attacked it can\n  only be spotted with a successful Wis\n  (Perception) check. Any unaware creature\n  that moves into the cube's space takes\n  1d6 acid damage and doesn't enter\n  cube's space.",
        },
        'giant toad': {
            compName : "Giant Toad",
            compSize : 2,
            compType : "Beast",
            compAC : 13,
            compHP : 7,
            compMove : "30ft, Swim 30ft",
            compStats : [16,12,15,5,10,10],
            compSaves : ["3","","3","","",""],
            compSkills: {
                "Athletics" : "+3",
                "Perception" : "+0"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 10,
            compSenses : "Darkvision 30ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "bludgeoning",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Stretch Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack with a\n  reach of 10ft. Attack deals PB extra damage and\n  target is pulled 5ft toward toad.",
            comp3rdLevelTraitName : "Fast Food (5 Ferocity)",
            comp3rdLevelTraitDesc : "Make a signature attack. After \n  attacking, toad can jump 20ft in any direction\n without provoking opportunity attacks. If the target is\n  large or smaller, toad drags target with them",
            comp5thLevelTraitName : "Swallow (8 Ferocity)",
            comp5thLevelTraitDesc : "Toad tries to swallow a medium or smaller target within 5ft. Target must make a Dex save or take PBd6 bludgeoning damage and is swallowed. Success means target takes half damage and isn't swallowed. Swallowed targets are blinded and restrained, have total cover against attacks and effect outside of the toad and take PBd6 acid damage at the start of toad's turn. If toad takes damage it must make a con save equal to 10 or half the damage (whichever is higher). If toad dies or is incapacitated, swallowed target is no longer restrained and can exit the toad using 5ft of movement. Toad can only swallow 1 target at a time.",
            compDescription : "can be as large as a horse or even a small house, its bumpy skin glistening with moisture.",
            compBaseTraitName : "Psychedelic Skin (1/Long Rest)",
            compBaseTraitDesc : "If I am within 5ft of toad, as \n  a bonus action, it can coat my weapon with poison secreted from the toad's skin, which lasts for one hour or until I hit a creature with my weapon. When I hit a creature with my weapon, it must make a Con save or be poisoned for 1 minute. the creature can repeat the save at the end of their turn to end the effect.",
            compBaseFeatureName : "Amphibious",
            compBaseFeatureDesc : "Toads can breathe both air and water.",
            compBaseFeature2Name : "Standing Leap",
            compBaseFeature2Desc : "Toad can leap up to 20ft long or 10ft high without a running start.",
        },
        'giant spider': {
            compName : "Giant Spider",
            compSize : 2,
            compType : "Beast",
            compAC : 13,
            compHP : 6,
            compMove : "30ft, Climb 30ft",
            compStats : [15,16,12,5,10,8],
            compSaves : ["2","3","","","",""],
            compSkills: {
                "Stealth" : "+3"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 10,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Destabilizing Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, target has disadvantage on next attack roll\n  they make before the start of Spider's next turn.",
            comp3rdLevelTraitName : "Web (5 Ferocity)",
            comp3rdLevelTraitDesc : "Spider shoots sticky webs at a target\n  they can see within 60 feet. Target must make a Dex save\n  or be restrained by webs. As an action, the target can\n  make a Str check, to end the restrained condition.",
            comp5thLevelTraitName : "Bite Frenzy (8 Ferocity)",
            comp5thLevelTraitDesc : "Make signature attack against a\n  number of creatures of your choice equal to your PB\n  within 5 feet of Spider. On a hit, the target is poisoned\n  until the end of their next turn.",
            compDescription : "spins elaborate webs or shoots sticky strands of webbing from its\n   abdomen, to snare its prey.",
            compBaseTraitName : "Sticky Stuff (1/Long Rest)",
            compBaseTraitDesc : "If I am within 5ft of spider, it\n  can coat my feet or footwear in an adhesive that allows\n  me to move across vertical surfaces and ceilings, leaving\n  my hands free. I gain a climb speed equal to my walking\n  speed. Lasts for 10 minutes.",
            compBaseFeatureName : "Spider Climb",
            compBaseFeatureDesc : "The spider can climb\n  difficult surfaces, including upside down\n  on ceilings, without requiring an ability\n  check.",
            compBaseFeature2Name : "Web Sense",
            compBaseFeature2Desc : "Spider knows the exact\n  location of any creature touching the\n  same web.",
            compBaseFeature3Name : "Web Walker",
            compBaseFeature3Desc : "Ignore any movement\n  restrictions caused by webs."
        },
        'giant weasel': {
            compName : "Giant Weasel",
            compSize : 3,
            compType : "Beast",
            compAC : 13,
            compHP : 7,
            compMove : "40ft",
            compStats : [12,16,14,5,12,10],
            compSaves : ["2","3","","","",""],
            compSkills: {
                "Acrobatics" : "+3",
                "Perception" : "+1",
                "Stealth" : "+3"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 11,
            compSenses : "Darkvision 60ft. Adv on perception checks that rely on hearing or smell.",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Overwhelming Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, deal PB extra damage and target has can't\n  take reactions until the start of Weasel's\n  next turn.",
            comp3rdLevelTraitName : "Clamp Down (5 Ferocity)",
            comp3rdLevelTraitDesc : "Make a signature attack. On\n  hit, target is grappled. While grappled, target is\n  restrained but Weasel can't bite another target.",
            comp5thLevelTraitName : "Bite Frenzy (8 Ferocity)",
            comp5thLevelTraitDesc : "Make signature attack against a\n  number of creatures of your choice equal to your PB\n  within 5ft of Weasel. On hit, the target is knocked prone.",
            compDescription : "is a fast, clever, and wolf-sized predator with sleek, muscular bodies that range\n  in color from reddish-brown to snowy white.",
            compBaseTraitName : "",
            compBaseTraitDesc : "",
            compBaseFeatureName : "Treasure Sense",
            compBaseFeatureDesc : "Can detect gems and\n  precious metals within 10ft."
        },
        'hell hound': {
            compName : "Hell Hound",
            compSize : 3,
            compType : "Fiend",
            compAC : 13,
            compHP : 7,
            compMove : "50ft",
            compStats : [16,12,14,6,12,8],
            compSaves : ["","","2","","",""],
            compSkills: {
                "Perception" : "+1"
            },
            compDR : "",
            compImms : "Fire",
            compCondImms : "",
            compPP : 10,
            compSenses : "Darkvision 60ft. Adv on perception checks that rely on hearing or smell.",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Lava Spittle (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, deal PB extra damage and creature of your\n  choice within 5ft of target takes PB fire damage.",
            comp3rdLevelTraitName : "Brutal Charge (5 Ferocity)",
            comp3rdLevelTraitDesc : "Hell Hound can use its action\n  to move up to its speed without provoking opportunity\n  attacks and can make one signature attack against a\n  single target during or at the end of its move.",
            comp5thLevelTraitName : "Fire Breath (8 Ferocity)",
            comp5thLevelTraitDesc : "Exhale fire in a 15ft cone. Each\n  creature in the area must make a Dex save or take PBd6\n  fire damage or half damage on a save.",
            compDescription : "is a fire-breathing fiend in the form of a powerful dog.",
            compBaseTraitName : "",
            compBaseTraitDesc : "",
            compBaseFeatureName : "Consult Hell (1/Long Rest)",
            compBaseFeatureDesc : "I can talk to\n  the Hell Hound, tapping into the divinatory\n  powers of Hell, and discuss plans I intend\n  to take in the next 30 minutes. After a\n  minute, the hound will respond with 1\n  bark for good results, 2 barks for bad\n  results, 3 barks for both good and bad\n  results, and no barks for results that\n  aren't good or bad.",
        },
        'mimic': {
            compName : "Mimic",
            compSize : 3,
            compType : "Monstrousity",
            compAC : 13,
            compHP : 7,
            compMove : "30ft",
            compStats : [16,12,15,5,12,8],
            compSaves : ["","3","","","",""],
            compSkills: {
                "Stealth" : "+1"
            },
            compDR : "",
            compImms : "acid",
            compCondImms : "Prone",
            compPP : 11,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Distracting Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, next attack against target has advantage.",
            comp3rdLevelTraitName : "Adhesive Pseudopods (5 Ferocity)",
            comp3rdLevelTraitDesc : "Mimic tries to touch\n  each creature within 5ft. All targets must make a Dex\n  save or become grappled.",
            comp5thLevelTraitName : "I'm You (8 Ferocity)",
            comp5thLevelTraitDesc : "Mimic polymorphs into creature\n  within 5ft that they can see and can make a Signature\n  Attack against the target. Target must make a Wis save or\n  all attacks against target has advantage, and all of target's attacks and saves are made at disadvantage.",
            compDescription : "is a shapeshifting predator who usually takes the form of inanimate\n   objects to lure its prey.",
            compBaseTraitName : "Wearable Companion",
            compBaseTraitDesc : "If I am within 5ft of mimic, it\n  it can take on the appearance of clothing and, if it has\n  advantage on stealth checks and isn't incapacitated, can\n  change the appearance at will (no action reqd). While it\n  has the appearance of clothing, it cannot attack or use\n  abilities and any attacks that hit me also hit the mimic\n  dealing full damage to us both and vice versa. ",
            compBaseFeatureName : "Shapechanger",
            compBaseFeatureDesc : "Mimic can use its action\n  to polymorph into an object or to their\n  true amorphous form. Any equipment\n  they are wearing or carrying doesn't\n  transform with them. Mimic reverts to its\n  true form when it dies. Mimic retains its\n  stats regardless of what form it takes.",
            compBaseFeature2Name : "False Appearance (Object Form Only)",
            compBaseFeature2Desc : "\n  Mimic appears to be an ordinary object\n  while in object form.",
        },
        'owlbear': {
            compName : "Owlbear",
            compSize : 2,
            compType : "Monstrousity",
            compAC : 13,
            compHP : 7,
            compMove : "40ft",
            compStats : [16,12,15,5,12,10],
            compSaves : ["3","","2","","",""],
            compSkills: {
                "Athletics" : "+3",
                "Perception" : "+1"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 11,
            compSenses : "Darkvision 60ft. Adv on perception checks that rely on hearing or smell.",
            compLangs : "",
            compSigAttackName : "Claws",
            compSigDamageType : "slashing",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Violent Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack. On\n  hit, deal PB extra damage and move target 5ft in any\n  direction.",
            comp3rdLevelTraitName : "Owlie Oop (5 Ferocity)",
            comp3rdLevelTraitDesc : "Owlbear leaps up to 20ft without\n  provoking opportunity attacks. When it lands, each\n  creature within 5ft must make a Str save or be knocked\n  prone.",
            comp5thLevelTraitName : "Bear Hug (8 Ferocity)",
            comp5thLevelTraitDesc : "Owlbear tries to grab and\n  crush a target within 5ft. Target must make Dex save or\n  take PBd10 bludgeoning damage and is grappled and\n  restrained. If target saves, they take half damage and are\n  not grappled or restrained,",
            compDescription : "is a monstrous cross between giant owl and bear, an owlbear's reputation for\n   ferocity and aggression makes it one of the most feared predators of the wild.",
            compBaseTraitName : "Give a Hoot (1/Long Rest)",
            compBaseTraitDesc : "Owlbear hoots a unique\n  battlecry. If I am able to hear it, I gain 5 x PB temporary\n  hit points.",
        },
        'sporeling': {
            compName : "Sporeling",
            compSize : 3,
            compType : "Plant",
            compAC : 13,
            compHP : 7,
            compMove : "30ft",
            compStats : [8,16,15,5,12,12],
            compSaves : ["","","2","","",""],
            compSkills: {
                "Perception" : "+1"
            },
            compDR : "",
            compImms : "acid, poison",
            compCondImms : "poisoned",
            compPP : 11,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Corruption Cough",
            compSigDamageType : "acid",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Destabilizing Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, target has disadvantage on next attack roll\n  they make before the start of Sporeling's next turn.",
            comp3rdLevelTraitName : "Spore Burst (5 Ferocity)",
            comp3rdLevelTraitDesc : "All creatures of choice within 5ft of\n  Sporeling, must make a Con save or become\n  poisoned until the start of Sporeling's next turn.",
            comp5thLevelTraitName : "Hallucinogenic Spores (8 Ferocity)",
            comp5thLevelTraitDesc : "Each enemy within 10ft\n  must make a Con save. On a failure, Sporeling chooses\n  whether the target creature uses their reaction\n  make a melee attack against a creature of Sporeling's\n  choice or fall prone",
            compDescription : "is a halfling-sized mushroom with two arms, four legs, and a face growing\n   out of their stalk underneath a brightly colored cap.",
            compBaseTraitName : "Invigorating Spores (1/Long Rest)",
            compBaseTraitDesc : "While I am within 30ft\n  of sporeling, Sporeling can use a bonus action to give\n  me advantage on saving throws for 1 minute.",
            compBaseFeatureName : "False Appearance",
            compBaseFeatureDesc : "If Sporeling remains\n  still, it is indistinguishable from an\n  ordinary fungus.",
        },
        'worg': {
            compName : "Worg",
            compSize : 3,
            compType : "Monstrousity",
            compAC : 13,
            compHP : 7,
            compMove : "30ft",
            compStats : [16,15,14,7,12,10],
            compSaves : ["3","2","","","",""],
            compSkills: {
                "Perception" : "+1"
            },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 10,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Overwhelming Attack (2 Ferocity)",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, deal extra PB damage\n  and target cannot take reactions until the start of\n  Worg's next turn.",
            comp3rdLevelTraitName : "Brutal Charge (5 Ferocity)",
            comp3rdLevelTraitDesc : "Worg can use its action\n  to move up to its speed without provoking opportunity\n  attacks and can make one signature attack against a\n  single target during or at the end of its move.",
            comp5thLevelTraitName : "Bite Frenzy (8 Ferocity)",
            comp5thLevelTraitDesc : "Make signature attack against a\n  number of creatures of your choice equal to your PB\n  within 5ft of Worg. On hit, the target is knocked prone.",
            compDescription : "is a monstrous wolf-like predator that delights in hunting\n  and devouring creatures weaker than itself.",
            compBaseTraitName : "Move As One",
            compBaseTraitDesc : "If I am mounted on Worg,\n  opportunity attacks against me or Worg are made with disadvantage.\n  I can mount or dismount Worg by spending 5ft of movement.",
        },
    };
    // Set up variables
    var lvl = Number(What("Classes.Beastheart.level")) || 0;
    var wis = What("Wis Mod");
    var sub = What("ClassSub.beastheart");

    var type = types[bhcomp];
    if (!type) return false;

    var creature = {
        name : "Companion",
        nameAlt : [type.compName],
        minlevelLinked : ["beastheart"],
        header : "Beastheart comp.",
        source : [["BHMC", 0]],
        size : type.compSize, // Medium
        type : type.compType,
        alignment : "Unaligned",
        ac : type.compAC,
        hp : type.compHP,
        hd : [lvl, 8],
        minlevelLinked : ["beastheart"],
        hdLinked : ["beastheart"],
        speed : type.compMove,
        scores : type.compStats,
        saves : type.compSaves,
        skills : type.compSkills,
        damage_resistances : type.compDR,
        damage_immunities : type.compImms,
        condition_immunities : type.compCondImms,
        passivePerception : type.compPP,
        senses : type.compSenses,
        languages : type.compLangs,
        challengeRating : "1",
        proficiencyBonusLinked : true,
        attacksAction : 1,
        attacks : [{
            name : "Signature Attack (Tier 1)",
            ability : type.compAttackAbility || 1,
            damage : [1, 6, type.compSigDamageType || "piercing"],
            range : "Melee (5 ft)",
            description : "",
            abilitytodamage : true,
            modifiers: ["", "+oProf"]
            },
            {
            name : "Signature Attack (Tier 2)",
            ability : type.compAttackAbility || 1,
            damage : [2, 6, type.compSigDamageType || "piercing"],
            range : "Melee (5 ft)",
            description : "",
            abilitytodamage : true,
            modifiers: ["", "+oProf"]
            },
            {
            name : "Signature Attack (Tier 3)",
            ability : type.compAttackAbility || 1,
            damage : [3, 6, type.compSigDamageType || "piercing"],
            range : "Melee (5 ft)",
            description : "",
            abilitytodamage : true,
            modifiers: ["", "+oProf"]
            },
            {
            name : "Signature Attack (Tier 4)",
            ability : type.compAttackAbility || 1,
            damage : [4, 6, type.compSigDamageType || "piercing"],
            range : "Melee (5 ft)",
            description : "",
            abilitytodamage : true,
            modifiers: ["", "+oProf"]  
        }],
        features: [
        {
                eval : function (prefix) {
                    var baseAC = CurrentCompRace[prefix] ? CurrentCompRace[prefix].ac : 15;
                    var charLevel = Number(What("Character Level")) || 1;
                    var subclass = (classes.known.beastheart.subclass || "").toLowerCase();
                    var thickHide = (charLevel >= 7 && subclass.indexOf("protector bond") !== -1) ? 2 : 0;
                    var finalAC = baseAC + thickHide;
                    Value(prefix + "Comp.Use.AC", finalAC);
                },
                changeeval : function (prefix) {
                    var baseAC = CurrentCompRace[prefix] ? CurrentCompRace[prefix].ac : 15;
                    var charLevel = Number(What("Character Level")) || 1;
                    var subclass = (classes.known.beastheart.subclass || "").toLowerCase();
                    var thickHide = (charLevel >= 7 && subclass === "protector bond") ? 2 : 0;
                    var finalAC = baseAC + thickHide;
                    Value(prefix + "Comp.Use.AC", finalAC);
                    },
                removeeval : function (prefix, ac) {
                    Value(prefix + "Comp.Use.AC", ac);
                }
        },
        {
            name : "Signature Attack",
            minlevel : 1,
            description : type.compName + "'s\n  " + type.compSigAttackName + " damage die increases by 1d6\n  at levels 5, 11, and 17.",
            eval : function(prefix, lvl) {
                var crea = CurrentCompRace[prefix];
                Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
                Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
                Value(prefix + "Comp.Use.Attack.4.Weapon Selection", "");
            },
            changeeval : function(prefix) {
                var crea = CurrentCompRace[prefix];
                Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
                Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
                Value(prefix + "Comp.Use.Attack.4.Weapon Selection", "");
            }
            },
            {
            name : "Signature Attack (Level 5)",
            minlevel : 5,
            eval : function(prefix) {
                var crea = CurrentCompRace[prefix];
                Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Signature Attack (Tier 2)");
                },
            changeeval : function(prefix) {
                var crea = CurrentCompRace[prefix];
                Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Signature Attack (Tier 2)");
                }
            },
            {
            name : "Signature Attack (Level 11)",
            minlevel : 11,
            eval : function(prefix) {
                Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Signature Attack (Tier 3)");
                },
            changeeval : function(prefix) {
                Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Signature Attack (Tier 3)");
                }
            },
            {
            name : "Signature Attack (Level 17)",
            minlevel : 17,
            eval : function(prefix) {
                Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Signature Attack (Tier 4)");
                },
            changeeval : function(prefix) {
                Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Signature Attack (Tier 4)");
                }
            },
            {
            name : "Ferocity",
            description : "At the start of " + type.compName + "'s\n  turn, it gains 1d4 Ferocity and gain an\n  extra +1 for each creature it can see and gain an extra +1 at levels 6, 10, and 15.",
            }
        ],
        traits: [{
            name : type.comp1stLevelTraitName,
            minlevel : 1,
            description : type.comp1stLevelTraitDesc,
        },
        {
            name : type.comp3rdLevelTraitName,
            minlevel : 3,
            description: type.comp3rdLevelTraitDesc,
        },
        {
            name : type.comp5thLevelTraitName,
            minlevel : 5,
            description: type.comp5thLevelTraitDesc,
        }],
        notes: [{
            name : type.compName + " Companion",
            description : desc([
            "My " + type.compName.toLowerCase() + " companion " + type.compDescription,
            "The " + type.compName.toLowerCase() + " looks to me for leadership and acts on my turn. It gains abilities as I gain Beastheart\n   levels. If my " + type.compName + " companion is injured or dies, I can spend 1 minute meditating and return it to\n   life (if it died) and on full Hit Points but I gain a level of exhaustion."
            ])
        }],
        attributesChange: function (sCrea, objCrea) {
            for (var i = 0; i < objCrea.attacks.length; i++) {
                var oAtk = objCrea.attacks[i];
                if (!oAtk.modifiers) {
                oAtk.modifiers = ["", "oProf"];
                } else {
                oAtk.modifiers[0] += "+oProf";
                oAtk.modifiers[1] += "+oProf";
                oAtk.modifiers[2] += "+oProf";
                oAtk.modifiers[3] += "+oProf";
                }
            }
        },
        changeeval: function (prefix, lvl) {
            var sNameEntity = "Beastheart Companion";
            var sExplanation = "This companion adds your Proficiency Bonus (oProf) to its AC and proficient skills";

            var skillMap = {
                "Acrobatics": "Acr",
                "Animal Handling": "Ani",
                "Arcana": "Arc",
                "Athletics": "Ath",
                "Deception": "Dec",
                "History": "His",
                "Insight": "Ins",
                "Intimidation": "Inti",
                "Investigation": "Inv",
                "Medicine": "Med",
                "Nature": "Nat",
                "Perception": "Perc",
                "Performance": "Perf",
                "Persuasion": "Pers",
                "Religion": "Rel",
                "Sleight of Hand": "Sle",
                "Stealth": "Ste",
                "Survival": "Sur"
            };

            // AC
            var sACfld = prefix + "Comp.Use.AC";
            if (What(sACfld).indexOf("oProf") === -1) {
                AddToModFld(sACfld, "oProf", false, sNameEntity, sExplanation);
            }

            // Skills
            var compSkills = Object.keys(CurrentCompRace[prefix].skills || {});
            for (var i = 0; i < compSkills.length; i++) {
                var skillName = compSkills[i];
                var skillAbbr = skillMap[skillName] || skillName;
                var profFld = prefix + "Comp.Use.Skills." + skillAbbr + ".Prof";
                var modFld = prefix + "BlueText.Comp.Use.Skills." + skillAbbr + ".Bonus";

                if (tDoc.getField(profFld)) {
                tDoc.getField(profFld).checkThisBox(0, true);
                }
                if (What(modFld).indexOf("oProf") === -1) {
                AddToModFld(modFld, "oProf", false, sNameEntity, sExplanation);
                }
            }
            // === Companion DCs: write into Attack 1 description ===
            var level = Number(What("Character Level")) || 0;
            var PB = Number(What("ProfBonus")) || (1 + Math.ceil(level / 4));
            // Companion Wisdom score + mod
var crea = CurrentCompRace[prefix] || {};
var scores = crea.scores || [10, 10, 10, 10, 10, 10];
var compWisScore = Number(scores[4]) || 10;
var compWisMod = Math.floor((compWisScore - 10) / 2);

// Character Wis mod (falls back to 0 if blank)
var charWisMod = Number(What("Wis Mod")) || 0;

// Highest of the two
var wisMod = Math.max(compWisMod, charWisMod);

            var abilityDC = 10 + PB;
            var exploitDC = 8 + wisMod + PB;

            var dcText =
                "DC for Signature Attack Effects = " + abilityDC + " | " +
                "DC for Primal Exploits = " + exploitDC;

            // This field definitely exists
            Value(prefix + "Comp.Use.Attack.1.Description", dcText);
},
        calcChanges : {
            hp : function (totalHD, HDobj, prefix) {
                var creaHP = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 7;
                var bhLvl = classes.known.beastheart.level;
                var bhCompHp = (creaHP * bhLvl) + creaHP;
                HDobj.alt.push(bhCompHp);
            },
            setAltHp : true, 
        }
    };
    if (
        type.compBaseFeatureName && type.compBaseFeatureName.trim() &&
        type.compBaseFeatureDesc && type.compBaseFeatureDesc.trim()
        ) {
        creature.features.push({
            name: type.compBaseFeatureName.trim(),
            description: type.compBaseFeatureDesc.trim()
        });
    };
    if (
        type.compBaseFeature2Name && type.compBaseFeature2Name.trim() &&
        type.compBaseFeature2Desc && type.compBaseFeature2Desc.trim()
        ) {
        creature.features.push({
            name: type.compBaseFeature2Name.trim(),
            description: type.compBaseFeature2Desc.trim()
        });
    };
    if (
        type.compBaseFeature3Name && type.compBaseFeature3Name.trim() &&
        type.compBaseFeature3Desc && type.compBaseFeature3Desc.trim()
        ) {
        creature.features.push({
            name: type.compBaseFeature3Name.trim(),
            description: type.compBaseFeature3Desc.trim()
        });
    };
    if (
        type.compBaseTraitName && type.compBaseTraitName.trim() &&
        type.compBaseTraitDesc && type.compBaseTraitDesc.trim()
        ) {
        creature.traits.push({
            name: type.compBaseTraitName.trim(),
            description: type.compBaseTraitDesc.trim()
        });
    };
    //creature._bhCompSkills = Object.keys(type.compSkills);
    return [creature];
    
}

// Beastheart Base Class

ClassList["beastheart"] = {
    name : "Beastheart",
    regExpSearch : /beastheart/i,
    source : ["BHMC", 25],
    primaryAbility : "\n \u2022 Beastheart: Strength or Dexterity, and Wisdom",
    prereqs : "\n \u2022 Beastheart: Strength or Dexterity 13 & Wisdom 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Str", "Wis"],
    skillstxt : { 
        primary : "Choose three from Animal Handling, Athletics, Intimidation, Nature, Perception, Stealth, and Survival" 
    },
    armorProfs : {
        primary : [true, true, false, true],
        secondary : [false, false, false, false]
    },
    weaponProfs : {
        primary : [true, false, ["battleaxe","greataxe","longbow","scimitar","shortsword","net"]],
        secondary : [false, false],
    },
    equipment : "Beastheart starting equipment:" +
        "\n \u2022 Two martial weapons -or- one martial weapon and a shield" +
        "\n \u2022 Hide armor -or- leather armor, a longbow, and 20 arrows" +
        "\n \u2022 An explorer's pack or a dungeoneer's pack" +
        "\n \u2022 Two handaxes or any simple weapon" +
        "\n\nAlternatively, you can forgo the starting equipment and background equipment, and start with 5d4 x 10 gp.",
    subclasses : ["Companion Bonds", [/* "ferocious bond","hunter bond","infernal bond","primordial bond","protector bond"*/]],
    attacks : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    abilitySave : 5, //Wisdom for Exploit Save DC
    features: {
        "natural language": {
            name : "Natural Language",
            source : ["BHMC", 27],
            minlevel : 1,
            description : desc([
                "You can verbally communicate with non-complex thoughts to beasts and monstrosities. You",
                "can make simple statements and ask simple questions. You are able to comprehend simple",
                "responses. You may use Animal Handling instead of Charisma checks to influence them.",
            ]),
        },
        /* "companion": {
            name : "Companion",
            source : ["BHMC", 27],
            minlevel : 1,
            description : desc([
                "I have a supernatural connection to a creature that accompanies me on my adventures;",
                "fighting, exploring, and living alongside me. My supernatural connection to my",
                "companion binds my life to theirs, allowing them to overcome grievous injuries.",
                "I can spend 1 minute meditating to heal all hit point damage or revive them from",
                "death, but I gain 1 level of exhaustion when I do so. If my companion's body was",
                "destroyed, they form within 5 feet of me."
            ]),
			creaturesAdd : [["Companion", false, function(AddRemove, prefix) {
				if (!AddRemove) return;
				var compOptions = ["Basilisk", "Blood Hawk", "Bulette", "Deinonychus", "Black Dragon Wyrmling", "Blue Dragon Wyrmling", "Brass Dragon Wyrmling", "Bronze Dragon Wyrmling", "Copper Dragon Wyrmling", "Green Dragon Wyrmling", "Gold Dragon Wyrmling", "Red Dragon Wyrmling", "Silver Dragon Wyrmling", "White Dragon Wyrmling", "Earth Elemental", "Gelatinous Cube", "Giant Spider", "Giant Toad", "Giant Weasel", "Hell Hound", "Mimic", "Owlbear", "Sporeling", "Worg"];
				var selectedRace = AskUserOptions("Select Companion", "Select your companion.\nYou can change the beast at any time using the \"Companion Options\" button at the top of the Companion page.", compOptions, "radio", true);
				ApplyCompRace(selectedRace, prefix, "beastheart");
			}]]
		}, */
        "companion bond" : {
      name : "Companion Bond",
      source : ["BHMC", 9-23,27],
      minlevel : 1,
      description : desc([
        "I gain a supernatural companion bound to me.",
        "Choose your companion."
      ]),
      choices : [
        "Basilisk", "Blood Hawk", "Bulette", "Deinonychus", "Earth Elemental", "Gelatinous Cube", "Giant Spider", "Giant Toad", "Giant Weasel","Hell Hound","Mimic","Owlbear","Sporeling","Worg"
      ],

      "basilisk" : {
        name : "Basilisk",
        description : desc(["A Basilisk becomes my bonded companion."]),
        creaturesAdd : [["Basilisk", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Basilisk", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("basilisk")
        },
      "blood hawk" : {
        name : "Blood Hawk",
        description : desc(["A Blood Hawk becomes my bonded companion."]),
        creaturesAdd : [["Blood Hawk", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Blood Hawk", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("blood hawk")
      },
      "bulette" : {
        name : "Bulette",
        description : desc(["A Bulette becomes my bonded companion."]),
        creaturesAdd : [["Bulette", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Bulette", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("bulette")
      },
      "deinonychus" : {
        name : "Deinonychus",
        description : desc(["A Deinonychus becomes my bonded companion."]),
        creaturesAdd : [["Deinonychus", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Deinonychus", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("deinonychus")
      },
      "earth elemental" : {
        name : "Earth Elemental",
        description : desc(["An Earth Elemental becomes my bonded companion."]),
        creaturesAdd : [["Earth Elemental", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Earth Elemental", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("earth elemental")
      },
      "gelatinous cube" : {
        name : "Gelatinous Cube",
        description : desc(["A Gelatinous Cube becomes my bonded companion."]),
        creaturesAdd : [["Gelatinous Cube", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Gelatinous Cube", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("gelatinous cube")
      },
      "giant spider" : {
        name : "Giant Spider",
        description : desc(["A Giant Spider becomes my bonded companion."]),
        creaturesAdd : [["Giant Spider", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Giant Spider", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("giant spider")
      },
      "giant toad" : {
        name : "Giant Toad",
        description : desc(["A Giant Toad becomes my bonded companion."]),
        creaturesAdd : [["Giant Toad", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Giant Toad", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("giant toad")
      },
      "giant weasel" : {
        name : "Giant Weasel",
        description : desc(["A Giant Weasel becomes my bonded companion."]),
        creaturesAdd : [["Giant Weasel", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Giant Weasel", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("giant weasel")
      },
      "hell hound" : {
        name : "Hell Hound",
        description : desc(["A Hell Hound becomes my bonded companion."]),
        creaturesAdd : [["Hell Hound", false, function(AddRemove, prefix) {
            if (!AddRemove) return;
            ApplyCompRace("Hell Hound", prefix, "beastheart");
        }]],
        creatureOptions : createBeastheartCompanion("hell hound")
      },
        "mimic" : {
            name : "Mimic",
            description : desc(["A mimic becomes my bonded companion."]),
            creaturesAdd : [["Mimic", false, function(AddRemove, prefix) {
                if (!AddRemove) return;
                ApplyCompRace("Mimic", prefix, "beastheart");
            }]],
            creatureOptions : createBeastheartCompanion("mimic")
        },
        "owlbear" : {
            name : "Owlbear",
            description : desc(["An Owlbear becomes my bonded companion."]),
            creaturesAdd : [["Owlbear", false, function(AddRemove, prefix) {
                if (!AddRemove) return;
                ApplyCompRace("Owlbear", prefix, "beastheart");
            }]],
            creatureOptions : createBeastheartCompanion("owlbear")
        },
        "sporeling" : {
            name : "Sporeling",
            description : desc(["A Sporeling becomes my bonded companion."]),
            creaturesAdd : [["Sporeling", false, function(AddRemove, prefix) {
                if (!AddRemove) return;
                ApplyCompRace("Sporeling", prefix, "beastheart");
            }]],
            creatureOptions : createBeastheartCompanion("sporeling")
        },
        "worg" : {
            name : "Worg",
            description : desc(["A Worg becomes my bonded companion."]),
            creaturesAdd : [["Worg", false, function(AddRemove, prefix) {
                if (!AddRemove) return;
                ApplyCompRace("Worg", prefix, "beastheart");
            }]],
            creatureOptions : createBeastheartCompanion("worg")
        }
    }
  }
};  
AddSubClass("beastheart", "protector bond", {
  regExpSearch : /protector/i,
  subname : "Protector Bond",
  source : ["BHMC", 27],
  features : {
    "subclassfeature3" : {
      name : "Protector Bond",
      minlevel : 3,
      description : desc([
        "You and your companion gain defensive resilience.",
        "Your companion gains Thickened Hide (+2 AC) starting at 7th level."
      ])
    }
  }
});