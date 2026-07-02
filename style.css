/* ============================================================
   EDIT ME - this is the only file you should need to touch.
   ============================================================
   1. DISCORD_INVITE
      Replace with your real, non-expiring invite link
      (Server Settings -> Invites -> Create/Edit a permanent link).
   2. TEAM
      One entry per person. Fields:
        name      - display name
        handle    - Discord username, e.g. "grim.dev" (no @ needed)
        role      - short role/title shown under the name
        bio       - (founder only) one or two sentences
        avatar    - URL to their Discord pfp. Easiest way to get it:
                    right-click their avatar in Discord -> "Copy Avatar URL".
                    Leave blank ("") to fall back to a colored initial.
        color     - hex color used for the fallback initial avatar
   ============================================================ */
const DISCORD_INVITE = "https://discord.gg/JzaUg9qeQ"; // TODO: replace with your real invite link
const TEAM = {
  founder: [
    {
      name: "kry2318",
      handle: "kry2318",
      role: "Founder",
      bio: "",
      avatar: "kry.png",
      color: "#4d5bff"
    }
  ],
  headOfManagement: [
    {
      name: "raidz_zz",
      handle: "raidz_zz",
      role: "Head of Management",
      avatar: "raidz.png",
      color: "#e0b15c"
    }
  ],
  management: [
    { name: "alert_bake", handle: "alert_bake", role: "Management Team", avatar: "", color: "#c96bd8" },
    { name: "hiamlapa",   handle: "hiamlapa",   role: "Management Team", avatar: "", color: "#ff8a5c" },
    { name: "tay54",      handle: "tay54",      role: "Management Team", avatar: "", color: "#5cd9c6" }
  ]
};
/* ---------- helpers used by both pages, no need to edit below ---------- */
function initials(name){
  const words = name.split(" ").filter(Boolean);
  if(words.length === 1) return words[0].slice(0,2).toUpperCase();
  return words.map(w => w[0]).join("").slice(0,2).toUpperCase();
}
function avatarHTML(person, size){
  const style = `width:${size}px;height:${size}px;`;
  if(person.avatar){
    return `<div class="avatar" style="${style}background:var(--panel-2);padding:0;overflow:hidden;">
      <img src="${person.avatar}" alt="${person.name}'s avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
      <span class="status" title="Online"></span>
    </div>`;
  }
  return `<div class="avatar" style="${style}background:${person.color};">
    ${initials(person.name)}<span class="status" title="Online"></span>
  </div>`;
}
const discordMark = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z"/></svg>`;
