var iFileName = "Beastheart.js";

RequiredSheetVersion('13');

/* ==== INFORMATION =======================================	
    Subject:	Class and Subclasses
    Effect:		This script adds the Beastheart class, 
                developed by MCDM (mcdmproductions.com).
    Code by:	G33x.
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

// Create Beastheart Companion function
var createBeastheartCompanion = function (bhcomp) {
    var types = {
        'basilisk': {
            compName : "Basilisk",
            compSize : 3,
            compType : "monstrosity",
            compAC : 15,
            compHP : 7,
            compMove : "30ft",
            compStats : [16,10,15,5,12,10],
            compSaves : ["","","2","","",""],
            compSkills: {
                "Athletics" : 3,
                "Survival" : 1
            },
            compDR : "",
            compImms : "",
            compPP : 11,
            compSenses : "Darkvision 60ft",
            compLangs : "",
            compSigAttackName : "Bite",
            compSigDamageType : "piercing",
            comp1stLevelTraitName : "Poison Spittle (2 Ferocity)",
            comp1stLevelTraitDesc : "A signature attack that deals PB extra damae and one creature within 5ft also takes PB poison damage.",
            comp3rdLevelTraitkName : "Poison Gaze (5 Ferocity)",
            comp3rdLevelTraitDesc : "3 creatures basilisk can see in 15ft - Con save or become poisoned",
            comp5thLevelTraitName : "Lesser Petrifying Gaze (8 Ferocity)",
            comp5thLevelTraitDesc : "Target within 30ft must make Con save or be restrained. On fail, target must repeat save at the end of next turn or become petrified for 1 hour",
            compDescription : "A multilegged, reptilian horror whose deadly gaze transforms victims into porous stone.",
            compFeatureName : "Heavy Glare",
            compFeatureDesc : "When I hit a target that the basilisk can see, the target must make a Con save or it can't make opportunity attacks and its speed is reduced by 10ft until the start of its next turn",
        },
        'blood hawk': {
            energy: "lightning",
            breathRange: "5-ft x 30-ft line",
            breathSave: "Dex",
            description: "This dragon's scales begin sky blue with cloudy white flecks, aging to deep oceanic blue. Breathes electrical energy."
        }
    };
    // Set up variables
    var lvl = What("Classes.Beastheart.level");
    var pb  = What("ProfBonus");
    var wis = What("Wis Mod");
    var sub = What("ClassSub.beastheart");

    var type = types[bhcomp];
    if (!type) return false;

    var BHsigDice = function (n) {
        if (n < 5)  return "1";
        if (n < 11) return "2";
        if (n < 17) return "3";
        return "4";
    };

    var sigDice = BHsigDice(lvl);

    var creature = {
        name : type.compName + " Companion",
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
        hdLinked : ["beastheart"],
        speed : type.compMove,
        scores : type.compStats,
        saves : type.compSaves,
        skills : type.comSkills,
        damage_resistances : type.compDR,
        damage_immunities : type.compImms,
        passivePerception : type.compPP,
        senses : type.compSenses,
        languages : type.compLangs,
        challengeRating : "1",
        proficiencyBonus : pb,
        proficiencyBonusLinked : true,
        attacksAction : 1,
        attacks : [{
            name : type.compSigAttackName + " (Signature Attack)",
            ability : 1,
            damage : [sigDice, 6 , type.compSigDamageType],
            range : "Melee (5 ft)",
            description : "",
            abilitytodamage : true
        }],
        features: [{
            name: type.compFeatureName,
            description : type.compFeatureDesc
        }],
        traits: [{
            name: type.comp1stLevelTraitName,
            minlevel: 1,
            description: type.comp1stLevelTraitDesc,
        }, {
            name: type.comp3rdLevelTraitName,
            minlevel: 3,
            description: type.comp3rdLevelTraitDesc,
        }, {
            name: type.comp5thLevelTraitName,
            minlevel: 5,
            description: type.comp5thLevelTraitDesc,
        }/*,{
            name: "Natural Armor",
            description: "Your companion's AC increases by its Proficiency Bonus",
            eval: function (prefix, lvl) {
                var drLvl = classes.known.beastheart ? classes.known.beastheart.level : 0;
                var acBonus = What('profBonus');
                Value(prefix + "Comp.Use.AC", type.compAC + acBonus);
            },
            removeeval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.AC", type.compAC);
            }
        }
        , {
            name: "Advanced Darkvision",
            minlevel: 9,
            description: "The dragon's darkvision increases to 90 feet.",
            eval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.Senses", "Darkvision 90 ft");
            },
            removeeval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.Senses", "Darkvision 60 ft");
            }
        },{
            name: "Size/Speed Increase",
            minlevel: 15,
            eval: function (prefix, lvl) {
                var drLvl = classes.known['dragon rider'] ? classes.known['dragon rider'].level : 0;
                if (drLvl >= 15) {
                    PickDropdown(prefix + "Comp.Desc.Size", 1); // Huge
                    Value(prefix + "Comp.Use.Speed", "35 ft, fly 70 ft");
                } else if (drLvl >= 3) {
                    PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
                    Value(prefix + "Comp.Use.Speed", "25 ft, fly 30 ft");
                }
            },
            removeeval: function (prefix, lvl) {
                PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
                Value(prefix + "Comp.Use.Speed", "20 ft, fly 20 ft");
            }
        */
        ],
        notes: [{
            name: type.compName + " Companion",
            description: desc([
                type.description + "\n My companion looks to me for leadership and acts on my turn. It gains abilities as I gain Beastheart",
                "levels. If my companion is injured or dies, I can spend 1 minute meditating and return it to  life",
                "(if it died) and on full HP but I gain a level of exhaustion"
            ])
        }],
        calcChanges : {
            hp : function (totalHD, HDobj, prefix) {
                var creaHP = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 7;
                var bhLvl = classes.known.beastheart.level;
                var bhCompHp = (creaHP * bhLvl) + creaHP;
                HDobj.alt.push(bhCompHp);
            },
            ac : [
                function (fields, v) {
                var pb = What("ProfBonus");
                var sub = What("ClassSub.beastheart");
                // base natural armor from PB
                fields.ACcalc = v.baseAC + pb;

                // Protector Bond adds +2 AC at level 7+
                if (sub === "protector bond" && classes.known.beastheart.level >= 7) {
                    fields.ACcalc += 2;
                }
                },
                "Natural Armor: companion AC = base + PB (+2 if Protector Bond, 7+)"
            ],
            setAltHp : true
            },
    }
    return [creature];
};

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
      source : ["BHMC", 27],
      minlevel : 1,
      description : desc([
        "I gain a supernatural companion bound to me.",
        "Choose your companion below."
      ]),
      choices : [
        "Basilisk", "Blood Hawk", "Earth Elemental"
        // Add the rest once this trio works
      ],

      "basilisk" : {
        name : "Basilisk Companion",
        description : desc(["A Basilisk becomes my bonded companion."]),
        creaturesAdd : [["Basilisk Companion"]],
        creatureOptions : createBeastheartCompanion("basilisk")
      },
      "blood hawk" : {
        name : "Blood Hawk Companion",
        description : desc(["A Blood Hawk becomes my bonded companion."]),
        creaturesAdd : [["Blood Hawk Companion"]],
        creatureOptions : createBeastheartCompanion("blood hawk")
      },
      "earth elemental" : {
        name : "Earth Elemental Companion",
        description : desc(["An Earth Elemental becomes my bonded companion."]),
        creaturesAdd : [["Earth Elemental Companion"]],
        creatureOptions : createBeastheartCompanion("earth elemental")
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