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
var BeastheartCompanionKey = "";
/* -------------------------------------------------------------------------
   Beastheart Companion Global Helper
   ------------------------------------------------------------------------- */
  
   // Create Beastheart Companion function
    var createBeastheartCompanion = function (bhcomp, color) {
    
        // Reduce duplication by adding differences between wyrmling colors
        var wyrmlingColors = {
        black : {
            name : "Black Dragon Wyrmling",
            damageType : "acid",
            breathArea : "5ft wide, 30ft line",
            breathSave : "Dex"
        },
        blue : {
            name : "Blue Dragon Wyrmling",
            damageType : "lightning",
            breathArea : "5ft wide, 30ft line",
            breathSave : "Dex"
        },
        green : {
            name : "Green Dragon Wyrmling",
            damageType : "poison",
            breathArea : "15ft cone",
            breathSave : "Con"
        },
        red : {
            name : "Red Dragon Wyrmling",
            damageType : "fire",
            breathArea : "15ft cone",
            breathSave : "Dex"
        },
        white : {
            name : "White Dragon Wyrmling",
            damageType : "cold",
            breathArea : "15ft cone",
            breathSave : "Con"
        },
        brass : {
            name : "Brass Dragon Wyrmling",
            damageType : "fire",
            breathArea : "15ft cone",
            breathSave : "Dex"
        },
        bronze : {
            name : "Bronze Dragon Wyrmling",
            damageType : "lightning",
            breathArea : "5ft wide, 15ft line",
            breathSave : "Dex"
        },
        copper : {
            name : "Copper Dragon Wyrmling",
            damageType : "acid",
            breathArea : "5ft wide, 15ft line",
            breathSave : "Dex"
        },
        gold : {
            name : "Gold Dragon Wyrmling",
            damageType : "fire",
            breathArea : "15ft cone",
            breathSave : "Dex"
        },
        silver : {
            name : "Silver Dragon Wyrmling",
            damageType : "cold",
            breathArea : "15ft cone",
            breathSave : "Con"
        }
    };

    // Reduce duplication by creating a feed for each companion type to slot into a template 
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
            comp1stLevelTraitName : "Poison Spittle [2 Ferocity]",
            comp1stLevelTraitDesc : "A signature attack that deals\n  PB extra damage and one creature within 5ft also takes\n  PB poison damage.",
            comp3rdLevelTraitName : "Poison Gaze [5 Ferocity]",
            comp3rdLevelTraitDesc : "3 creatures basilisk can see in\n  15ft - Con save or become poisoned",
            comp5thLevelTraitName : "Lesser Petrifying Gaze [8 Ferocity]",
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
            comp1stLevelTraitName : "Distracting Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, next attack against target has advantage",
            comp3rdLevelTraitName : "Swooping Attack [5 Ferocity]",
            comp3rdLevelTraitDesc : "Move up to speed without\n  provoking opportunity attacks. Make signature attack\n  any time during the move. A hit has normal effect and\n  target makes Dex save or drop one held item.",
            comp5thLevelTraitName : "Storm of Talons [8 Ferocity]",
            comp5thLevelTraitDesc : "Move up to speed without\n  provoking opportunity attacks and make a signature\n  attack against one creature within 5ft. Target must make\n  a Dex save or takes PB x d10 slashing damage and is\n  blinded until end of hawk's next turn. Target takes half\n  damage on successful save and isn't blinded.",
            compDescription : "takes its name from its crimson feathers and aggressive nature, the blood hawk\n  fearlessly attacks almost any animal, stabbing it with its dagger-like beak.",
            compBaseTraitName : "Swoop In (Reaction: 1/Long Rest)",
            compBaseTraitDesc : "If I am within 30ft of\n  hawk and get hit by an attack, the hawk can fly to me\n  without provoking opportunity attacks. If it ends its\n  move within 5ft of me, it takes the hit instead, but only\n  takes half damage.",
            compBaseFeatureName : "",
            compBaseFeatureDesc : "",
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
            comp1stLevelTraitName : "Violent Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, deal PB extra damage and move\n  target 5ft in any direction.",
            comp3rdLevelTraitName : "Burrowing Trip [5 Ferocity]",
            comp3rdLevelTraitDesc : "Move up to half burrowing\n  speed without provoking opportunity attacks. Each\n  creature standing on the ground bulette moves under\n  must make a Dex Save or fall prone.",
            comp5thLevelTraitName : "Deadly Leap [8 Ferocity]",
            comp5thLevelTraitDesc : "Bulette leaps 30ft. If it lands on\n  one or more creatures, those creatures must make a Str\n  save or take PB x d6 bludgeoning damage and be\n  knocked prone. On success, the targets take half damage\n  and is moved to a space of the Bulette's choice within\n  5ft. If no space is available, it remains prone in\n  Bulette's square.",
            compDescription : "or the 'land shark' is a massive predator that lives only to feed and terrorizes\n   any lands it inhabits.",
            compBaseTraitName : "Plated Protection",
            compBaseTraitDesc : "I can ride the bulette while it is\n  burrowing.",
            compBaseFeatureName : "",
            compBaseFeatureDesc : "",
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
            comp1stLevelTraitName : "Overwhelming Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, deal extra PB damage\n  and target cannot take reactions until the start of\n  Deinonychus' next turn.",
            comp3rdLevelTraitName : "Clever Girl [5 Ferocity]",
            comp3rdLevelTraitDesc : "Deinonychus can take a Hide\n  action before or after making a signature attack. If the\n  attack hits, the target is knocked prone. Deinonychus\n  can move between the Hide and attack actions and\n  remain hidden even if the movement would negate hide.",
            comp5thLevelTraitName : "Keep Them Down [8 Ferocity]",
            comp5thLevelTraitDesc : "Leap at target within 5ft.\n  Target must make Dex save or take PB x d12 slashing\n  damage, falls prone, and is grappled (DC 10+PB). Target\n  can't stand while it is grappled. If deinonychus attacks a\n  different target, the grapple ends.",
            compDescription : "exudes a dangerous ferocity. Each foot is armed with a large, sickle-shaped\n  claw.",
            compBaseTraitName : "Part of the Pack (1/Long Rest)",
            compBaseTraitDesc : "If I am charmed, stunned,\n  or frightened, and within 5ft of deinonychus, it can end\n  one of those conditions.",
            compBaseFeatureName : "",
            compBaseFeatureDesc : "",
        },
        'dragon wyrmling': {
            compSize : 3,
            compType : "Dragon",
            compAC : 15,
            compHP : 7,
            compMove : "30ft, Fly 30ft",
            compStats : [16,10,15,5,10,12],
            compSaves : ["","","","","0",""],
            compSkills: { "Perception" : "+2" },
            compDR : "",
            compImms : "",
            compCondImms : "",
            compPP : 10,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            compAttackAbility : 1,
            comp1stLevelTraitName : "Spit Breath [2 Ferocity]",
            comp1stLevelTraitDesc : "",
            comp3rdLevelTraitName : "Frightful Presence [5 Ferocity]",
            comp3rdLevelTraitDesc : "Each creature of\n  Wyrmling's choice within 10ft that is aware of them must\n  make a Wis save or become frightened of Wyrmling for\n  1 minute. Affected creatures can make a save at the end\n  of their turn to end the condition. If they succeed,\n  then they are immune to Wyrmling's Frightful Presence\n  for 24 hours",
            comp5thLevelTraitName : "Breath Weapon [8 Ferocity]",
            comp5thLevelTraitDesc : "",
            compDescription : "is little more than a baby, barely able to speak. However, they can\n   present a clear threat to any would-be predator.",
            compBaseFeatureName : "Shared Resistance",
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
            comp1stLevelTraitName : "Stretch Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  against any target in 10ft. On hit, deal extra PB damage\n  and pull target 5ft closer.",
            comp3rdLevelTraitName : "Earthshaker [5 Ferocity]",
            comp3rdLevelTraitDesc : "The elemental strikes the\n  ground. Each creature within 10ft must make a Dex save\n  or be knocked prone. I automatically make the save.",
            comp5thLevelTraitName : "Transmute Ground [8 Ferocity]",
            comp5thLevelTraitDesc : "Pick a 10ft square that\n  the elemental can see within 30ft. Each creature standing\n  in the area must make a Str save or become restrained. A\n  creature can use their action to make a Str save to free\n  themselves or another creature, ending the restrained\n  condition.",
            compDescription : "consists of dirt and stone, occasionally set with chunks of metal, gems, and\n  bright minerals.",
            compBaseTraitName : "Toss Me",
            compBaseTraitDesc : "If I am within 5ft, elemental can hurl me 5ft x\n  PB in any direction (including up). If I would normally\n  take damage from landing, they can make a DC15 Dex\n  save to take none.",
            compBaseFeatureName : "Earth Glide",
            compBaseFeatureDesc : "The elemental can burrow\n  through nonmagical, unworked earth and\n  stone and doesn't disturb the material it\n  moves through. While using Earth Glide,\n the elemental can't be used as a mount.",
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
            comp1stLevelTraitName : "Burning Acid [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  with a reach of 10ft. On hit, deal extra PB acid damage.\n  Target can't regain HPs until the start of my next turn.",
            comp3rdLevelTraitName : "Slime Shower [5 Ferocity]",
            comp3rdLevelTraitDesc : "Cube showers all within 5ft,\n  except me, with acidic slime. Each creature in the area\n  must make a Dex save or take 1d6 acid damage and\n  their speed is reduced to 0 until the start of cube's next\n  turn.",
            comp5thLevelTraitName : "Engulf [8 Ferocity]",
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
            comp1stLevelTraitName : "Stretch Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack with\n a  reach of 10ft. Attack deals PB extra damage and\n  target is pulled 5ft toward toad.",
            comp3rdLevelTraitName : "Fast Food [5 Ferocity]",
            comp3rdLevelTraitDesc : "Make a signature attack. After \n  attacking, toad can jump 20ft in any direction\n without provoking opportunity attacks. If the target is\n  large or smaller, toad drags target with them",
            comp5thLevelTraitName : "Swallow [8 Ferocity]",
            comp5thLevelTraitDesc : "Toad tries to swallow a medium or\n  smaller target within 5ft. Target must make a Dex save or\n  take PBd6 bludgeoning damage and is swallowed.\n  Success means target takes half damage and isn't\n  swallowed. Swallowed targets are blinded and restrained,\n  have total cover against attacks and effect outside of the\n  toad and take PBd6 acid damage at the start of toad's\n  turn. If toad takes damage it must make a con save equal\n  to 10 or half the damage (whichever is higher). If toad\n  dies or is incapacitated, swallowed target is no longer\n  restrained and can exit the toad using 5ft of movement.\n  Toad can only swallow 1 target at a time.",
            compDescription : "can be as large as a horse or even a small house, its bumpy skin glistening with\n   moisture.",
            compBaseTraitName : "Psychedelic Skin (1/Long Rest)",
            compBaseTraitDesc : "If I am within 5ft of toad,\n  as a bonus action, it can coat my weapon with poison\n  secreted from the toad's skin, which lasts for one hour or\n  until I hit a creature with my weapon. When I hit a\n  creature with my weapon, it must make a Con save or be\n  poisoned for 1 minute. the creature can repeat the save\n  at the end of their turn to end the effect.",
            compBaseFeatureName : "Amphibious",
            compBaseFeatureDesc : "Toads can breathe both air\n  and water.",
            compBaseFeature2Name : "Standing Leap",
            compBaseFeature2Desc : "Toad can leap up to 20ft\n  long or 10ft high without a running start.",
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
            comp1stLevelTraitName : "Destabilizing Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, target has disadvantage on next attack roll\n  they make before the start of Spider's next turn.",
            comp3rdLevelTraitName : "Web [5 Ferocity]",
            comp3rdLevelTraitDesc : "Spider shoots sticky webs at a target\n  they can see within 60 feet. Target must make a Dex save\n  or be restrained by webs. As an action, the target can\n  make a Str check, to end the restrained condition.",
            comp5thLevelTraitName : "Bite Frenzy [8 Ferocity]",
            comp5thLevelTraitDesc : "Make signature attack against a\n  number of creatures of your choice equal to your PB\n  within 5 feet of Spider. On a hit, the target is poisoned\n  until the end of their next turn.",
            compDescription : "spins elaborate webs or shoots sticky strands of webbing from its\n   abdomen, to snare its prey.",
            compBaseTraitName : "Sticky Stuff (1/Long Rest)",
            compBaseTraitDesc : "If I am within 5ft of spider, it\n  can coat my feet or footwear in an adhesive that allows\n  me to move across vertical surfaces and ceilings, leaving\n  my hands free. I gain a climb speed equal to my walking\n  speed. Lasts for 10 minutes.",
            compBaseFeatureName : "Spider Climb",
            compBaseFeatureDesc : "The spider can climb\n  difficult surfaces, including upside down\n  on ceilings, without requiring an ability\n  check.",
            compBaseFeature2Name : "Web Sense",
            compBaseFeature2Desc : "Spider knows the exact\n  location of any creature touching the\n  same web.",
            compBaseFeature3Name : "Web Walker",
            compBaseFeature3Desc : "Ignore any movement\n  restrictions caused by webs.",
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
            comp1stLevelTraitName : "Overwhelming Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, deal PB extra damage and target has can't\n  take reactions until the start of Weasel's\n  next turn.",
            comp3rdLevelTraitName : "Clamp Down [5 Ferocity]",
            comp3rdLevelTraitDesc : "Make a signature attack. On\n  hit, target is grappled. While grappled, target is\n  restrained but Weasel can't bite another target.",
            comp5thLevelTraitName : "Bite Frenzy [8 Ferocity]",
            comp5thLevelTraitDesc : "Make signature attack against a\n  number of creatures of your choice equal to your PB\n  within 5ft of Weasel. On hit, the target is knocked prone.",
            compDescription : "is a fast, clever, and wolf-sized predator with sleek, muscular bodies that range\n  in color from reddish-brown to snowy white.",
            compBaseTraitName : "",
            compBaseTraitDesc : "",
            compBaseFeatureName : "Treasure Sense",
            compBaseFeatureDesc : "Can detect gems and\n  precious metals within 10ft.",
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
            comp1stLevelTraitName : "Lava Spittle [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, deal PB extra damage and creature of your\n  choice within 5ft of target takes PB fire damage.",
            comp3rdLevelTraitName : "Brutal Charge [5 Ferocity]",
            comp3rdLevelTraitDesc : "Hell Hound can use its action\n  to move up to its speed without provoking opportunity\n  attacks and can make one signature attack against a\n  single target during or at the end of its move.",
            comp5thLevelTraitName : "Fire Breath [8 Ferocity]",
            comp5thLevelTraitDesc : "Exhale fire in a 15ft cone. Each\n  creature in the area must make a Dex save or take PBd6\n  fire damage or half damage on a save.",
            compDescription : "is a fire-breathing fiend in the form of a powerful dog.",
            compBaseTraitName : "",
            compBaseTraitDesc : "",
            compBaseFeatureName : "Consult Hell (1/Long Rest)",
            compBaseFeatureDesc : "I can talk to\n  the Hell Hound, tapping into the Hell's\n  divinatory powers that mimic the Augury\n  spell. After a  minute, the hound will\n  respond with 1 bark for good results, 2\n  barks for bad results, 3 barks for both\n  good and bad results, and no barks for\n  results that aren't good or bad.",
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
            comp1stLevelTraitName : "Distracting Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack.\n  On hit, next attack against target has advantage.",
            comp3rdLevelTraitName : "Adhesive Pseudopods [5 Ferocity]",
            comp3rdLevelTraitDesc : "Mimic tries to touch\n  each creature within 5ft. All targets must make a Dex\n  save or become grappled.",
            comp5thLevelTraitName : "I'm You [8 Ferocity]",
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
            comp1stLevelTraitName : "Violent Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature attack. On\n  hit, deal PB extra damage and move target 5ft in any\n  direction.",
            comp3rdLevelTraitName : "Owlie Oop [5 Ferocity]",
            comp3rdLevelTraitDesc : "Owlbear leaps up to 20ft without\n  provoking opportunity attacks. When it lands, each\n  creature within 5ft must make a Str save or be knocked\n  prone.",
            comp5thLevelTraitName : "Bear Hug [8 Ferocity]",
            comp5thLevelTraitDesc : "Owlbear tries to grab and crush a\n  target within 5ft. Target must make Dex save or take\n  PBd10 bludgeoning damage and is grappled and\n  restrained. If target saves, they take half damage and are\n  not grappled or restrained,",
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
            compSigAttackName : "Cough",
            compSigDamageType : "acid",
            compAttackAbility : 2,
            comp1stLevelTraitName : "Destabilizing Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, target has disadvantage on next attack roll\n  they make before the start of Sporeling's next turn.",
            comp3rdLevelTraitName : "Spore Burst [5 Ferocity]",
            comp3rdLevelTraitDesc : "All creatures of choice within 5ft\n  of Sporeling, must make a Con save or become poisoned\n  until the start of Sporeling's next turn.",
            comp5thLevelTraitName : "Hallucinogenic Spores [8 Ferocity]",
            comp5thLevelTraitDesc : "Each enemy within\n  10ft  must make a Con save. On a failure, Sporeling\n  chooses whether the target creature uses their reaction\n  make a melee attack against a creature of Sporeling's\n  choice or fall prone",
            compDescription : "is a halfling-sized mushroom with two arms, four legs, and a face growing\n   out of their stalk underneath a brightly colored cap.",
            compBaseTraitName : "Invigorating Spores (1/Long Rest)",
            compBaseTraitDesc : "While I am within 30ft\n  of Sporeling, it can use a bonus action to give me\n  advantage on saving throws for 1 minute.",
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
            comp1stLevelTraitName : "Overwhelming Attack [2 Ferocity]",
            comp1stLevelTraitDesc : "Make a signature\n  attack. On hit, deal extra PB damage and target cannot take\n  reactions until the start of Worg's next turn.",
            comp3rdLevelTraitName : "Brutal Charge [5 Ferocity]",
            comp3rdLevelTraitDesc : "Worg can use its action\n  to move up to its speed without provoking opportunity\n  attacks and can make one signature attack against a\n  single target during or at the end of its move.",
            comp5thLevelTraitName : "Bite Frenzy [8 Ferocity]",
            comp5thLevelTraitDesc : "Make signature attack against a\n  number of creatures of your choice equal to your PB\n  within 5ft of Worg. On hit, the target is knocked prone.",
            compDescription : "is a monstrous wolf-like predator that delights in hunting and devouring\n  creatures weaker than itself.",
            compBaseTraitName : "Move As One",
            compBaseTraitDesc : "If I am mounted on Worg, opportunity\n  attacks against me or Worg are made with disadvantage.\n  I can mount or dismount Worg by spending 5ft of\n  movement.",
        },
    };

    var type = types[bhcomp];
    if (!type) return false;

  // Inject wyrmling color at runtime
    if (bhcomp === "dragon wyrmling") {
        var d = wyrmlingColors[color];
        if (!d) return false;

        // clone and inject
        var t = JSON.parse(JSON.stringify(type));
        t.compName = d.name;
        t.compImms = d.damageType;
        t.comp1stLevelTraitDesc = "Wyrmling makes a signature\n  attack as a ranged attack with a normal range of 30ft\n  and a long range of 60ft. On hit, Spit Breath deals extra\n  PB " + d.damageType + " damage.";
        t.comp5thLevelTraitDesc = "Wyrmling breathes a\n  " + d.breathArea + " of " + d.damageType + ". All creatures caught in the\n  area must  make a " + d.breathSave + " save or take PBd6 damage and\n  half as much on success.";
        t.compBaseFeatureDesc = "I gain " + d.damageType + " resistance\n  due to my relationship with my wyrmling\n  companion. I also take no damage from\n  its Breath Attack.";
        type = t; // use the injected version
    }

    // A few globals to make things a bit easier
    var lvl = Number(What("Classes.Beastheart.level")) || 0;

    // Give this type a stable key we can store globally
    var compKey = bhcomp;
    if (bhcomp === "dragon wyrmling" && color) {
        compKey = "dragon wyrmling - " + color.toLowerCase();
    }
    type.compKey = compKey;

    // The template for companions
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
        attacks : [{ //Don't worry, they don't actually have 4 attack types - this just fudges it
            name : "Signature Attack (Tier 1)",
            ability : type.compAttackAbility || 1,
            damage : [1, 6, type.compSigDamageType || "piercing"],
            range : "Melee (5 ft)",
            description : "",
            abilitytodamage : true,
            modifiers: ["", "+oProf"]
            },
            {
            name : "Signature Attack  (Tier 2)",
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
        // The Protector Bond's AC bonus - could have gone anywhere really...
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
        // Fudge the attacks. We rewrite Attack.1 with whatever our level gives us in terms of damage. 
        // It's ugly but nothing else seemed to work
        {
            name : "Signature Attack",
            minlevel : 1,
            description : "My companion's\n  " + type.compSigAttackName + " damage die increases by 1d6\n  at levels 5, 11, and 17.",
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
            name : "Beyond Instinct (Level 5)",
            minlevel : 5,
            description : "Select an extra\n  saving throw and a new skill proficiency\n  for your companion.",
        },
        {
            name : "Beyond Instinct (Level 10)",
            minlevel : 10,
            description : "Select a 2nd\n  extra saving throw and a new skill proficiency\n for your companion.",
        },
        {
            name : "Beyond Instinct (Level 15)",
            minlevel : 15,
            description : "Select a 3rd\n  extra saving throw and a new skill proficiency\n  for your companion.",
        }
    ],
    traits: [
        {
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
        "The " + type.compName.toLowerCase() + " looks to me for leadership and acts on my turn. It gains abilities as I gain\n   Beastheart levels. If my " + type.compName + " companion is injured or dies, I can spend 1 minute\n   meditating and return it to life (if it died) and on full Hit Points but I gain a level of exhaustion."
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
        
        // Add skill proficiency mapping
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

        // Add proficiency bonus to AC
        var sACfld = prefix + "Comp.Use.AC";
        if (What(sACfld).indexOf("oProf") === -1) {
            AddToModFld(sACfld, "oProf", false, sNameEntity, sExplanation);
        }

        // Add Skill proficiencies
        var compSkills = Object.keys(CurrentCompRace[prefix].skills || {});
         for (var i = 0; i < compSkills.length; i++) {
            var skillName = compSkills[i];
            var skillAbbr = skillMap[skillName] || skillName;
            var profFld = prefix + "Comp.Use.Skills." + skillAbbr + ".Prof";
            var modFld = prefix + "BlueText.Comp.Use.Skills." + skillAbbr + ".Bonus";

            if (tDoc.getField(profFld)) {
            tDoc.getField(profFld).checkThisBox(0, true);
            }
            /* if (What(modFld).indexOf("oProf") === -1) {
            AddToModFld(modFld, "oProf", false, sNameEntity, sExplanation);
            } */
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
        
        // Inject the DCs into the weapon description
        var dcText =
            "DC for Ferocity Attacks = " + abilityDC + " | " +
            "DC for Primal Exploits = " + exploitDC;

        // This field definitely exists
        Value(prefix + "Comp.Use.Attack.1.Description", dcText);
    },
    // Hit Point progression for companions
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
    // Load only traits and features that a companion has rather than empty spaces
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
    subclasses : ["Companion Bonds", []],
    attacks : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    abilitySave : 5, //Wisdom for Exploit Save DC
    features: {
        "not_a_feature_ferocity" : {
            name : "Ferocity",
            minlevel : 1,
            source : ["BHMC", 27],
            description : desc([
                "At the start of my turn, my companion gains 1d4 Ferocity and an extra +1 Ferocity for each",
                "creature within 5 ft it can see or hear."
            ]),
            additional : levels.map(function (n) {
                if (n < 5) return "1d4 Ferocity";
                if (n < 10) return "1d4 + 1 Ferocity";
                if (n < 15) return "1d4 + 3 Ferocity";
                return "1d4 + 5 Ferocity";
            })
        },
        "feature_1_companion bond" : {
            name : "Companion Bond",
            source : ["BHMC", 9-23,27],
            minlevel : 1,
            description : desc([
                "I gain a supernatural companion bound to me.",
                "Choose your companion."
            ]),
            choices : [
                "Basilisk","Blood Hawk","Bulette","Deinonychus","Earth Elemental","Gelatinous Cube","Giant Spider","Giant Toad","Giant Weasel","Hell Hound","Mimic","Owlbear","Sporeling","Worg",
                // Register all wyrmling colors - there is a nicer way to do this but for now this is fine
                "Dragon Wyrmling - Black","Dragon Wyrmling - Blue","Dragon Wyrmling - Green","Dragon Wyrmling - Red","Dragon Wyrmling - White",
                "Dragon Wyrmling - Brass","Dragon Wyrmling - Bronze","Dragon Wyrmling - Copper","Dragon Wyrmling - Gold","Dragon Wyrmling - Silver"
            ],
            // Hitch the choices to the companion types
            "basilisk" : {
                name : "Basilisk",
                description : desc(["A Basilisk becomes my bonded companion."]),
                creaturesAdd : [["Basilisk", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion selected
                        BeastheartCompanionKey = "basilisk";
                        ApplyCompRace("Basilisk", prefix, "beastheart");

                    } else {
                        // Companion removed
                        if (BeastheartCompanionKey === "basilisk") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("basilisk")
            },
            "blood hawk" : {
                name : "Blood Hawk",
                description : desc(["A Blood Hawk becomes my bonded companion."]),
                creaturesAdd : [["Blood Hawk", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "blood hawk";
                        ApplyCompRace("Blood Hawk", prefix, "beastheart");

                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "blood hawk") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("blood hawk")
            },
            "bulette" : {
                name : "Bulette",
                description : desc(["A Bulette becomes my bonded companion."]),
                creaturesAdd : [["Bulette", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "bulette";
                        ApplyCompRace("Bulette", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "bulette") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("bulette")
            },
            "deinonychus" : {
                name : "Deinonychus",
                description : desc(["A Deinonychus becomes my bonded companion."]),
                creaturesAdd : [["Deinonychus", false, function(AddRemove, prefix) {
                if (AddRemove) {
                    // Companion is being selected
                    BeastheartCompanionKey = "deinonychus";
                    ApplyCompRace("Deinonychus", prefix, "beastheart");
                } else {
                    // Companion is being removed / choice cleared
                    if (BeastheartCompanionKey === "deinonychus") BeastheartCompanionKey = "";
                }
            }]],
                creatureOptions : createBeastheartCompanion("deinonychus")
            },
            "earth elemental" : {
                name : "Earth Elemental",
                description : desc(["An Earth Elemental becomes my bonded companion."]),
                creaturesAdd : [["Earth Elemental", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "earth elemental";
                        ApplyCompRace("Earth Elemental", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "earth elemental") BeastheartCompanionKey = "";
                    }
                }]],    
                creatureOptions : createBeastheartCompanion("earth elemental")
            },
            "gelatinous cube" : {
                name : "Gelatinous Cube",
                description : desc(["A Gelatinous Cube becomes my bonded companion."]),
                creaturesAdd : [["Gelatinous Cube", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "gelatinous cube";
                        ApplyCompRace("Gelatinous Cube", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "gelatinous cube") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("gelatinous cube")
            },
            "giant spider" : {
                name : "Giant Spider",
                description : desc(["A Giant Spider becomes my bonded companion."]),
                creaturesAdd : [["Giant Spider", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "giant spider";
                        ApplyCompRace("Giant Spider", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "giant spider") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("giant spider")
            },
            "giant toad" : {
                name : "Giant Toad",
                description : desc(["A Giant Toad becomes my bonded companion."]),
                creaturesAdd : [["Giant Toad", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "giant toad";
                        ApplyCompRace("Giant Toad", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "giant toad") BeastheartCompanionKey = "";
                    }
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
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "hell hound";
                        ApplyCompRace("Hell Hound", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "hell hound") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("hell hound")
            },
            "mimic" : {
                name : "Mimic",
                description : desc(["A mimic becomes my bonded companion."]),
                creaturesAdd : [["Mimic", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "mimic";
                        ApplyCompRace("Mimic", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "mimic") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("mimic")
            },
            "owlbear" : {
                name : "Owlbear",
                description : desc(["An Owlbear becomes my bonded companion."]),
                creaturesAdd : [["Owlbear", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "owlbear";
                        ApplyCompRace("Owlbear", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "owlbear") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("owlbear")
            },
            "sporeling" : {
                name : "Sporeling",
                description : desc(["A Sporeling becomes my bonded companion."]),
                creaturesAdd : [["Sporeling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "sporeling";
                        ApplyCompRace("Sporeling", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "sporeling") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("sporeling")
            },
            "worg" : {
                name : "Worg",
                description : desc(["A Worg becomes my bonded companion."]),
                creaturesAdd : [["Worg", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        // Companion is being selected
                        BeastheartCompanionKey = "worg";
                        ApplyCompRace("Worg", prefix, "beastheart");
                    } else {
                        // Companion is being removed / choice cleared
                        if (BeastheartCompanionKey === "worg") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("worg")
            }, 
            "dragon wyrmling - red" : {
                name : "Dragon Wyrmling - Red",
                description : desc(["A red dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Red Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - red";
                        ApplyCompRace("Red Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - red") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "red")
            },
            "dragon wyrmling - blue" : {
                name : "Dragon Wyrmling - Blue",
                description : desc(["A blue dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Blue Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - blue";
                        ApplyCompRace("Blue Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - blue") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "blue")
            },
            "dragon wyrmling - black" : {
                name : "Dragon Wyrmling - Black",
                description : desc(["A black dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Black Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - black";
                        ApplyCompRace("Black Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - black") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "black")
            },
            "dragon wyrmling - green" : {
                name : "Dragon Wyrmling - Green",
                description : desc(["A green dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Green Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - green";
                        ApplyCompRace("Green Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - green") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "green")
            },
            "dragon wyrmling - white" : {
                name : "Dragon Wyrmling - White",
                description : desc(["A white dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["White Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - white";
                        ApplyCompRace("White Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - white") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "white")
            },
            "dragon wyrmling - brass" : {
                name : "Dragon Wyrmling - Brass",
                description : desc(["A brass dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Brass Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - brass";
                        ApplyCompRace("Brass Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - brass") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "brass")
            },
            "dragon wyrmling - bronze" : {
                name : "Dragon Wyrmling - Bronze",
                description : desc(["A bronze dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Bronze Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (!AddRemove) return;
                    ApplyCompRace("Bronze Dragon Wyrmling", prefix, "beastheart");
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "bronze")
            },
            "dragon wyrmling - copper" : {
                name : "Dragon Wyrmling - Copper",
                description : desc(["A copper dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Copper Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - copper";
                        ApplyCompRace("Copper Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - copper") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "copper")
            },
            "dragon wyrmling - gold" : {
                name : "Dragon Wyrmling - Gold",
                description : desc(["A gold dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Dragon Wyrmling - Gold", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - gold";
                        ApplyCompRace("Gold Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - gold") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "gold")
            },
            "dragon wyrmling - silver" : {
                name : "Dragon Wyrmling - Silver",
                description : desc(["A silver dragon wyrmling becomes my bonded companion."]),
                creaturesAdd : [["Silver Dragon Wyrmling", false, function(AddRemove, prefix) {
                    if (AddRemove) {
                        BeastheartCompanionKey = "dragon wyrmling - silver";
                        ApplyCompRace("Silver Dragon Wyrmling", prefix, "beastheart");
                    } else {
                        if (BeastheartCompanionKey === "dragon wyrmling - silver") BeastheartCompanionKey = "";
                    }
                }]],
                creatureOptions : createBeastheartCompanion("dragon wyrmling", "silver")
            }
        },
        "feature_1.1_natural_language": {
            name : "Natural Language",
            source : ["BHMC", 27],
            minlevel : 1,
            description : desc([
                "I can communicate verbal non-complex ideas to beasts and monstrosities and understand ",
                "simple responses. I can use Animal Handling instead of Cha checks to influence them.",
            ]),
        },
        "feature_2_primal_exploits": {
            name : "Primal Exploits",
            source : ["BHMC", 27],
            minlevel : 2,
            description : desc([
                'Use the "Choose Feature" button above to add Primal Exploits to the third page. Whenever I',
                "gain a Beastheart level, I can replace an exploit I know with another.",
                "If it is not already set, set the Ability DC to Wisdom on the main Character Sheet page."
            ]), 
            additional : levels.map(function (n) {
                return n < 2 ? "" : (n < 10 ? 3 : n < 17 ? 5 : 7) + " exploits known";
            }),
            extraname : "Primal Exploits",
            extrachoices : ["Aid Us, Friend", "Bring Them Down", "Drag Them", "Feral Reflexes", "Hurricane Blow", "No Escape", "Primal Pounce", "Quick Hide", "Thrash", "Crushing Charge", "Expanding Fury", "Furious Vengeance", "Marked Prey", "Primal Shout", "Wrath of the Pack", "Blood Sport", "Break the Earth", "Bury the Dead", "Imbue Projectile", "Rend", "Spirit Form"],
            extraTimes : levels.map(function (n) {
                return n < 2 ? "" : (n < 10 ? 3 : n < 17 ? 5 : 7);
            }),
            "aid us, friend": {
                name : "Aid Us, Friend",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [3 Ferocity]" + desc([
                    "Whenever I take the Attack action, as a bonus action, my companion can take the Help action",
                    "before or after I attack.",
                ]),
                action : [["action", ""]],
            },
            "bring them down": {
                name : "Bring Them Down",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [4 Ferocity]" + desc([
                    "When my companion hits a creature with their signature attack, I can use my reaction to",
                    "command my companion to yank the target down. The target must make a Str save or fall",
                    "prone.",
                ]),
                action : [["reaction", ""]],
            },
            "drag them": {
                name : "Drag Them",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [4 Ferocity]" + desc([
                    "When my companion hits a creature up to Large size with their signature attack, I can use my",
                    "reaction to command my companion to move the target up to half their speed in adirection",
                    "I choose. Target must succeed on a Str save.",
                ]),
                action : [["reaction", ""]],
            },
            "feral reflexes": {
                name : "Feral Reflexes",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [2 Ferocity]" + desc([
                    "When my companion or I are hit by an attack, I can use my reaction to gain +2 AC for that", 
                    "attack.",
                ]),
                action : [["reaction", ""]],
            },
            "hurricane blow": {
                name : "Hurricane Blow",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [3 Ferocity]" + desc([
                    "The first time I hit a creature with a weapon attack, using the Attack action, I can push the ",
                    "target up to 10 feet away from me in addition to the attack's normal effects.",
                ]),
            },
            "no escape": {
                name : "No Escape",
                source : ["BHMC", 28],
                description : " [1+ Ferocity]" + desc([
                    "At the start of my turn, when my companion gains ferocity and doesn't rampage, I can spend",
                    "up to my Wis modifier (min 1) ferocity to have my, or my companion's, movement increase by",
                    "5ft per ferocity spent",
                ]),
            },
            "primal pounce": {
                name : "Primal Pounce",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [3 Ferocity]" + desc([
                    "When my companion hits a creature with their signature attack, I can use my reaction to",
                    "have my companion grapple target. Dex save or target is grappled. Ends when my companion",
                    "attacks another target or succeeds on an escape check vs Exploit Save DC",
                ]),
                action : [["reaction", ""]],
            },
            "quick hide": {
                name : "Quick Hide",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [2 Ferocity]" + desc([
                    "The first time I hit a creature with a weapon attack, using the Attack action, my companion",
                    "can take the Hide action as a reaction.",
                ]),
            },
            "thrash": {
                name : "Thrash",
                source : ["BHMC", 28],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 2;
                },
                description : " [4 Ferocity]" + desc([
                    "When my companion hits a Large or smaller creature with their signature attack, I can use my",
                    "reaction to make my companion thrash the target from side to side. Wis save or target has",
                    "disadvantage attack rolls and all attacks against target have advantage until the start of my",
                    "next turn.",
                ]),
                action : [["reaction", ""]],
            },
            "crushing charge": {
                name : "Crushing Charge",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 10;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, move in a straight line up to my speed to an unoccupied space. I move through",
                    "other creatures spaces and this movement does not provoke opportunity attacks. Each",
                    "creature in my path must make a Str save or take 4d6 bludgeoning damage and is knocked",
                    "prone. On a success, they take half damage and aren't knocked prone. The damage increases",
                    "to 5d6 bludgeoning damage at level 17.",
                ]),
                action : [["action", ""]],
            },
            "expanding fury": {
                name : "Expanding Fury",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 10;
                },
                description : " [6 Ferocity]" + desc([
                    "When my companion uses a ferocity action that affects targets within a specific distance,",
                    "the range of the action increases by 10ft.",
                ]),
                action : [["reaction", ""]],
            },
            "furious vengeance": {
                name : "Furious Vengeance)",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 10;
                },
                description : " [5 Ferocity]" + desc([
                    "When a creature hits me or my companion with a melee attack, I can use my reaction to deal",
                    "4d6 psychic damage to the attacker. The damage increases to 5d6 psychic damage at level",
                    "17.",
                ]),
                action : [["reaction", ""]],
            },
            "marked prey": {
                name : "Marked Prey",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 10;
                },
                description : " [4 Ferocity]" + desc([
                    "When my companion uses a ferocity action that requires a save, I can use my reaction to have",
                    "the target make the save with disadvantage.",
                ]),
                action : [["reaction", ""]],
            },
            "primal shout": {
                name : "Primal Shout",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 10;
                },
                description : " [6 Ferocity]" + desc([
                    "As an action, I can unleash a menacing bellow. Each creature within 15ft of me that can hear",
                    "me must make a Wis save or be frightened of me until the end of my next turn.",
                ]),
                action : [["action", ""]],
            },
            "wrath of the pack": {
                name : "Wrath of the Pack",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 10;
                },
                description : " [4 Ferocity]" + desc([
                    "When I hit a creature with an attack and my companion is within 5ft of the target, my",
                    "companion can make a signature attack against my target (no action required). On a hit,",
                    "the attack deals its normal effects and the target is knocked prone.",
                ]),
            },
            "blood sport": {
                name : "Blood Sport",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 17;
                },
                description : " [16 Ferocity]" + desc([
                    "When I hit a large or smaller creature with a melee weapon attack, I can push the target up",
                    "to 30ft in a straight line away from me and is knocked prone. If the target finishes this",
                    "movement within 5ft of my companion, my companion can make a signature attack against",
                    "the target (no action required). On a hit, the attack deals its normal effects and the target is",
                    "pushed 30ft in a straight line. If the target finishes this movement within 5ft of me, I can make",
                    "another melee weapon attack against the target (no action required) and deal an additional",
                    "4d6 damage on a hit.",
                ]),
            },
            "break the earth": {
                name : "Break the Earth",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 17;
                },
                description : " [14 Ferocity]" + desc([
                    "As an action, I can create a 10ft radius, 50ft deep pit in the ground, floor, or any other surface",
                    "at any point I can see within 60ft of me. Each creature in the area must make a Dex save or fall",
                    "in the pit, taking 1d6 bludgeoning damage per 10ft fallen and are knocked prone. On a",
                    "success, they move to any unoccupied space next to the pit. The pit walls are rough and can",
                    "be climbed without requiring a check.",
                ]),
                action : [["action", ""]],
            },
            "bury the dead": {
                name : "Bury the Dead",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 17;
                },
                description : " [16 Ferocity]" + desc([
                    "I create a whirlwind of dirt and debris that rises around a target within 5ft of both me and my",
                    "companion. The target must succeed on a Dex save or take 8d6 points of bludgeoning",
                    "damage, is knocked prone and is restrained. On a success, the target takes half damage and",
                    "isn't knocked prone or restrained. The target can use its action to make a successful Str check",
                    "to end the effect.",
                ]),
                action : [["action", ""]],
            },
            "imbue projectile": {
                name : "Imbue Projectile",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 17;
                },
                description : " [14 Ferocity]" + desc([
                    "As an action, make a ranged weapon attack. Whether the attack hits or misses, an explosion",
                    "centered on the target erupts. Each creature within 20ft of the, target (my companion and I),",
                    "must make a Dex save or take 10d6 force damage, or half damage on a successful save.",
                ]),
                action : [["action", ""]],
            },
            "rend": {
                name : "Rend",
                source : ["BHMC", 29],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 17;
                },
                description : " [12 Ferocity]" + desc([
                    "As an action, make a melee weapon attack against a target within 5ft of both me and my",
                    "companion. My companion also makes a signature attack against my target (no action",
                    "required). If both hit and deal damage to the target, deal an additional 6d6 damage of a type",
                    "of one of the attacks (I choose) and target is knocked prone.",
                ]),
                action : [["action", ""]],
            },
            "spirit form": {
                name : "Spirit Form",
                source : ["BHMC", 30],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 17;
                },
                description : " [14 Ferocity]" + desc([
                    "As a bonus action, my companion and I can become incorporeal until the end of my next",
                    "turn. We gain resistance to acid, cold, fire, lightning, and thunder damage, and bludgeoning,",
                    "piercing, and slashing damage from non-magical attacks. We can move through other ",
                    "creatures and objects as if they were difficult terrain and gain a fly speed equal to our walking",
                    "speed. If we end our turn inside an object, we both take 5 (1d10) force damage and are",
                    "ejected to the nearest unoccupied space.",
                ]),
                action : [["bonus action", ""]],
            },
        },
        "feature_2.1_superior ferocity" : {
            name : "Superior Ferocity",
            source : ["BHMC", 30],
            minlevel : 2,
            description : desc([
                "When my companion uses a ferocity action that requires a target to make a save or ability",
                "check, it can use my primal exploit save DC instead of its normal DC."
            ]),
        },
        "feature_3_master caregiver" : {
            name : "Master Caregiver",
            source : ["BHMC", 30],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Animal Handling. If I have proficiency, my proficiency bonus is doubled."
            ]),
            eval : function () {
                var profs = What("ProfSkills");
                var hasAni = profs && profs.indexOf("Ani") !== -1;

                if (hasAni) {
                    // already proficient → expertise
                    AddSkillProf("Ani", true, true);
                } else {
                    // not proficient → proficiency only
                    AddSkillProf("Ani", true, false);
                }
            },
            removeeval : function () {
                AddSkillProf("Ani", false, false);
            }
        },
        "feature_5_beyond_instinct" : {
            name : "Beyond Instinct",
            source : ["BHMC", 30],
            minlevel : 5,
            description : desc([
                "My companion gains extra ferocity at the start of my turn (scales with level). They also gain",
                "proficiency with saving throws in an ability score of my choice and proficiency in one of the",
                "following skills: Acrobatics, Animal Handling, Athletics, Investigation, Perception, Performance,",
                "Sleight of Hand, Stealth, or Survival at 5th, 10th, and 15th level. My companion can use Wis", 
                "instead of Int for Investigation checks and Str or Dex instead of Cha for Performance or",
                "Intimidation checks. Select them on the Companion Sheet"
            ])
        },
        "feature_6_faithful_companion" : {
            name : "Faithful Companion",
            minlevel : 6,
            description : desc([
                "I no longer need to use a bonus action to command my companion. Additionally, when my",
                "companion enters rampage, I choose where it moves to and which creature they attack."
            ])
        },
        "feature_6.1_rejuvenating ferocity" : {
            name : "Rejuvenating Ferocity",
            minlevel : 6,
            description : desc([
                "As a bonus action,I can spend any number of my companion's ferocity and my companion",
                "gains hit points equal to the amount of ferocity spent."
            ]),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            action : [["bonus action", ""]],

        },
        "feature_8_primal strikes" : {
            name : "Primal Strikes",
            minlevel : 8,
            description : desc([
                "Once per turn when I hit a creature with a weapon attack, I can deal extra damage. The",
                "damage type is chosen when I gain this feature and can be changed each time I gain a",
                "Beastheart level. The damage increases to 2d8 at 14th level."
            ]),

            // Show just the dice here; the type is handled by the chosen option
            additional : levels.map(function (n) {
                return n < 14 ? "+1d8 damage" : "+2d8 damage";
            }),

            choices : ["Acid","Cold","Fire","Lightning","Poison","Thunder"],


            // Each choice is its own little feature; only the chosen one is active
            "acid" : {
                name : "Acid",
                description : "\n  My Primal Strikes deal acid damage.",
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (!v.isWeapon) return;

                            var lvl  = classes.known.beastheart.level || 0;
                            var dice = lvl < 14 ? "1d8" : "2d8";

                            if (!fields.Description) fields.Description = "";
                            var tag = "Primal Strikes +" + dice + " acid damage";
                            if (fields.Description.indexOf(tag) !== -1) return;

                            fields.Description += (fields.Description ? "; " : "") + tag;
                        }
                    ]
                }
            },
            "cold" : {
                name : "Cold",
                description : "\n  My Primal Strikes deal cold damage.",
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (!v.isWeapon) return;

                            var lvl  = classes.known.beastheart.level || 0;
                            var dice = lvl < 14 ? "1d8" : "2d8";

                            if (!fields.Description) fields.Description = "";
                            var tag = "Primal Strikes +" + dice + " cold damage";
                            if (fields.Description.indexOf(tag) !== -1) return;

                            fields.Description += (fields.Description ? "; " : "") + tag;
                        }
                    ]
                }
            },
            "fire" : {
                name : "Fire",
                description : "\n  My Primal Strikes deal fire damage.",
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (!v.isWeapon) return;

                            var lvl  = classes.known.beastheart.level || 0;
                            var dice = lvl < 14 ? "1d8" : "2d8";

                            if (!fields.Description) fields.Description = "";
                            var tag = "Primal Strikes +" + dice + " fire damage";
                            if (fields.Description.indexOf(tag) !== -1) return;

                            fields.Description += (fields.Description ? "; " : "") + tag;
                        }
                    ]
                }
            },
            "lightning" : {
                name : "Lightning",
                description : "\n  My Primal Strikes deal lightning damage.",
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (!v.isWeapon) return;

                            var lvl  = classes.known.beastheart.level || 0;
                            var dice = lvl < 14 ? "1d8" : "2d8";

                            if (!fields.Description) fields.Description = "";
                            var tag = "Primal Strikes +" + dice + " lightning damage";
                            if (fields.Description.indexOf(tag) !== -1) return;

                            fields.Description += (fields.Description ? "; " : "") + tag;
                        }
                    ]
                }
            },
            "poison" : {
                name : "Poison",
                description : "\n  My Primal Strikes deal poison damage.",
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (!v.isWeapon) return;

                            var lvl  = classes.known.beastheart.level || 0;
                            var dice = lvl < 14 ? "1d8" : "2d8";

                            if (!fields.Description) fields.Description = "";
                            var tag = "Primal Strikes +" + dice + " poison damage";
                            if (fields.Description.indexOf(tag) !== -1) return;

                            fields.Description += (fields.Description ? "; " : "") + tag;
                        }
                    ]
                }
            },
            "thunder" : {
                name : "Thunder",
                description : "\n  My Primal Strikes deal thunder damage.",
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (!v.isWeapon) return;

                            var lvl  = classes.known.beastheart.level || 0;
                            var dice = lvl < 14 ? "1d8" : "2d8";

                            if (!fields.Description) fields.Description = "";
                            var tag = "Primal Strikes +" + dice + " thunder damage";
                            if (fields.Description.indexOf(tag) !== -1) return;

                            fields.Description += (fields.Description ? "; " : "") + tag;
                        }
                    ]
                }
            }
        },
        "feature_9_mystic_connection" : {
            name : "Mystic Connection",
            minlevel : 9,
            source : ["BHMC", 30],
            description : desc([
                "Your bond grants you a mystic ability. Select your current companion from the",
                "'Choose Feature' > 'Mystic Connection' menu."
            ]),
            
            choices : [
                "Basilisk","Blood Hawk","Bulette","Deinonychus","Earth Elemental",
                "Gelatinous Cube","Giant Spider","Giant Toad","Giant Weasel",
                "Hell Hound","Mimic","Owlbear","Sporeling","Worg",
                "Dragon Wyrmling - Black","Dragon Wyrmling - Blue","Dragon Wyrmling - Green",
                "Dragon Wyrmling - Red","Dragon Wyrmling - White",
                "Dragon Wyrmling - Brass","Dragon Wyrmling - Bronze","Dragon Wyrmling - Copper",
                "Dragon Wyrmling - Gold","Dragon Wyrmling - Silver"
            ],

            /* =======================
            STANDARD COMPANIONS
            ======================= */

            "basilisk" : {
                name : "Mystic Connection (Basilisk)",
                description : desc([
                    "As a bonus action,I gain resistance to bludgeoning, piercing, and slashing damage for 10 minutes."
                ]),
                action : [["bonus action", "Mystic Connection (Basilisk)"]],
                usages : 1,
                recovery : "long rest"
            },

            "blood hawk" : {
                name : "Mystic Connection (Blood Hawk)",
                description : desc([
                    "As a bonus action, I gain a flying speed equal to my walking speed for 1 hour."
                ]),
                action : [["bonus action", "Mystic Connection (Blood Hawk)"]],
                usages : 1,
                recovery : "long rest"
            },

            "bulette" : {
                name : "Mystic Connection (Bulette)",
                description : desc([
                    "As a bonus action, I gain a burrowing speed equal to my walking speed for 10 minutes."
                ]),
                action : [["bonus action", "Mystic Connection (Bulette)"]],
                usages : 1,
                recovery : "short or long rest"
            },

            "deinonychus" : {
                name : "Mystic Connection (Deinonychus)",
                description : desc([
                    "I can take the Hide action as a bonus action."
                ]),
                action : [["bonus action", "Mystic Connection (Deinonychus)"]],
                usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
                recovery : "long rest"
            },

            "earth elemental" : {
                name : "Mystic Connection (Earth Elemental)",
                description : desc([
                    "As a bonus action, my body becomes dirt and stone for 10 minutes. While transformed, I can",
                    "pass through nonmagical earth and stone. If I end my turn inside an object, I take 1d10 force",
                    "damage and am shunted out to the location I entered the object."
                ]),
                action : [["bonus action", "Mystic Connection (Earth Elemental)"]],
                usages : 1,
                recovery : "long rest"
            },

            "gelatinous cube" : {
                name : "Mystic Connection (Gelatinous Cube)",
                description : desc([
                    "As a bonus action, I can make my body flexible and gelatinous. While in this state, I can",
                    "absorb or excrete a Tiny object as a bonus action. I can secrete a maximum of 4 objects at a.",
                    "time. When a creature within 5 ft hits me with a melee attack, I can use my reaction to deal",
                    "3d6 acid damage to the attacker."
                ]),
                action : [["bonus action", "Mystic Connection (Gelatinous Cube)"]],
                usages : 1,
                recovery : "long rest"
            },

            "giant spider" : {
                name : "Mystic Connection (Giant Spider)",
                description : desc([
                    "I have advantage on initiative rolls and can't be surprised while not incapacitated."
                ])
            },

            "giant toad" : {
                name : "Mystic Connection (Giant Toad)",
                description : desc([
                    "I can hold my breath for up to 1 hour and gain a swim speed equal to my walking speed.",
                    "I make long and high jumps as if I had a running start."
                ])
            },

            "giant weasel" : {
                name : "Mystic Connection (Giant Weasel)",
                description : desc([
                    "As a bonus action, my teeth become pointed for 1 minute. During this time, I can make a bite",
                    "attack as a bonus action. My bite is a natural weapon that I'm proficient in. This attack uses",
                    "either my Str or Dex modifier for attacks and damage and deals 1d10 piercing damage."
                ]),
                action : [["bonus action", "Mystic Connection (Giant Weasel)"]],
                usages : 1,
                recovery : "long rest"
            },

            "hell hound" : {
                name : "Mystic Connection (Hell Hound)",
                description : desc([
                    "As a bonus action, I shroud myself in fire for 10 minutes. The first time each turn a creature",
                    "within 5 ft touches me or hits me with a melee attack, it takes 2d6 fire damage."
                ]),
                action : [["bonus action", "Mystic Connection (Hell Hound)"]],
                usages : 1,
                recovery : "long rest"
            },

            "mimic" : {
                name : "Mystic Connection (Mimic)",
                description : desc([
                    "As a bonus action, I can polymorph a nonmagical item into another nonmagical item of",
                    "nsimilar size and weight for up to 1 hour. The effect ends early if I move more than 30 ft away,",
                    "an hour elapses, or I end the effect as an action."
                ]),
                action : [["bonus action", "Mystic Connection (Mimic)"]],
                usages : 1,
                recovery : "long rest"
            },

            "owlbear" : {
                name : "Mystic Connection (Owlbear)",
                description : desc([
                    "As an action, I let out an inspiring hoot. Each creature of my choice within 30 ft gains",
                    "temporary hit points equal to my Beastheart level."
                ]),
                action : [["action", "Mystic Connection (Owlbear)"]],
                usages : 1,
                recovery : "long rest"
            },

            "sporeling" : {
                name : "Mystic Connection (Sporeling)",
                description : desc([
                    "When I hit a creature with a weapon attack, I can infuse the attack with spores. The target has",
                    "disadvantage on its attack rolls until the end of its next turn."
                ]),
                usages : 1,
                recovery : "short or long rest"
            },

            "worg" : {
                name : "Mystic Connection (Worg)",
                description : desc([
                    "My walking speed increases by 10 feet."
                ]),
                speed : { walk : "+10" }
            },

            /* =======================
            DRAGON WYRMLINGS
            ======================= */

            "dragon wyrmling - black" : {
                name : "Mystic Connection (Black Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 acid damage."
                ]),
                action : [["bonus action", "Mystic Connection (Black Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - blue" : {
                name : "Mystic Connection (Blue Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 lightning damage."
                ]),
                action : [["bonus action", "Mystic Connection (Blue Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - green" : {
                name : "Mystic Connection (Green Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 poison damage."
                ]),
                action : [["bonus action", "Mystic Connection (Green Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - red" : {
                name : "Mystic Connection (Red Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 fire damage."
                ]),
                action : [["bonus action", "Mystic Connection (Red Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - white" : {
                name : "Mystic Connection (White Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 cold damage."
                ]),
                action : [["bonus action", "Mystic Connection (White Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - brass" : {
                name : "Mystic Connection (Brass Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 fire damage."
                ]),
                action : [["bonus action", "Mystic Connection (Brass Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - bronze" : {
                name : "Mystic Connection (Bronze Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 lightning damage."
                ]),
                action : [["bonus action", "Mystic Connection (Bronze Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - copper" : {
                name : "Mystic Connection (Copper Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 acid damage."
                ]),
                action : [["bonus action", "Mystic Connection (Copper Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - gold" : {
                name : "Mystic Connection (Gold Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 fire damage."
                ]),
                action : [["bonus action", "Mystic Connection (Gold Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            },

            "dragon wyrmling - silver" : {
                name : "Mystic Connection (Silver Wyrmling)",
                description : desc([
                    "As a bonus action, I imbue a weapon I hold with draconic power for 10 minutes. While",
                    "imbued, attacks made with that weapon deal an extra 1d10 cold damage."
                ]),
                action : [["bonus action", "Mystic Connection (Silver Wyrmling)"]],
                usages : 1,
                recovery : "long rest"
            }
        },
        "feature_13_loyal_to_the_end" : {
            name : "Loyal to the End",
            minlevel : 13,
            description : desc([
                "Both me and my companion cannot be charmed or frightened."
            ])
        },
        "feature_14_keen_senses" : {
            name : "Keen Senses",
            minlevel : 14,
            description : desc([
                "I gain advantage on Wisdom (Perception) checks involving sight, sound or smell.",
                "Additionally, I can take the Search action as a bonus action."
            ]),
            vision : [["Adv. on Perception relying on sight, hearing, or smell", 0]]
        },
        "feature_18_summon_the_wilds" : {
            name : "Summon the Wilds",
            minlevel : 18,
            description : desc([
                "As an action, I summon a swarm of nearby creatures (animals, insects, fish, birds) for 1 minute.",
                "The swarm occupies a 30ft cube and appears, centered on a point up to 120ft away. All ",
                "creatures of my choice who start their turn in the swarm's area must make a Wis save or have",
                "disadvantage on attacks, saves, and ability checks, and gain a -5 penalty to passive perception",
                "until the start of their next turn. As a bonus action I can move the swarm 30ft in any direction."
            ]),
            action : [["action", "Summon the Wilds"]],
            usages : 1,
            recovery : "short or long rest"
        },
        "feature_20_unbreakable_friendship" : {
            name : "Unbreakable Friendship",
            minlevel : 20,
            description : desc([
                "While my companion is on at least 1 hp and can see and hear me, I can choose to succeed on",
                "Animal Handling checks to prevent my companion from entering rampage, and my",
                "companion gains 1d10 ferocity when they roll for initiative. Furthermore, if my companion is",
                "reduced to 0 hit points but not killed outright, they drop to 1h if my companion is instead."
            ])
        }
    }
};  
// Beastheart Subclasses

/* --- Subclass: Ferocious Bond --- */
AddSubClass("beastheart", "ferocious bond", {
    regExpSearch : /^(?=.*ferocious)(?=.*bond).*$/i,
    subname : "Ferocious Bond",
    source : ["BHMC", 32],
    features : {
        "ferociousfeature 3.0" : {
            name : "Frenzied Charge",
            source : ["BHMC", 32],
            minlevel : 3,
            description : desc([
                "As a reaction to when my companion enters rampage, I can move up to 30ft then make a",
                "melee weapon attack.",
            ]),
            action : ["reaction", ""],
        },
        "ferociousfeature 3.1" : {
            name : "Fury of the Wise",
            source : ["BHMC", 33],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Intimidation if I do not already have it. Additionally, I can add my Wis", 
                "modifier to Cha (Intimidation) checks."
            ]),
            eval : function () {
                var profs = What("ProfSkills");
                var hasIntimidation = profs && profs.indexOf("Inti") !== -1;

                if (hasIntimidation) {
                    // already proficient → expertise
                    AddSkillProf("Inti", true, true);
                } else {
                    // not proficient → proficiency only
                    AddSkillProf("Inti", true, false);
                }
            },
            removeeval : function () {
                AddSkillProf("Inti", false, false);
            }
        },
        "ferociousfeature 7.0" : {
            name : "Energizing Rampage",
            source : ["BHMC", 32],
            minlevel : 7,
            description : desc([
                "When my companion ends rampage, their ferocity drops to 4 rather than 0.",
            ]),
        },
        "ferociousfeature 11.0" : {
            name : "Furious Rampage",
            source : ["BHMC", 34], 
            minlevel : 11,
            description : desc([
                "When my companion hits one of my enemies during a rampage with a signature attack,",
                "the attack deals extra damage equal to their ferocity. While rampaging, when my",
                "companion attacks a target within 5ft of me, they can make the attack with advantage.",
                "If I make an attack against a target within 5ft of my companion after using Furious",
                "Charge, I can make the attack with advantage.",
            ]),
        },
        "ferociousfeature 15.0" : {
            name : "Invigorating Rampage",
            source : ["BHMC", 34],
            minlevel : 15,
            description : desc([
                "When my companion hits a creature with a signature attack during rampage, or if I hit a",
                "creature after using Frenzied Charge, the target becomes either blinded, deafened or",
                "frightened (my choice) of the attacker until the end of the target's next turn"
            ]),
        },
    },
})

/* --- Subclass: Hunter Bond --- */
AddSubClass("beastheart", "hunter bond", { 
    regExpSearch : /^(?=.*hunter)(?=.*bond).*$/i,
    subname : "Hunter Bond",
    source : ["BHMC", 34],  
    features : {
        "hunterfeature 3.0" : {
            name: "Chosen Quarry",
            source : ["BHMC", 34],
            minlevel : 3,
            description : desc([   
                "When my companion gains ferocity at the start of my turn and doesn't enter rampage, I", 
                "can spend 4 ferocity to designate one creature I can see within 60ft of me as my quarry",
                "for 1 minute or until I choose a new target. When I hit my quarry with a weapon attack",
                "or deal damage to them with a ferocity action, the attack deals an extra 1d6 damage.",
            ]),
        },
        "hunterfeature 3.1" : {
            name : "Hunter's Instincts",
            source : ["BHMC", 34],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Survival if I do not already have it.",
                "My proficiency bonus is doubled for any ability check I make using Survival.",
                "I can use Survival instead of Insight when I make a Wisdom check to read a creature's intentions or discern if a creature is lying."
            ]),
            eval : function () {
                var profs = What("ProfSkills");
                var hasSurvival = profs && profs.indexOf("Sur") !== -1;

                if (hasSurvival) {
                    // already proficient → expertise
                    AddSkillProf("Sur", true, true);
                } else {
                    // not proficient → proficiency only
                    AddSkillProf("Sur", true, false);
                }
            },
            removeeval : function () {
                AddSkillProf("Sur", false, false);
            }
        },
        "hunterfeature 7.0" : {
            name : "Primal Warding",
            source : ["BHMC", 34],
            minlevel : 7,
            description : desc([
                "As an action, create a 10ft square trap on the ground centered on a point I can see within",
                " 30ft of me. The trap lasts 8 hours. I can designate any number of creatures that are",
                "unaffected by it. Finding the trap requires an Int (Investigation check. When any undesignated",
                "creature enters the trap's area, it must make a Con save or take 4d8 damage and be blinded",
                "for 1 minute. On a save, it takes half damage and is not blinded. When triggered the trap", 
                "mentally alerts me, waking me if I am asleep. I know which trap has been tripped if I have set",
                "more than one. I can set a number of traps equal to my Wis modifier per long rest",
            ]),
            action : [["action", ""]],
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest",
        },
        "hunterfeature 11.0" : {
            name : "Synchronized Stealth", 
            source : ["BHMC", 34],
            minlevel : 11,
            description : desc([
                "When either my companion or I takes the Hide action, the other can also hide as a reaction ",
                "(if they are able to hide). Additionally, if I am within 5ft when I take the Hide action, I",
                "make the Dex (Stealth) check with advantage.",
            ]),
            action : [["reaction", ""]],
        },
        "hunterfeature 15.0" : {
            name : "Unseen Hunters",
            source : ["BHMC", 34],
            minlevel : 15,
            description : desc([
                "As an action, my companion and I become invisible for 10 minutes. While invisble, my",
                "companion and I can not be tracked by non-magical means unless my companion or I choose",
                "to leave a trail. My companion or I can end the invisibility early as a bonus action.",
            ]),
            action : [["action", ""]],
            recovery : "long rest",
            usages : 1,
        },
    },
})

/* --- Subclass: Infernal Bond --- */
AddSubClass("beastheart", "infernal bond", {
    regExpSearch : /^(?=.*infernal)(?=.*bond).*$/i,
    subname : "Infernal Bond",
    source : ["BHMC", 36],
    features : {    
        "infernalfeature 3.0" : {
            name : "Devil's Understanding",
            source : ["BHMC", 36],
            minlevel : 3,
            description : desc([
                "I gain proficiency in either Arcana or Religion, if I don't already have proficiency in either.", 
                "Also, I can now speak, write and understand Infernal.",
            ]),
            choices : ["Arcana", "Religion"],
            "arcana" : {
                name : "Arcana",
                eval : function () {
                    AddSkillProf("arc", true, false); 
                },
                removeeval : function () {
                    RemoveSkillProf("arc", false, false);
                },
            },
            "religion" : {
                name : "Religion",
                eval : function () {
                    AddSkillProf("rel", true, false); 
                },
                removeeval : function () {
                    RemoveSkillProf("rel", false, false);
                },
            },
            languageProfs : ["Infernal"],
        },
        "infernalfeature 3.1" : {
            name : "Infernal Exploits",
            source : ["BHMC", 36],
            minlevel : 3,
            description : desc([
                'Use the "Choose Feature" button above to add Infernal Exploits to the third page. Whenever I',
                "gain a Beastheart level, I can replace an exploit I know with another.",
            ]),
            additional: levels.map(function (n) {
                return n < 3 ? "" : (n < 11 ? 1 : 2) + " Infernal Exploits known";
            }),
            extraname : "Infernal Exploits",
            extrachoices : ["Drain Them", "Hellish Wound", "Infernal Teleport", "Wicked Deception", "Brimstone Teleport", "Chains from Hell", "Dark of Hell", "Infernal Flames", "Poison Rain"],
            extraTimes : levels.map(function (n) {
                return n < 3 ? 0 : n < 11 ? 1 : 2;
            }),
            "drain them": {
                name : "Drain Them",
                source : ["BHMC", 36],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [4 Ferocity]" + desc([
                    "When my companion hits a creature with their signature attack, I can use my reaction to have",
                    "my companion gain hit points equal to half the damage dealt.",
                ]),
                action : [["reaction", ""]],
            },
            "hellish wound": {
                name : "Hellish Wound",
                source : ["BHMC", 36],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [4 Ferocity]" + desc([
                    "When my companion hits a non-construct, non-undead creature with an attack, I can to have",
                    "my companion inflict a Hellish Wound (no action reqd). At the start of each of the target's",
                    "turns, it loses 1d10 hit points for each Hellish Wound. The Hellish Wounds disappear if the",
                    "target receives magical healing or if any creature uses and action to staunch the wounds with",
                    "a successful Wis (Medicine).",
                ]),
                action : [["reaction", ""]],
            },
            "infernal teleport": {
                name : "Infernal Teleport",
                source : ["BHMC", 36],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [4 Ferocity]" + desc([
                    "As an action, I can teleport myself or my companion to an unoccupied space I can see within",
                    "90ft of our location.",
                ]),
                action : [["action", ""]],
            },
            "wicked deception": {
                name : "Wicked Deception",
                source : ["BHMC", 36],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [3 Ferocity]" + desc([
                    "As an action, target creature within 30ft of me must succeed on a Wis save or view me and",
                    "my companion as friends until the end of my next turn or my companion or I attack them.",
                    "While affected, the target can't attack or otherwise harm me or my companion. Creatures that",
                    "are immune to charm are unaffected.",
                ]),
                action : [["action", ""]],
            },
            "brimstone teleport": {
                name : "Brimstone Teleport",
                source : ["BHMC", 38],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, teleport to a space within 30ft of my current location that I can see. Each",
                    "creature within 5ft of the space I left and the space I arrive at must make a Dex save or take",
                    "4d6 fire damage, half on a successful save. The damage increases to 5d6 at level 17."
                ]),
                action : [["action", ""]],
            },
            "chains from hell": {
                name : "Chains from Hell",
                source : ["BHMC", 38],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, cause fiery chains to wrap around 3 targets I can see within 30ft of me. Each",
                    "target must succeed on a Dex save or take 4d6 fire damage and be restrained until the end of",
                    "my next turn. On a successful save,target takes half damage and aren't restrained. The",
                    "damage increases to 5d6 at level 17.",
                ]),
                action : [["action", ""]],
            },
            "dark of hell": {
                name : "Dark of Hell",
                source : ["BHMC", 38],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, cause my companion to radiate a 10ft radius of magical darkness (as per the",
                    "Darkness spell) until the end of my next turn. The darkness moves with my companion. My",
                    "companion and I can see through the darkness.",
                ]),
                action : [["action", ""]],
            },
            "infernal flames": {
                name : "Infernal Flames",
                source : ["BHMC", 38],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, a burst of flame erupts from my companion. Each creature within 20ft of my",
                    "companion must make a Dex save or take 4d10 fire damage, half on a successful save. My",
                    "companion and I take no damage from the fire. The damage increases to 5d10 at level 17.",
                ]),
                action : [["action", ""]],
            },
            "poison rain": {
                name : "Poison Rain",
                source : ["BHMC", 38],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, cause a rain of poison to fall in a 20ft cube centered on a point within 60ft of",
                    "me. Each creature in the area must make a Con save or be poisoned until the end of my next",
                    "turn. My companion and I are immune to this poison.",
                ]),
                action : [["action", ""]],    
            },
        },
        "infernalfeature 7.0" : {
            name : "Hell's Charmer",
            source : ["BHMC", 38],
            minlevel : 7,
            description : desc([
                "As an action, target a creature within 30ft that can see both my companion and I. Target must",
                "make a Wis save or be charmed by me and my companion for 10 minutes or until it is harmed",
                "by me or my allies. When the effect ends, the doesn't remember anything that occurred while", 
                "it was charmed. If the target saves, they know that I tried to charm it and becomes hostile to",
                "me and my companion. If we are fighting the target, it has advantage on the save."
            ]),
            action : [["action", ""]],
            usages : What('WisMod'),
            recovery : "long rest",
        },
        "infernalfeature 11.0" : {
            name : "Fiendish Traits",
            source : ["BHMC", 38],
            minlevel : 11,
            description : desc([
                "When I finish a long rest, I can choose one of the following traits for my companion: ",
                "\u2022 Barbed Hide: When my companion is hit by a melee attack or grappled by a creature",
                "   within 5ft of it the attacker takes 1d10 piercing damage.",
                "\u2022 Fiendish Immunities: My companion gains immunity to fire, poison and the poisoned",
                "   condition.",
                "\u2022 Fiery Weapons: My companion's signature attack deals an extra 1d6 fire damage.",
                "\u2022 Wings: My companion gains a 40ft flying speed. If it already has a flying speed,",
                "   its flying speed increases by 40ft."
            ]),
        },
        "infernalfeature 15.0" : {
            name : "Fiendish Form",
            source : ["BHMC", 38],
            minlevel : 15,
            description : desc([
                "As a bonus action, I can spend 6 ferocity to transform my companion into a fiendish form for",
                "1 minute. While in this form, my companion's type changes to Fiend, gains resistance to",
                "bludgeoning, piercing, and slashing damage and gains advantage on saves vs spalls and",
                "other magical effects."
            ]),
            action : [["bonus action", ""]]
        }
    }
})

/* --- Subclass: Primordial Bond --- */
AddSubClass("beastheart", "primordial bond", {
    regExpSearch : /^(?=.*primordial)(?=.*bond).*$/i,
    subname : "Primordial Bond",
    source : ["BHMC", 39],
    features : {
        "primordialfeature 3.0" : {
            name: "Nature Exploits",
            source : ["BHMC", 39],
            minlevel : 3,
            description : desc([
                'Use the "Choose Feature" button above to add Nature Exploits to the third page',
                "Whenever I gain a Beastheart level, I can replace an exploit I know with another.",
            ]),
            additional: levels.map(function (n) {
                return n < 3 ? "" : (n < 11 ? 1 : 2) + " Nature Exploits known";
            }),
            extraname : "Nature Exploit",
            extrachoices : ["Elemental Shield", "Freezing Strike", "Sickening Strike", "Wings When I Need Them", "Lava Geyser", "Lightning Eruption", "Plant Prison", "Stinging Swarm", "Thunderous Rebuke"],
            extraTimes : levels.map(function (n) {
                return n < 3 ? 0 : n < 11 ? 1 : 2;
            }),
            "elemental shield": {
                name : "Elemental Shield",
                source : ["BHMC", 38],
                minlevel : 3,
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [3 Ferocity]" + desc([
                    "As a reaction, give a creature I can see within 30ft of me resistance to one damage type",
                    "(acid, cold, fire, lightning, or thunder) until the end of my next turn when hit by that",
                    "damage type.",
                ]),
                action : [["reaction", ""]],
            },
            "freezing strike": {
                name : "Freezing Strike",
                source : ["BHMC", 39],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [2 Ferocity]" + desc([
                    "When I hit a target with a weapon attack using the Attack action, the target takes an",
                    "extra 1d6 cold damage and its speed is reduced by 10ft until the start of my next turn.",
                    "The extra damage increases to 2d6 at level 5, 3d6 at level 11, and 4d6 at level 17.",
                ]),
            },
            "sickening strike": {
                name : "Sickening Strike",
                source : ["BHMC", 39],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3 ;
                },
                description : " [3 Ferocity]" + desc([
                    "When I hit a target with a weapon attack using the Attack action, the target must succeed",
                    "on a Con save or become poisoned until the start of my next turn.",
                ]),
            },
            "wings when i need them": {
                name : "Wings When I Need Them",
                source : ["BHMC", 39],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 3;
                },
                description : " [5 Ferocity]" + desc([
                    "At the start of my turn, when my companion gains ferocity and doesn't rampage, either",
                    "my companion or I gains a flying speed equal to our walking speed until the start of my",
                    "next turn.",
                ]),
            },
            "lava geyser": {
                name : "Lava Geyser",
                source : ["BHMC", 39],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "As an action, summon a cylinder of gushing lava 10ft high with a 5ft radius. Each creature ",
                    "in the area must succeed on Dex save or take 4d6 fire damage and is knocked prone. On a ",
                    "success, targets take half damage and aren't knocked prone. The lavea dissolves into a fiery",
                    "mist. The damage increases to 5d6 at level 17.",
                ]),
                action : [["action", ""]],
            },
            "lightning eruption": {
                name : "Lightning Eruption",
                source : ["BHMC", 39],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [8 Ferocity]" + desc([
                    "When I hit a creature with a weapon attack, deal 5d6 lightning damage. Choose another",
                    "target within 30ft of the original target, it must make a Dex save or take 5d6 lightning",
                    "damage, half on a save. The damage increases to 6d6 at level 17.",
                ]),
            },
            "plant prison": {
                name : "Plant Prison",
                source : ["BHMC", 39],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [5 Ferocity]" + desc([
                    "As an action, thorny vines wrap around target within 30ft. Target must make Dex save or",
                    "take 4d6 piercing damage and is restrained until the start of my next turn. Successful",
                    "save means half damage and target isn't restrained. The damage increases to 5d6 at level 17.",
                ]),
                action : [["action", ""]],
            },
            "stinging swarm": {
                name : "Stinging Swarm",
                source : ["BHMC", 41],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [6 Ferocity]" + desc([
                    "As an action, conjure a swarm f stinging insects in a 30ft line that is 5ft wide. Each",
                    "creature in the line must make a Con save or take 4d6 piercing damage, and half as much",
                    "on a success. My companion is unaffected by the insects. The damage increases to 5d6 at",
                    "level 17.",
                ]),
                action : [["action", ""]],
            },
            "thunderous rebuke": {
                name : "Thunderous Rebuke",
                source : ["BHMC", 41],
                prereqeval : function (v) {
                    return classes.known.beastheart.level >= 11;
                },
                description : " [6 Ferocity]" + desc([
                    "When my companion or I are hit by a melee attack from a creaqture within 5 ft, I can",
                    "use my reaction to force the attacker to make a Con save or take 3d6 thunder damage and",
                    "be pushed back 10ft. On a success, the attacker takes half as much and is not pushed back.",
                    "The damage increases to 4d6 at level 17.",
                ]),
                action : [["reaction", ""]],
            },
        },
        "primordialfeature 3.1" : {
            name : "Primal Understanding",
            source : ["BHMC", 41],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Nature, if I don't have it already. I can also speak, write and understand",
                "Primordial and Sylvan"
            ]),
            eval : function () {
                    AddSkillProf("nat", true, false); 
                },
                removeeval : function () {
                    RemoveSkillProf("arc", false, false);
                },
            languagesProfs : ["Primordial", "Sylvan"],
        },
        "primordialfeature 7.0" : {
            name : "Allied Earth",
            source : ["BHMC", 41],
            minlevel : 7,
            description : desc([
                "As long as my companion has at least 1 ferocity, all ground within 10ft of it is difficult terrain",
                "for its enemies",
            ]),
        },
        "primordialfeature 11.0" : {
            name : "Spirit Stampede",
            source : ["BHMC", 41],
            minlevel : 11,
            description : desc([
                "When my companion enters a rampage, all creatures of your choice within 30ft take force damage equal",
                "to my companion's ferocity.",
            ]),
        },
        "primordialfeature 15.0" : {
            name : "Allied Weather",
            source : ["BHMC", 41],
            minlevel : 15,
            description : desc([
                "When my companion is hit by a melee attack by a creature within 10ft of it, and it has at least 1",
                "ferocity, one of the following effects occurs (my choice):",
                "\u2022 Attacker must make a Str save or be knocked prone",
                "\u2022 Attacker must make a Dex save or take lightning damage equal to my companion's ferocity",
            ]),
        },
    },
})


AddSubClass("beastheart", "protector bond", {
    regExpSearch : /protector/i,
    subname : "Protector Bond",
    source : ["BHMC", 27],
    features : {
        "protectorfeature 3.0" : {
            name : "Beast Vitality",
            minlevel : 3,
            description : desc([
                "My hit point maximum increases by 1 for each Beastheart level."
            ]),
            calcChanges : {
                hp : function (totalHD) {
                var bh = classes.known.beastheart ? classes.known.beastheart.level : 0;
                if (bh < 3) return; 
                return [bh, "Beast Vitality (Beastheart level)"];
                }
            }
        },
        "protectorfeature 3.1" : {
            name : "Pack Phalanx",
            minlevel : 3,
            description : desc([
                "When my companion and I are not incapacitated and within 5ft of a creature, it has", 
                "disadvantage on attack rolls against targets that are not myself or my companion."
            ])
        },
        "protectorfeature 7.0" : {
            name : "Thickened Hide",
            minlevel : 7,
            description : desc([
                "Your companion's natural defenses improve, granting it +2 AC."
            ])
        },
        "protectorfeature 11.0" : {
            name : "Sentinel Companion",
            minlevel : 11,
            description : desc([
                "If a creature within 5ft of my companion attacks a target other than my companion, I can", 
                "spend 2 ferocity to have my companion use their reaction to make a signature attack against",
                "that creature."
            ])
        },
        "protectorfeature 15.0" : {
            name : "Undying Protector",
            minlevel : 15,
            description : desc([
                "If I fall to 0 hit points and can see my companion, I can spend 2 ferocity to drop to 1 hit point",
                "instead. Each time I use this feature, the cost increases by 2 ferocity. The cost resets to 2",
                "ferocity when I finish a long or short rest."
            ])
        }
    }
});