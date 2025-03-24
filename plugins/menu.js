import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ sɪɴᴄᴇ ɴᴏᴡ ${day}ᴅ ${hours}ʜ ${minutes}ᴍ ${seconds}s*`;
const runMessage = `*☀️ ${day} ᴅᴀʏ*\n*🕐 ${hours} ʜᴏᴜʀ*\n*⏰ ${minutes} ᴍɪɴᴜᴛᴇs*\n*⏱️ ${seconds} sᴇᴄᴏɴᴅs*\n`;

const xtime = moment.tz("Zimbabwe/Harare").format("HH:mm:ss");
const xdate = moment.tz("Zimbabwe/Harare").format("DD/MM/YYYY");
const time2 = moment().tz("Zimbabwe/Harare").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃`;
} else {
  pushwish = `ɢᴏᴏᴅ ɴɪɢʜᴛ 🌌`;
}

const test = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    const str = `╭──────────────────⊷
│➪│• *ᴍᴠᴇʟᴀsᴇ-ᴍᴅ*
│➪╭──────────────⊷
│➪│• ᴘʀᴇƒɪx : *${prefix}*
│➪│• ʙᴀɪʟᴇʏs : ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
│➪│• ᴏᴡɴᴇʀ : ᴋʜᴜʟᴇᴋᴀɴɪ ᴍᴠᴇʟᴀsᴇ
│➪│• ᴛʏᴘᴇ : ɴᴏᴅᴇᴊs
│➪│• ᴍᴏᴅᴇ : *${mode}*
│➪│• ᴠᴇʀsɪᴏɴ : *1.0.0*
│⊷───────────────⊷
┗──────────────────⊷

> ᴄʜᴇᴄᴋ ᴏᴜᴛ ᴍʏ ᴄᴏᴏʟ ᴍᴇɴᴜ ʙᴇʟᴏᴡ.

> ʜᴇʟᴏᴏ ${m.pushName} ${pushwish}

> ᴄᴏᴅᴇᴅ ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜ ʜᴜʙ.

╭────⟮ ᴄᴏɴᴠᴇʀᴛᴇʀ ⟯────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴀᴛᴛᴘ
│✧ ${prefix}ᴀᴛᴛᴘ2
│✧ ${prefix}ᴀᴛᴛᴘ3
│✧ ${prefix}ᴇʙɪɴᴀʀʏ
│✧ ${prefix}ᴅʙɪɴᴀʀʏ
│✧ ${prefix}ᴇᴍᴏᴊɪᴍɪx
│✧ ${prefix}ᴍᴘ3
┗──────────────⊷
─────────────────⊷

╭──────⟮ ᴀɪ ⟯───────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴀɪ
│✧ ${prefix}ʙᴜɢ
│✧ ${prefix}ʀᴇᴘᴏʀᴛ
│✧ ${prefix}ɢᴘᴛ
│✧ ${prefix}ᴅᴀʟʟᴇ
│✧ ${prefix}ʀᴇᴍɪɴɪ
│✧ ${prefix}ɢᴇᴍɪɴɪ
┗──────────────⊷
─────────────────⊷

╭─────⟮ ᴛᴏᴏʟs ⟯──────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
│✧ ${prefix}ᴛᴇᴍᴘᴍᴀɪʟ
│✧ ${prefix}ᴄʜᴇᴄᴋᴍᴀɪʟ
│✧ ${prefix}ᴛʀᴛ
│✧ ${prefix}ᴛᴛs
┗──────────────⊷
─────────────────⊷

╭─────⟮ ɢʀᴏᴜᴘ ⟯─────⊷
│⊷──────────────⊷
│✧ ${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
│✧ ${prefix}sᴇᴛᴘᴘɢᴄ
│✧ ${prefix}sᴇᴛɴᴀᴍᴇ
│✧ ${prefix}sᴇᴛᴅᴇsᴄ
│✧ ${prefix}ɢʀᴏᴜᴘ
│✧ ${prefix}ɢᴄsᴇᴛᴛɪɴɢ
│✧ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
│✧ ${prefix}ᴀᴅᴅ
│✧ ${prefix}ᴋɪᴄᴋ
│✧ ${prefix}ʜɪᴅᴇᴛᴀɢ
│✧ ${prefix}ᴛᴀɢᴀʟʟ
│✧ ${prefix}ᴀɴᴛɪʟɪɴᴋ
│✧ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ
│✧ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
│✧ ${prefix}ᴅᴇᴍᴏᴛᴇ
│✧ ${prefix}ɢᴇᴛʙɪᴏ
┗──────────────⊷
─────────────────⊷

╭────⟮ ᴅᴏᴡɴʟᴏᴀᴅ ⟯────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴀᴘᴋ
│✧ ${prefix}ƒᴀᴄᴇʙᴏᴏᴋ
│✧ ${prefix}ᴍᴇᴅɪᴀƒɪʀᴇ
│✧ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛᴅʟ
│✧ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
│✧ ${prefix}ɢᴅʀɪᴠᴇ
│✧ ${prefix}ɪɴsᴛᴀ
│✧ ${prefix}ʏᴛᴍᴘ3
│✧ ${prefix}ʏᴛᴍᴘ4
│✧ ${prefix}ᴘʟᴀʏ
│✧ ${prefix}sᴏɴɢ
│✧ ${prefix}ᴠɪᴅᴇᴏ
│✧ ${prefix}ʏᴛᴍᴘ3ᴅᴏᴄ
│✧ ${prefix}ʏᴛᴍᴘ4ᴅᴏᴄ
│✧ ${prefix}ᴛɪᴛᴏᴋ
┗──────────────⊷
─────────────────⊷

╭─────⟮ sᴇᴀʀᴄʜ ⟯─────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴘʟᴀʏ
│✧ ${prefix}ʏᴛs
│✧ ${prefix}ɪᴍᴅʙ
│✧ ${prefix}ɢᴏᴏᴅʟᴇ
│✧ ${prefix}ɢɪᴍᴀɢᴇ
│✧ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
│✧ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
│✧ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
│✧ ${prefix}ʏᴛsᴇᴀʀᴄʜ
│✧ ${prefix}ʀɪɴɢᴛᴏɴᴇ
│✧ ${prefix}ʟʏʀɪᴄs
┗──────────────⊷
─────────────────⊷

╭──────⟮ ᴍᴀɪɴ ⟯──────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴘɪɴɢ
│✧ ${prefix}ᴀʟɪᴠᴇ
│✧ ${prefix}ᴏᴡɴᴇʀ
│✧ ${prefix}ᴍᴇɴᴜ
│✧ ${prefix}ɪɴƒᴏʙᴏᴛ
┗──────────────⊷
─────────────────⊷

╭─────⟮ ᴏᴡɴᴇʀ ⟯─────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴊᴏɪɴ
│✧ ${prefix}ʟᴇᴀᴠᴇ
│✧ ${prefix}ʙʟᴏᴄᴋ
│✧ ${prefix}ᴜɴʙʟᴏᴄᴋ
│✧ ${prefix}sᴇᴛᴘᴘʙᴏᴛ
│✧ ${prefix}ᴀɴᴛɪᴄᴀʟʟ
│✧ ${prefix}sᴇᴛsᴛᴀᴛᴜs
│✧ ${prefix}sᴇᴛɴᴀᴍᴇʙᴏᴛ
│✧ ${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ
│✧ ${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ
│✧ ${prefix}ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
│✧ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
│✧ ${prefix}ᴀᴜᴛᴏᴠɪᴇᴡ
┗──────────────⊷
─────────────────⊷

╭────⟮ sᴛᴀʟᴋ ⟯────⊷
│⊷──────────────⊷
│✧ ${prefix}ᴛʀᴜᴇᴄᴀʟʟᴇʀ
│✧ ${prefix}ɪɴsᴛᴀsᴛᴀʟᴋ
│✧ ${prefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
┗──────────────⊷
─────────────────⊷

> ᴛᴇᴄʜsʏɴᴄ ᴠ2 ʙᴏᴛ

`;

    await Matrix.sendMessage(m.from, {
      image: fs.readFileSync('../media/mvelase.png'),
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363411325763461@newsletter',
          newsletterName: "ᴍᴠᴇʟᴀsᴇ-ᴍᴅ ᴍᴇɴᴜ",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default test;
