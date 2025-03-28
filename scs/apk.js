const {
  adams
} = require("../Ibrahim/adams");
const {
  default: axios
} = require("axios");
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
        caption: "BWM XMD"
      },
      { quoted: ms }
    );

  } catch (error) {
    // Catch any errors and notify the user
    console.error("Error during APK download process:", error);
    repondre("APK download failed. Please try again later.");

    
adams({
  nomCom: 'vcf',
  categorie: "Group",
  reaction: '🗂'
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
  let vCardData = "BWM XMD";
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
    caption: `VCF for ${groupMetadata.subject}\nTotal Contacts: ${groupMetadata.participants.length}\n*Made by Bwm xmd*`
  });

  fs.unlinkSync('./contacts.vcf');
});
