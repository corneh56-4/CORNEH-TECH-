const { adams } = require("../Ibrahim/adams");
const speed = require("performance-now");

// Function for delay simulation
function delay(ms) {
  console.log(`⏱️ delay for ${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

// New loading animation with different symbols and larger progress bar
async function loading(dest, zk) {
  const lod = [
    "◇◇◇◇◇◇◇◇◇◇ 0%",
    "◆◇◇◇◇◇◇◇◇ 10%",
    "◆◆◇◇◇◇◇◇ 20%",
    "◆◆◆◇◇◇◇◇ 30%",
    "◆◆◆◆◇◇◇◇ 40%",
    "◆◆◆◆◆◇◇◇ 50%",
    "◆◆◆◆◆◆◇◇ 60%",
    "◆◆◆◆◆◆◆◇ 70%",
    "◆◆◆◆◆◆◆◆ 80%",
    "◆◆◆◆◆◆◆◆◆ 90%",
    "◆◆◆◆◆◆◆◆◆◆ 100%",
    "🚀 Loading Completed ✅"
  ];

  let { key } = await zk.sendMessage(dest, { text: 'Loading Please Wait' });

  for (let i = 0; i < lod.length; i++) {
    await zk.sendMessage(dest, { text: lod[i], edit: key });
    await delay(500); // Adjust the speed of the animation here
  }
}

// Command: Ping
adams(
  {
    nomCom: 'ping',
    desc: 'To check bot response time',
    Categorie: 'General',
    reaction: '⚡',
    fromMe: 'true',
  },
  async (dest, zk) => {
    // Call the new loading animation
    await loading(dest, zk);

    // Generate 3 ping results with large random numbers for a more noticeable effect
    const pingResults = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10000 + 1000));

    // Create larger font for ping results (using special characters for a bigger look)
    const formattedResults = pingResults.map(ping => `🟢 PONG: ${ping}  🟢`);

    // Send the ping results with the updated text and format
    await zk.sendMessage(dest, {
      text: "🚀 ʙᴡᴍ xᴍᴅ ɴᴇxᴜs 🚀",
      contextInfo: {
        externalAdReply: {
          title: "BWM XMD - Ultra-Fast Response",
          body: `${formattedResults.join(" | ")}`,
          thumbnailUrl: "https://files.catbox.moe/fxcksg.webp", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

    console.log("Ping results sent successfully with new loading animation and formatted results!");
  }
);

// React function if needed for further interaction
function react(dest, zk, msg, reaction) {
  zk.sendMessage(dest, { react: { text: reaction, key: msg.key } });
}


    adams({ nomCom: 'uptime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '🚘', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*Bmw speed is: ${runtime(process.uptime())}_*`) 

   


  }
);


adams({ nomCom: 'ss',
    desc: 'screenshots website',
    Categorie: 'General',
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("provide a link...");

         const linkk = arg.join(' ');



let linkkk = `https://api.maher-zubair.tech/misc/sstab?url=${linkk}&dimension=720x720`;

let res = await getBuffer(linkkk);
   let caption = '*Powered by BARAKA-MD-V1*' 

await zk.sendMessage(dest, { image: res }, { caption: caption }, { quoted: ms });


}
);

module.exports = {
  delay,
  loading,
  react
}
