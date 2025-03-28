


require("dotenv").config(); // Load environment variables
const { adams } = require("../Ibrahim/adams");
const yts = require("yt-search");
const axios = require("axios");

// Retrieve sensitive data from environment variables
const BaseUrl = process.env.GITHUB_GIT;
const adamsapikey = process.env.BOT_OWNER;

// Validate that the necessary environment variables are set
function validateConfig() {
  if (!BaseUrl || !adamsapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();

async function searchYouTube(query) {
  try {
    const search = await yts(query);
    return search.videos.length > 0 ? search.videos[0] : null;
  } catch (error) {
    console.error("YouTube Search Error:", error);
    return null;
  }
}

async function downloadMedia(url, type) {
  try {
    const endpoint = `${BaseUrl}/api/download/yt${type}?url=${encodeURIComponent(url)}&apikey=${adamsapikey}`;
    const { data } = await axios.get(endpoint);
    return data.status === 200 && data.success ? data.result.download_url : null;
  } catch (error) {
    console.error(`API Error (${type}):`, error);
    return null;
  }
}

// Audio Command
adams(
  {
    nomCom: "play",
    categorie: "Download",
    reaction: "🎧",
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    if (!arg[0]) return repondre("Please insert a song name.");

    // Step 1: Search for the song
    const video = await searchYouTube(arg.join(" "));
    if (!video) return repondre("No audio found. Try another name.");

    // Show the song info in a formatted message
    await zk.sendMessage(
      dest,
      {
        image: { url: video.thumbnail },
        caption: `🎶 *BWM XMD SONG'S*\n\n` +
          `*Title:* ${video.title}\n` +
          `*Author:* ${video.author.name}\n` +
          `*Duration:* ${video.timestamp}\n` +
          `*Views:* ${video.views}\n` +
          `*Uploaded:* ${video.ago}\n` +
          `*YouTube Link:* ${video.url}`,
      },
      { quoted: ms }
    );

    // Step 2: Notify user of the download process
    repondre("*Downloading your audio...*");

    // Step 3: Download audio
    const audioDlUrl = await downloadMedia(video.url, "mp3");
    if (!audioDlUrl) return repondre("Failed to download the audio.");

    // Step 4: Send the audio file along with the song photo
    await zk.sendMessage(
      dest,
      {
        audio: { url: audioDlUrl },
        mimetype: "audio/mp4",
        ptt: false,
        contextInfo: {
          externalAdReply: {
            title: video.title,
            body: `By ${video.author.name}`,
            thumbnailUrl: video.thumbnail,
            sourceUrl: `https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y`,
          },
        },
      },
      { quoted: ms }
    );
  }
);



   adams(
  {
    nomCom: "song",
    categorie: "Download",
    reaction: "🎧",
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    if (!arg[0]) return repondre("Please insert a song name.");

    // Step 1: Search for the song
    const video = await searchYouTube(arg.join(" "));
    if (!video) return repondre("No audio found. Try another name.");

    // Show the song info in a formatted message
    await zk.sendMessage(
      dest,
      {
        image: { url: video.thumbnail },
        caption: `🎶 *BWM XMD SONG'S*\n\n` +
          `*Title:* ${video.title}\n` +
          `*Author:* ${video.author.name}\n` +
          `*Duration:* ${video.timestamp}\n` +
          `*Views:* ${video.views}\n` +
          `*Uploaded:* ${video.ago}\n` +
          `*YouTube Link:* ${video.url}`,
      },
      { quoted: ms }
    );

    // Step 2: Notify user of the download process
    repondre("*Downloading your audio...*");

    // Step 3: Download audio
    const audioDlUrl = await downloadMedia(video.url, "mp3");
    if (!audioDlUrl) return repondre("Failed to download the audio.");

    // Step 4: Send the audio file along with the song photo
    await zk.sendMessage(
      dest,
      {
        audio: { url: audioDlUrl },
        mimetype: "audio/mp4",
        ptt: false,
        contextInfo: {
          externalAdReply: {
            title: video.title,
            body: `By ${video.author.name}`,
            thumbnailUrl: video.thumbnail,
            sourceUrl: `https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y`,
          },
        },
      },
      { quoted: ms }
    );
  }
);         
// Video Command




adams(
  {
    nomCom: "video",
    categorie: "Download",
    reaction: "🎥",
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    if (!arg[0]) return repondre("Please insert a video name.");

    // Step 1: Search for the video
    const video = await searchYouTube(arg.join(" "));
    if (!video) return repondre("No video found. Try another name.");

    // Show the video info in a formatted message
    await zk.sendMessage(
      dest,
      {
        image: { url: video.thumbnail },
        caption: `🎥 *BWM XMD VIDEO'S*\n\n` +
          `*Title:* ${video.title}\n` +
          `*Author:* ${video.author.name}\n` +
          `*Duration:* ${video.timestamp}\n` +
          `*Views:* ${video.views}\n` +
          `*Uploaded:* ${video.ago}\n` +
          `*YouTube Link:* ${video.url}`,
      },
      { quoted: ms }
    );

    // Step 2: Notify user of the download process
    repondre("*Downloading your video...*");

    // Step 3: Download video
    const videoDlUrl = await downloadMedia(video.url, "mp4");
    if (!videoDlUrl) return repondre("Failed to download the video.");

    // Step 4: Send the video file along with the song photo
    await zk.sendMessage(
      dest,
      {
        video: { url: videoDlUrl },
        mimetype: "video/mp4",
        caption: `Enjoy your video: *${video.title}*\n\n*© Ibrahim Adams*`,
        contextInfo: {
          externalAdReply: {
            title: video.title,
            body: `By ${video.author.name}`,
            thumbnailUrl: video.thumbnail,
            sourceUrl: `https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y`,
          },
        },
      },
      { quoted: ms }
    );
  }
);
