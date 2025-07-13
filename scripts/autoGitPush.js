// scripts/autoGitPush.js
const { execSync } = require("child_process");

const commitMessage = `Auto commit on ${new Date().toLocaleString()}`;

try {
  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
  execSync("git push origin master", { stdio: "inherit" });
  console.log("✅ Changes auto-pushed to GitHub");
} catch (err) {
  console.error("❌ Git push failed or nothing to commit.");
}
