const { execSync } = require("child_process");

const commitMessage = `Auto commit on ${new Date().toLocaleString()}`;

try {
  const status = execSync("git status --porcelain").toString().trim();

  if (!status) {
    console.log("✅ No changes to commit.");
    process.exit(0);
  }

  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
  execSync("git push origin master", { stdio: "inherit" });

  console.log("✅ Changes auto-pushed to GitHub");
} catch (err) {
  console.error("❌ Git push failed:", err.message);
}
