import axios from "axios";
import config from '../config.cjs';

const repo = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";

  if (["repo"].includes(cmd)) {
    const githubRepoURL = "https://github.com/mvelase-ofc/MVELASE-MD";

    try {
      // Extract username and repo name from the URL
      const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

      // Fetch repository details using GitHub API
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

      if (!response.data) {
        throw new Error("GitHub API request failed.");
      }

      const repoData = response.data;

      // Format the repository information
      const formattedInfo = `*ʜᴇʟʟᴏ ᴛʜᴇʀᴇ, ᴍᴠᴇʟᴀsᴇ-ᴍᴅ ᴜsᴇʀ! 👋* 

*𝑇𝒉𝑎𝑛𝑘𝑠 𝑓𝑜𝑟 𝑢𝑠𝑖𝑛𝑔 𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃 𝐯𝟐🌹🫶* 

╭───────────────━⊷
│ 🚀 ᴛᴇᴄʜsʏɴᴄ ʀᴇᴘᴏ 🚀
┣──━⊷
│🤖 *ɴᴀᴍᴇ:* ${repoData.name}
│⭐ *ᴛᴏᴛᴀʟ sᴛᴀʀs:* ${repoData.stargazers_count}
│👤 *ᴅᴀɪʟʏ ᴜsᴇʀs:* ${repoData.forks_count}
│👀 *ᴡᴀᴛᴄʜᴇʀs:* 5
│👤 *ᴏᴡɴᴇʀ:* ${repoData.owner.login}
│🪀 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${repoData.description || 'No description'}
┗───────────────━⊷

> ʀᴇᴘᴏ ʟɪɴᴋ : wa.me/263717777643

> sᴛᴀʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ƒᴏʀ ƒᴀɴᴛᴀsᴛɪᴄ ᴜᴘᴅᴀᴛᴇs!

> ᴍᴠᴇʟᴀsᴇ-ᴍᴅ`;

      // Send an image with the formatted info as a caption
      await gss.sendMessage(
        m.from,
        {
          image: { url: "https://raw.githubusercontent.com/mvelase-ofc/MVELASE-MD/main/media/mvelase.png" },
          caption: formattedInfo,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363411325763461@newsletter",
              newsletterName: "👾 ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜ ʜᴜʙ. 👾",
              serverMessageId: 143,
            },
          },
        },
        { quoted: m }
      );

      // Send the audio file with context info
      await gss.sendMessage(
        m.from,
        {
          audio: { url: "https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/repo.m4a" },
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363411325763461@newsletter",
              newsletterName: "👾 ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜ ʜᴜʙ. 👾",
              serverMessageId: 143,
            },
          },
        },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in repo command:", error);
      m.reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
  }
};

export default repo;