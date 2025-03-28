const { adams } = require('../Ibrahim/adams');
const traduire = require("../Ibrahim/traduction");
const { default: axios } = require('axios');
const pkg = require('@whiskeysockets/baileys');
const { generateWAMessageFromContent } = pkg;

adams({ nomCom: "rent", reaction: "🚘", categorie: "User" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre('Example Usage: .rent 254xxxxxxxx.');
    }

    await repondre('Generating your code.....');
    const text = encodeURIComponent(arg.join(' '));
    const apiUrl = `https://ibrahim-adams-kz7d.onrender.com/code?number=${text}`;

    const response = await axios.get(apiUrl);
    const result = response.data;

    if (result && result.code) {
      const getsess = result.code;

      // First message with just the code
      const codeMessage = generateWAMessageFromContent(dest, {
        extendedTextMessage: {
          text: `\`\`\`${getsess}\`\`\``
        }
      }, {});

      await zk.relayMessage(dest, codeMessage.message, {
        messageId: codeMessage.key.id
      });

      // Second message with additional information
      const captionMessage = generateWAMessageFromContent(dest, {
        extendedTextMessage: {
          text: "*Copy the above code and link it to your WhatsApp*\n\n*BWM XMD*\n\n*MADE BY IBRAHIM ADAMS*"
        }
      }, {});

      await zk.relayMessage(dest, captionMessage.message, {
        messageId: captionMessage.key.id
      });

    } else {
      throw new Error('Invalid response from API.');
    }
  } catch (error) {
    console.error('Error getting API response:', error.message);
    repondre('Error getting response from API.');
  }
});
