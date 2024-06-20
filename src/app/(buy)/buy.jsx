import React from 'react'
import Image from 'next/image'
import { ChevronRight, ShoppingCart } from 'lucide-react'
import BuyCard from './BuyCard'





















const BuyData = [
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "66",
        "desc": "LVL 66 ACCOUNT WITH MYTHIC SETS\n• MK47 MUKTANT SAKURA\n• MK47 MUKTANT STREAM GEAR\n\nWEAPONS LAB\n- UMP45 MARINE LVL 3 MAX\n- DBS PHANTERA LVL 3 MAX\n- KNIFE LVL 2\n- CROSSBOW LVL 1\n- PAN LVL 1\n\nFREE UC 350+\nFREE 1 MYTHIC EMBLEM\n\nDm @believe4u\nSINGLE LOGIN",
        "price": "150",
        "photoId": 8 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "66",
        "desc": "PERMIUM ACCOUNT WITH FULLY GLACIER INVENTORY\n\n💫ACCOUNT LEVEL:66\n💫MYTHIC FASHION-36\n\n🌹 GLACIER X-SUIT 4-STAR\n                  • ɪᴛᴇᴍs ᴜɴʟᴏᴄᴋ•  \n        [ғʀᴀᴍᴇ,ʙᴀɢ,ᴏʀɴᴀ,ᴘᴀʀᴀᴄʜᴜᴛᴇ]\n\n🌹FIORE X-SUIT LEVEL 1\n\n#LAB_GUNS \n🔫M416 GLACIER LEVEL5\n🔫AKM GLACIER LEVEL3(easy lvl4)\n🔫DP28 DRAGON LEVEL4\n🔫AKM CODEBREAKER LEVEL2\n🔫 BUTTERFLY M24 LEVEL3(easy lvl4)\n🔫STREAMPUNK TOMMY LEVEL1\n🔫CROSSBOW SCREAMS LEVEL 1\n🔫 RANVEER M249 LEVEL1\n\n#SUPER_CAR \n🚘 GLACIER UAZ(rare)\n🚘CUTE PENGUIN SPEEDBOAT \n🚘UNYIELDING LAND UAZ\nWATCH FULL VIDEO FOR MORE INFO📹\n\nDM - @believe4u CHEAP PRICE 😍",
        "price": "300",
        "photoId": 4 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "70",
        "desc": "♨️RPS ~ S14,S17,M22,A1,A2,A3,\n♨️MYTHIC FASHION : [ 19/50 ]\n\n#GUN_LAB\n📛M416 GLACIER LVL 5\n📛AKM GLACIER LVL 4\n📛M249 RS FURY LVL 4\n📛UMP45 MARINE EVOLUTION LVL 3\n📛MACHETE DRAKONBANE REMNANT LVL 3\n📛CROSSBOW CIRCUS OF SCREAMS LVL 3\n📛GRANADE KILL MSG\n📛MOLLI KILL MSG\n\n#RARE_MYTHICS \n💠DIVINE SEAR SET\n💠CYCLE SET 4\n\nDM TO BUY:- @believe4u",
        "price": "250",
        "photoId": 12 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "85",
        "desc": "🔺PREMIUM ACCOUNT WITH GLACIER COMBO + 9 KILL MESSG + 90 MYTHICS \n\n💫ACCOUNT LEVEL : 85[HIGH]\n💫 S6/S8 OLD CONQUEROR [T+F]\n💫TOTAL MYTHICS : [90/100] \n💫SHREMAN EVENT VOICE\n✨ MARMORIS X-SUIT LVL 2 ✨\n                 • ɪᴛᴇᴍs ᴜɴʟᴏᴄᴋ•  \n      [ ғʀᴀᴍᴇ,ʙᴀɢ,ᴏʀɴᴀ,ᴘᴀʀᴀᴄʜᴜᴛᴇ ]\n               \n#OUTFITS \n💖 WHITE COMMANDER SET (RARE)\n💖 WHITE MUMMY SET (RARE)\n💖 FULL GLACIER SET (RARE)\n\n#UPGRADABLES\n🔫M416 GLACIER LEVEL 7 MAX\n🔫AKM GLACIER LEVEL 7 MAX\n🔫DP-28 DRAGON LEVEL 5 MAX\n🔫UMP MARINE LEVEL 3 MAX\n🔫PUMPKIN SCARL LEVEL 4\n🔫FOREST GROZA LEVEL 4\n🔫AWM AVENGER LEVEL 4\n🔫M249 WINTER QUEEN LEVEL 4\n🔫UZI ROMANTIC LEVEL 4\n🔫M416 THE FOOL LEVEL 2\n🔫JACK-O KILL MSG NADE 💣\n🔫GROZA EVENTIDE LEVEL 1\n🔫AUG EVANGELION LEVEL 1\n🔫M249 RANVEER FURY LEVEL 1\n🔫10 EXTRA GUN MATERIALS 🌟\n\n#SUPERCARS\n🚘TESLA CYBERTRUCK ( BLACK)\n🚘TESLA ROADSTER AMETHYST\n🚘PUMPKIN DACIA LEVEL 1 \n🚘ENCHAN PUMPKIN UAZ LVL 2\n\n-> CHEAPEST PRICE 😍😍\n\n💌 DM : @believe4u",
        "price": "500",
        "photoId": 3 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "85",
        "desc": "22+ UPGRADED WEAPONS\n\n--SUIT\nARCANE JESTER MAXX\nSILVANUS 5 star\n\n-WEAPON LAB 22 SET\nM416-Glacier (Lv.7) Maxx\nAKM -Glacier (Lv.7) Maxx\nM416-SILVER GURU (Lv.6)\nGroza -River Styx (Lv.7) Maxx\nAKM -Starsea Admiral (Lv.7) \nM762- Stray Rebellion (Lv.7)\n\nSCAR-L -Drop The bass (Lv.4)\nMG3 -Soaring Dragon (Lv.4)\nUMP45-EMP (Lv.4)\nM24 -Killer Tune (Lv.4)\nUZI - Romantic Moments (Lv.4)\nKar98k - Kulkukan Fury (Lv.4)\nAWM - Field Commander (Lv.4)\nVector - Golden Earl (Lv.4)\nKar98k - Nebula Hunter (Lv.1)\nUZI-Mystech (Lv.1)\nMk14- Gilded (Lv.1)\nMini14-Icicle (Lv.1)\nM762-8-bit (lv.1)\nDP28-Enigmatic (Lv.1)\nPAN-Tasty Cheese (Lv.1)\n\nCAR\nUAZ-LAMBORGHINI URUS GIALLO (YELLOW)\nUAZ-ROBUST NIGHT CITY\nRB-LAMBORGINI AVENTADO\nRB-MASERATI MC20\n\nDm @believe4u",
        "price": "450",
        "photoId": 9 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "65",
        "desc": "RP MANY SEASON MAX\nRENAME CARD AVAILABLE\n\nX SUIT LEVEL 4 (ALL KILL MESSAGE)\n\n#WEAPONS 19 GUNS SKINS ❣️\n\nM4 GLACIER LVL 5\nM4 JOKER LEVEL 5 \nM762 BARREL LEVEL 4 \nTHOMPSON LEVEL 4 \nEMP UMP LEVEL 4 \nVECTOR BLOOD LEVEL 4 \nM24 PAHROAH LEVEL 4 \nPAN ACCOLADE LEVEL 3 \nUZI EMBELEM LEVEL 2 \nM16A4 SKELETAL LEVEL 2 \nVSS CROW LEVEL 1 \nUMP NEW LEVEL 1 \nSCAR L BLUE LEVEL 1 \nM249 NEW LEVEL 1 \nAWM AVENGER LEVEL 1\nQBZ SUN LEVEL 1 \nM16A4 RADIANT LEVEL 1 \nDP DRAGON LEVEL 1 \nQBZ FATAL LEVEL 1\n\nDm @believe4u",
        "price": "200",
        "photoId": 5 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "75",
        "desc": "🏆 GLOBAL PREMIUM ACCOUNT 🏆\n\n🔅 POSEIDON XSUIT LEVEL - 5 \n🔅 KOENIGSEGG JESKO BLACK \n🔅 DOPE ACCOUNT OVERALL \n\n🎃 UPGRADABLE GUNS \n\n➠ Level 6 Final Form M416 Glacier \n➠ Level 4 Broadcast Akm G-Pirate \n➠ Level 4 Broadcast Awm Godzilla\n➠ Level 4 Broadcast M416 Techno\n➠ Level 4 Broadcast M762 Deadly\n➠ Level 4 Broadcast DP28 Blood\n➠ Level 4 Broadcast SKS Snowc\n➠ Level 3 Finish Message Mini14\n➠ Level 2 Finish Message SCARL\n➠ Level 2 Finish Message Groza\n➠ Level 1 Finish Message M249\n\n🔱 VVIP VEHICLES 🔱\n\n🔸 UAZ TESLA MODEL Y BLACK\n🔸 LAMBO VIOLET\n🔸 LAMBO GREEN\n🔸 3 LAMBO\n🔸 KOENIGSEGG \n\nAll Car Skins Available In This Account\n\nSingle log in \nSelling Price : [ 330 USD ] \n\nDm :- @believe4u \nOnly interested people dm me\nDon't ask for last price",
        "price": "330",
        "photoId": 10 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "60",
        "desc": "LVL 60 ACCOUNT WITH 16 MYTHIC SETS\n• M416 GLACIER LVL 5\n• AKM GLACIER LVL 4\n• M249 FROZEN LEVEL 4\n• UMP45 LEVEL 3\n• CROSSBOW LEVEL 3\n• PAN LEVEL 2\n\nRARE MYTHIC OUTFITS\n- WHITE MUMMY SET\n- GOLDEN PHARAOH SET\n\nDM @believe4u",
        "price": "200",
        "photoId": 7 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "73",
        "desc": "ACCOUNT LEVEL 73\n• M416 GLACIER LEVEL 6\n• AKM GLACIER LEVEL 5\n• DP28 DRAGON LEVEL 5\n• UMP45 MARINE LEVEL 4\n• M24 KILLER TUNE LEVEL 4\n• UZI GOLDEN LEVEL 3\n\nVEHICLES\n- TESLA CYBERTRUCK\n- LAMBORGHINI URUS\n\nRARE MYTHICS\n- DIVINE SET\n- PHARAOH SET\n\nDM @believe4u",
        "price": "280",
        "photoId": 2 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "82",
        "desc": "PREMIUM ACCOUNT WITH FULL GLACIER SET\n• M416 GLACIER LEVEL 7 MAX\n• AKM GLACIER LEVEL 7 MAX\n• DP28 GLACIER LEVEL 5\n• UMP45 MARINE LEVEL 3\n• M249 WINTER QUEEN LEVEL 4\n\nRARE VEHICLES\n- TESLA CYBERTRUCK\n- LAMBORGHINI ESTOQUE\n\nCONTACT @believe4u FOR PURCHASE",
        "price": "450",
        "photoId": 11 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "55",
        "desc": "LVL 55 ACCOUNT\n• M416 GLACIER LEVEL 5\n• AKM GLACIER LEVEL 4\n• UMP45 MARINE LEVEL 3\n• M24 PHARAOH LEVEL 3\n• PAN LEVEL 2\n\nRARE MYTHIC SETS\n- GOLDEN PHARAOH SET\n- WHITE MUMMY SET\n\nDM @believe4u",
        "price": "180",
        "photoId": 6 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "78",
        "desc": "LVL 78 ACCOUNT WITH RARE MYTHICS\n• M416 GLACIER LEVEL 6\n• AKM GLACIER LEVEL 5\n• DP28 DRAGON LEVEL 5\n• UMP45 MARINE LEVEL 4\n• M24 KILLER TUNE LEVEL 4\n• UZI GOLDEN LEVEL 3\n\nRARE VEHICLES\n- TESLA CYBERTRUCK\n- LAMBORGHINI URUS\n\nDM @believe4u",
        "price": "320",
        "photoId": 1 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "66",
        "desc": "LVL ACCOUNT 66\nMYTHIC FASHION 22/50\nRP A1234 MAX | M8 22 ON\nHAVE 12 MYTHIC SET\nRANKED CROWN IV EROPA\nMK47 MUKTANT SAKURA\nMK47 MUKTANT STREAM GEAR\n\nHAVE 5 WEAPONS LAB\nUMP45 MARINE LVL 3 MAX\nDBS PHANTERA LVL 3 MAX\nKNIFE LVL 2\nCROSSBOW LVL 1\nPAN LVL 1\n\nFREE UC 350+\nFREE 1 MYTHIC EMBLEM\n\nDm @believe4u\nSINGLE LOGIN",
        "price": "150",
        "photoId": 8 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "66",
        "desc": "PERMIUM ACCOUNT WITH FULLY GLACIER INVENTORY\n\n💫ACCOUNT LEVEL:66\n💫MYTHIC FASHION-36\n\n🌹 𝗚𝗟𝗔𝗖𝗜𝗘𝗥 𝗫-𝗦𝗨𝗜𝗧 𝟰𝗦𝗧𝗔𝗥\n • ɪᴛᴇᴍs ᴜɴʟᴏᴄᴋ•\n [ғʀᴀᴍᴇ,ʙᴀɢ,ᴏʀɴᴀ,ᴘᴀʀᴀᴄʜᴜᴛᴇ]\n\n🌹𝗙𝗜𝗢𝗥𝗘 𝗫-𝗦𝗨𝗜𝗧 𝗟𝗘𝗩𝗘𝗟𝟭\n\n#LAB_GUNS\n🔫M416 GLACIER LEVEL5\n🔫AKM GLACIER LEVEL3(easy lvl4)\n🔫DP28 DRAGON LEVEL4\n🔫AKM CODEBREAKER LEVEL2\n🔫 BUTTERFLY M24 LEVEL3(easy lvl4)\n🔫STREAMPUNK TOMMY LEVEL1\n🔫CROSSBOW SCREAMS LEVEL 1\n🔫 RANVEER M249 LEVEL1\n\n#SUPER_CAR\n🚘 GLACIER UAZ(rare)\n🚘CUTE PENGUIN SPEEDBOAT\n🚘UNYIELDING LAND UAZ\nWATCH FUL VIDEO FOR MORE INFO📹\n\nDM - @believe4u CHEAP PRICE 😍",
        "price": "250",
        "photoId": 13 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "54",
        "desc": "♨️RPS ~ S14,S17,M22,A1,A2,A3,\n♨️MYTHIC FASHION : [ 19/50 ]\n\n#GUN_LAB\n📛M416 GLACIER LVL 5\n📛AKM GLACIER LVL 4\n📛M249 RS FURY LVL 4\n📛UMP45 MARINE EVOLUTION LVL 3\n📛MACHETE DRAKONBANE REMNANT LVL 3\n📛CROSSBOW CIRCUS OF SCREAMS LVL 3\n📛GRANADE KILL MSG\n📛MOLLI KILL MSG\n\n#RARE_MYTHICS\n💠DIVINE SEAR SET\n💠CYCLE SET 4\n\nDM TO BUY:- @believe4u",
        "price": "180",
        "photoId": 4 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "61",
        "desc": "💝Glacier Combo With Rare mythics 💝\n\n🧪 Weapons Laboratory 🧪\n\n🔫M416 Glacier level 7 Maxed\n🔫Akm Glacier level 7 Maxed\n🔫Candy Thompson level 5 Maxed\n🔫M16A4 Skeleton core level 6\n🔫M762 Stray Rebellion level 4\n🔫M762 DEADLY level 4\n🔫SCARL THORN level 2\n🔫Carnival waves level 1\n🔫M762 Love level 1\n🔫UMP Marine level 1\n🔫Machete level 3\n🔫Pan level 2\n\n🚗 Vehicles 🚗\n\n🚘Reindeer Dacia level 3\n🚘Lamborghini Estoque Dacia\n🚘Lamborghini Urus UAZ\n🚘Lamborghini SVJ\n\n🌟All Safe And Secured Login🌟\n\nMSG HERE @believe4u",
        "price": "300",
        "photoId": 5 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "85",
        "desc": "🔺PREMIUM ACCOUNT WITH GLACIER COMBO + 9 KILL MESSG + 90 MYTHICS\n\n💫ACCOUNT LEVEL : 85[HIGH]\n💫 S6/S8 OLD CONQUEROR [T+F]\n💫TOTAL MYTHICS : [90/100]\n💫SHREMAN EVENT VOICE\n✨ MARMORIS X-SUIT LVL 2 ✨\n • ɪᴛᴇᴍs ᴜɴʟᴏᴄᴋ•\n [ ғʀᴀᴍᴇ,ʙᴀɢ,ᴏʀɴᴀ,ᴘᴀʀᴀᴄʜᴜᴛᴇ ]\n\n#OUTFITS\n💖 WHITE COMMANDER SET (RARE)\n💖 WHITE MUMMY SET (RARE)\n💖 FULL GLACIER SET (RARE)\n\n#UPGRADABLES\n🔫M416 GLACIER LEVEL 7 MAX\n🔫AKM GLACIER LEVEL 7 MAX\n🔫DP-28 DRAGON LEVEL 5 MAX\n🔫UMP MARINE LEVEL 3 MAX\n🔫PUMPKIN SCARL LEVEL 4\n🔫FOREST GROZA LEVEL 4\n🔫AWM AVENGER LEVEL 4\n🔫M249 WINTER QUEEN LEVEL 4\n🔫UZI ROMANTIC LEVEL 4\n🔫M416 THE FOOL LEVEL 2\n🔫JACK-O KILL MSG NADE 💣\n🔫GROZA EVENTIDE LEVEL 1\n🔫AUG EVANGELION LEVEL 1\n🔫M249 RANVEER FURY LEVEL 1\n🔫10 EXTRA GUN MATERIALS 🌟\n\n#SUPERCARS\n🚘TESLA CYBERTRUCK ( BLACK)\n🚘TESLA ROADSTR AMETHYST\n🚘PUMPKIN DACIA LEVEL 1\n🚘ENCHAN PUMPKIN UAZ LVL 2\n\n-> CHEAPEST PRICE 😍😍\n\n💌 DM : @believe4u",
        "price": "500",
        "photoId": 10 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "70",
        "desc": "RP MANY SEASON MAX\nRENAME CARD AVAILABLE\n\nX SUIT LEVEL 4 (ALL KILL MESSAGE)\n\n#WEAPONS 19 GUNS SKINS ❣️\n\nM4 GLACIER LVL 5\nM4 JOKER LEVEL 5\nM762 BARREL LEVEL 4\nTHOMPSON LEVEL 4\nEMP UMP LEVEL 4\nVECTOR BLOOD LEVEL 4\nM24 PAHROAH LEVEL 4\nPAN ACCOLADE LEVEL 3\nUZI EMBELEM LEVEL 2\nM16A4 SKELETAL LEVEL 2\nVSS CROW LEVEL 1\nUMP NEW LEVEL 1\nSCAR L BLUE LEVEL 1\nM249 NEW LEVEL 1\nAWM AVENGER LEVEL 1\nQBZ SUN LEVEL 1\nM16A4 RADIANT LEVEL 1\nDP DRAGON LEVEL 1\nQBZ FATAL LEVEL 1\n\nDm @believe4u",
        "price": "220",
        "photoId": 3 
    },
    {
        "accName": "PUBG ACCOUNTS WORLD",
        "level": "77",
        "desc": "22+ UPGRADED WEAPONS\n\n--SUIT\nARCANE JESTER MAXX\nSILVANUS 5 star\n\n-WEAPON LAB 22 SET\nM416-Glacier (Lv.7) Maxx\nAKM -Glacier (Lv.7) Maxx\nM416-SILVER GURU (Lv.6)\nGroza -River Styx (Lv.7) Maxx\nAKM -Starsea Admiral (Lv.7)\nM762- Stray Rebellion (Lv.7)\n\nSCAR-L -Drop The bass (Lv.4)\nMG3 -Soaring Dragon (Lv.4)\nUMP45-EMP (Lv.4)\nM24 -Killer Tune (Lv.4)\nUZI - Romantic Moments (Lv.4)\nKar98k - Kulkukan Fury (Lv.4)\nAWM - Field Commander (Lv.4)\nVector - Golden Earl (Lv.4)\nThompson - Super Star (Lv.3)\n\n🔸 CHEAP PRICE 😍\n\nMsg Here @believe4u",
        "price": "350",
        "photoId": 7
    }
]

function Buy() {
    return (
        <div className='mx-[9%] mt-32 mb-[5%]'>
            <div className='flex gap-3 items-center mb-3'>
                <ShoppingCart strokeWidth={3} size={28} />
                <p className='text-3xl font-bold font-manrope'>BUY ACCOUNTS</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {BuyData.map((data, index) => (
                    <BuyCard key={index} name={data.accName} level={data.level} desc={data.desc} price={data.price} photoId={data.photoId} />
                ))}
            </div>
        </div>
    )
}

export default Buy