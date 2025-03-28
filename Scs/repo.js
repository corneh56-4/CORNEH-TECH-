const axios = require('axios');
const moment = require("moment-timezone");
const { adams } = require(__dirname + "/../Ibrahim/adams");
const BaseUrl = process.env.GITHUB_GIT;
const adamsapikey = process.env.BOT_OWNER;
// Function to format large numbers with commas
const formatNumber = (num) => num.toLocaleString();

// Function to fetch detailed GitHub repository information
const fetchGitHubRepoDetails = async () => {
    try {
        const repo = 'Devibraah/BWM-XMD'; // Replace with your repo
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        const {
            name, description, forks_count, stargazers_count,
            watchers_count, open_issues_count, owner, license
        } = response.data;

        return {
            name,
            description: description || "No description provided",
            forks: forks_count,
            stars: stargazers_count,
            watchers: watchers_count,
            issues: open_issues_count,
            owner: owner.login,
            license: license ? license.name : "No license",
            url: response.data.html_url,
        };
    } catch (error) {
        console.error("Error fetching GitHub repository details:", error);
        return null;
    }
};

// Define the commands that can trigger this functionality
const commands = ["git", "repo", "script", "sc"];

commands.forEach((command) => {
    adams({ nomCom: command, categorie: "GitHub" }, async (dest, zk, commandeOptions) => {
        let { repondre } = commandeOptions;

        const repoDetails = await fetchGitHubRepoDetails();

        if (!repoDetails) {
            repondre("❌ Failed to fetch GitHub repository information.");
            return;
        }

        const {
            name, description, forks, stars, watchers,
            issues, owner, license, url
        } = repoDetails;

        const currentTime = moment().format('DD/MM/YYYY HH:mm:ss');
        const infoMessage = `
🌐 *GitHub Repository Info* 🌐

💻 *Name:* ${name}
📜 *Description:* ${description}
⭐ *Stars:* ${formatNumber(stars)}
🍴 *Forks:* ${formatNumber(forks)}
👀 *Watchers:* ${formatNumber(watchers)}
❗ *Open Issues:* ${formatNumber(issues)}
👤 *Owner:* ${owner}
📄 *License:* ${license}

📅 *Fetched on:* ${currentTime}
`;

        try {
            // Send the follow-up image first with a caption
            await zk.sendMessage(dest, {
                image: { url: "https://files.catbox.moe/xnlp0v.jpg" }, // Replace with your desired image URL
                caption: `✨ Repository Highlights ✨\n\n🛠️ Developed by *Ibrahim Adams*\n📢 Stay updated\nhttps://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y\n\nRepo Url\nhttps://github.com/Devibraah/BWM-XMD`,
            });

            // Follow up with the GitHub repository details
            await zk.sendMessage(dest, {
                text: infoMessage,
            });

        } catch (e) {
            console.log("❌ Error sending GitHub info:", e);
            repondre("❌ Error sending GitHub info: " + e.message);
        }
    });
});
/*
'use strict';

Object.defineProperty(exports, '__esModule', {
  'value': true
});
const {
  adams
} = require("../Ibrahim/adams");
adams({
  'nomCom': "repo",
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x256950, _0x3cdb38, _0x2c604e) => {
  const _0x2f4eff = await fetch('https://api.github.com/repos/devibraah/BWM-XMD');
  const _0x36b130 = await _0x2f4eff.json();
  if (_0x36b130) {
    const _0x50985d = {
      'stars': _0x36b130.stargazers_count,
      'forks': _0x36b130.forks_count,
      'lastUpdate': _0x36b130.updated_at,
      'owner': _0x36b130.owner.login
    };
    const _0x20cf11 = "𝐁𝐌𝐖 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 𝐀𝐃𝐀𝐌𝐒.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *BMW-MD*\n📝 Last Update: " + _0x50985d.lastUpdate + "\n👤 Owner: *Ibrahim Adams*\n⭐ Stars: " + _0x50985d.stars + "\n🍴 Forks: " + _0x50985d.forks + "\n🌐 Repo: " + _0x36b130.html_url + "\n⭕ For More Info : https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠\n";
    await _0x3cdb38.sendMessage(_0x256950, {
      'image': {
        'url': "https://telegra.ph/file/17c83719a1b40e02971e4.jpg"
      },
      'caption': _0x20cf11
    });
  } else {
    console.log("Could not fetch data");
  }
});
adams({
  'nomCom': "git",
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x2ad97e, _0xc5957d, _0x2a01f1) => {
  const _0x23b84a = await fetch("https://api.github.com/repos/devibraah/BWM-XMD");
  const _0x54f98d = await _0x23b84a.json();
  if (_0x54f98d) {
    const _0x33ab65 = {
      'stars': _0x54f98d.stargazers_count,
      'forks': _0x54f98d.forks_count,
      'lastUpdate': _0x54f98d.updated_at,
      'owner': _0x54f98d.owner.login
    };
    const _0x305ae3 = "𝐁𝐌𝐖 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 𝐀𝐃𝐀𝐌𝐒.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *BMW-MD*\n📝 Last Update: " + _0x33ab65.lastUpdate + "\n👤 Owner: *Ibrahim Adams*\n⭐ Stars: " + _0x33ab65.stars + "\n🍴 Forks: " + _0x33ab65.forks + "\n🌐 Repo: " + _0x54f98d.html_url + "\n⭕ For More Info : https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS";
    await _0xc5957d.sendMessage(_0x2ad97e, {
      'image': {
        'url': "https://telegra.ph/file/17c83719a1b40e02971e4.jpg"
      },
      'caption': _0x305ae3
    });
  } else {
    console.log("Could not fetch data");
  }
});
adams({
  'nomCom': 'sc',
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x1f8a03, _0x41191c, _0x8dd7fa) => {
  const _0x21464f = await fetch("https://api.github.com/repos/devibraah/BWM-XMD");
  const _0x3fb866 = await _0x21464f.json();
  if (_0x3fb866) {
    const _0x4bac21 = {
      'stars': _0x3fb866.stargazers_count,
      'forks': _0x3fb866.forks_count,
      'lastUpdate': _0x3fb866.updated_at,
      'owner': _0x3fb866.owner.login
    };
    const _0x58e2e9 = "𝐁𝐌𝐖 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 𝐀𝐃𝐀𝐌𝐒.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *BMW-MD*\n📝 Last Update: " + _0x4bac21.lastUpdate + "\n👤 Owner: *Ibrahim Adams*\n⭐ Stars: " + _0x4bac21.stars + "\n🍴 Forks: " + _0x4bac21.forks + "\n🌐 Repo: " + _0x3fb866.html_url + "\n⭕ For More Info : https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠\n";
    await _0x41191c.sendMessage(_0x1f8a03, {
      'image': {
        'url': "https://telegra.ph/file/17c83719a1b40e02971e4.jpg"
      },
      'caption': _0x58e2e9
    });
  } else {
    console.log("Could not fetch data");
  }
});
adams({
  'nomCom': 'script',
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x44e4c9, _0x300ccb, _0x323299) => {
  const _0x10746e = await fetch("https://api.github.com/repos/devibraah/BWM-XMD");
  const _0x40fb34 = await _0x10746e.json();
  if (_0x40fb34) {
    const _0x4777ba = {
      'stars': _0x40fb34.stargazers_count,
      'forks': _0x40fb34.forks_count,
      'lastUpdate': _0x40fb34.updated_at,
      'owner': _0x40fb34.owner.login
    };
    const _0x338973 = "𝐁𝐌𝐖 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 𝐀𝐃𝐀𝐌𝐒.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *BMW-MD*\n📝 Last Update: " + _0x4777ba.lastUpdate + "\n👤 Owner: *Ibrahim Adams*\n⭐ Stars: " + _0x4777ba.stars + "\n🍴 Forks: " + _0x4777ba.forks + "\n🌐 Repo: " + _0x40fb34.html_url + "\n⭕ For More Info : https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠\n";
    await _0x300ccb.sendMessage(_0x44e4c9, {
      'image': {
        'url': "https://telegra.ph/file/17c83719a1b40e02971e4.jpg"
      },
      'caption': _0x338973
    });
  } else {
    console.log("Could not fetch data");
  }
});













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































***/
