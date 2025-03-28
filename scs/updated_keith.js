const { adams } = require("../Ibrahim/adams");
const { Sticker, StickerTypes, createSticker } = require('wa-sticker-formatter');
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../lib/antilien");
const { downloadMediaMessage, downloadContentFromMessage } = require("@whiskeysockets/baileys");

const {isUserBanned , addUserToBanList , removeUserFromBanList} = require("../lib/banUser");
const  {addGroupToBanList,isGroupBanned,removeGroupFromBanList} = require("../lib/banGroup");
const {isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList} = require("../lib/onlyAdmin");
const {removeSudoNumber,addSudoNumber,issudo} = require("../lib/sudo");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../lib/antibot");
const { exec } = require('child_process');

const traduire = require("../Ibrahim/traduction");
const { search, download } = require('aptoide-scraper');
const fs = require('fs-extra');
const conf = require('../config');
const { default: axios } = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { Catbox } = require("node-catbox");
const catbox = new Catbox();

// Upload file to Catbox and return the URL
async function uploadToCatbox(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error("File does not exist");
  }
  try {
    const uploadResult = await catbox.uploadFile({ path: filePath });
    if (uploadResult) {
      return uploadResult;
    } else {
      throw new Error("Error retrieving file link");
    }
  } catch (error) {
    throw new Error(String(error));
  }
}
const { getBinaryNodeChild, getBinaryNodeChildren } = require('@whiskeysockets/baileys')['default'];
const sleep =  (ms) =>{
  return new Promise((resolve) =>{ configTimeout (resolve, ms)})
   } ; 

// Broadcast Command
adams({
  nomCom: 'broadcast',
  aliase: 'spread',
  categorie: "Group",
  reaction: '⚪'
}, async (bot, client, context) => {
  const {
    ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser
  } = context;

  let message = arg.join(" ");
  if (!arg[0]) {
    repondre("After the command *broadcast*, type your message to be sent to all groups you are in.");
    return;
  }

  if (!superUser) {
    repondre("You are too weak to do that");
    return;
  }

  let groups = await client.groupFetchAllParticipating();
  let groupIds = Object.entries(groups).map(group => group[1].id);
  await repondre("*BWM XMD is sending your message to all groups ,,,💀*...");

  for (let groupId of groupIds) {
    let broadcastMessage = `*BWM XMD BROADCAST MESSAGE*\n\n🀄 Message: ${message}\n\n🗣️ Author: ${nomAuteurMessage}`;
    await client.sendMessage(groupId, {
      image: { url: 'https://files.catbox.moe/k13s7u.jpg' },
      caption: broadcastMessage
    });
  }
});

// Disappearing Messages Off Command
adams({
  nomCom: "disap-off",
  categorie: "Group",
  reaction: '㋛'
}, async (chatId, client, context) => {
  const { ms, repondre, verifGroupe, verifAdmin } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  await client.groupToggleEphemeral(chatId, 0);
  repondre("Disappearing messages successfully turned off!");
});

// Disappearing Messages Setup Command
adams({
  nomCom: 'disap',
  categorie: "Group",
  reaction: '❦'
}, async (chatId, client, context) => {
  const { ms, repondre, verifGroupe, verifAdmin } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  repondre("*Do you want to turn on disappearing messages?*\n\nIf yes, type _*disap1* for messages to disappear after 1 day.\nOr type *disap7* for messages to disappear after 7 days.\nOr type *disap90* for messages to disappear after 90 days.\n\nTo turn it off, type *disap-off*");
});

// Requests Command
adams({
  nomCom: 'req',
  alias: 'requests',
  categorie: "Group",
  reaction: "⚪"
}, async (chatId, client, context) => {
  const {
    ms, repondre, arg, verifGroupe, verifAdmin
  } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here, what will you do if there are pending requests?");
    return;
  }

  const pendingRequests = await client.groupRequestParticipantsList(chatId);
  if (pendingRequests.length === 0) {
    return repondre("There are no pending join requests.");
  }

  let requestList = '';
  pendingRequests.forEach((request, index) => {
    requestList += `+${request.jid.split('@')[0]}`;
    if (index < pendingRequests.length - 1) {
      requestList += "\n";
    }
  });

  client.sendMessage(chatId, {
    text: `Pending Participants:- 🕓\n${requestList}\n\nUse the command approve or reject to approve or reject these join requests.`
  });
  repondre(requestList);
});

// Reject Requests Command
adams({
  nomCom: 'reject',
  categorie: "Group",
  reaction: '⚪'
}, async (chatId, client, context) => {
  const {
    ms, repondre, verifGroupe, verifAdmin
  } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  const pendingRequests = await client.groupRequestParticipantsList(chatId);
  if (pendingRequests.length === 0) {
    return repondre("There are no pending join requests for this group.");
  }

  for (const request of pendingRequests) {
    await client.groupRequestParticipantsUpdate(chatId, [request.jid], "reject");
  }

  repondre("All pending join requests have been rejected.");
});

// Disappearing Messages for 90 Days Command
adams({
  nomCom: "disap90",
  categorie: 'Group',
  reaction: '⚪'
}, async (chatId, client, context) => {
  const {
    ms, repondre, verifGroupe, verifAdmin
  } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  await client.groupToggleEphemeral(chatId, 7776000); // 90 days in seconds
  repondre("Disappearing messages successfully turned on for 90 days!");
});

adams({
  nomCom: "disap7",
  categorie: 'Group',
  reaction: '⚪'
}, async (client, message, context) => {
  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  await client.groupToggleEphemeral(message, 604800); // Set disappearing messages for 7 days
  client("Dissapearing messages successfully turned on for 7 days!");
});

// Command to enable disappearing messages for 24 hours
adams({
  nomCom: "disap1",
  categorie: "Group",
  reaction: '⚪'
}, async (client, message, context) => {
  const { ms, repondre, arg, verifGroupe, verifAdmin } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  await client.groupToggleEphemeral(message, 86400); // Set disappearing messages for 24 hours
  client("Dissapearing messages successfully turned on for 24 hours");
});

// Command to approve all pending join requests in a group
adams({
  nomCom: "approve",
  categorie: "Group",
  reaction: "⚪"
}, async (client, message, context) => {
  const { ms, repondre, verifGroupe, verifAdmin } = context;

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  const pendingRequests = await client.groupRequestParticipantsList(message);
  if (pendingRequests.length === 0) {
    return repondre("There are no pending join requests.");
  }

  for (const request of pendingRequests) {
    await client.groupRequestParticipantsUpdate(message, [request.jid], "approve");
  }

  repondre("All pending participants have been approved to join.");
});

// Command to generate a vCard (VCF) with group participants
adams({
  nomCom: 'vcf',
  categorie: "Group",
  reaction: '⚪'
}, async (client, message, context) => {
  const { ms, repondre, verifGroupe, verifAdmin } = context;

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  let groupMetadata = await client.groupMetadata(message);
  let vCardData = "BWM-XMD";
  let contactIndex = 0;

  for (let participant of groupMetadata.participants) {
    vCardData += `BEGIN:VCARD\nVERSION:3.0\nFN:[${contactIndex++}] +${participant.id.split('@')[0]} \nTEL;type=CELL;type=VOICE;waid=${participant.id.split('@')[0]}:+${participant.id.split('@')[0]}\nEND:VCARD\n`;
  }

  repondre(`A moment, *BWM XMD* is compiling ${groupMetadata.participants.length} contacts into a vcf...`);
  await fs.writeFileSync('./contacts.vcf', vCardData.trim());

  await client.sendMessage(message, {
    document: fs.readFileSync('./contacts.vcf'),
    mimetype: 'text/vcard',
    fileName: `${groupMetadata.subject}.Vcf`,
    caption: `VCF for ${groupMetadata.subject}\nTotal Contacts: ${groupMetadata.participants.length}\n*KEEP USING BWM XMD*`
  });

  fs.unlinkSync('./contacts.vcf');
});



adams({
  'nomCom': 'apk',
  'aliases': ['app', 'playstore'],
  'reaction': '🗂',
  'categorie': 'Download'
}, async (groupId, client, context) => {
  const { repondre, arg, ms } = context;

  try {
    // Check if app name is provided
    const appName = arg.join(" ");
    if (!appName) {
      return repondre("Please provide an app name.");
    }

    // Fetch app search results from the BK9 API
    const searchResponse = await axios.get(`https://bk9.fun/search/apk?q=${appName}`);
    const searchData = searchResponse.data;

    // Check if any results were found
    if (!searchData.BK9 || searchData.BK9.length === 0) {
      return repondre("No app found with that name, please try again.");
    }

    // Fetch the APK details for the first result
    const appDetailsResponse = await axios.get(`https://bk9.fun/download/apk?id=${searchData.BK9[0].id}`);
    const appDetails = appDetailsResponse.data;

    // Check if download link is available
    if (!appDetails.BK9 || !appDetails.BK9.dllink) {
      return repondre("Unable to find the download link for this app.");
    }

    // Send the APK file to the group
    await client.sendMessage(
      groupId,
      {
        document: { url: appDetails.BK9.dllink },
        fileName: `${appDetails.BK9.name}.apk`,
        mimetype: "application/vnd.android.package-archive",
        caption: "BWM-XMD"
      },
      { quoted: ms }
    );

  } catch (error) {
    // Catch any errors and notify the user
    console.error("Error during APK download process:", error);
    repondre("APK download failed. Please try again later.");
  }
});
