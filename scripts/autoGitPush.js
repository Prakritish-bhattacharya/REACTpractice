<<<<<<< HEAD
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
=======
/* Import the execSync function from the child_process module
 This allows us to execute shell commands synchronously from Node.js */
 const { execSync } = require("child_process");

//! Create a dynamic commit message that includes the current date and time
const commitMessage = `Auto commit on ${new Date().toLocaleString()}`;

try {
  // Stage all changed files (new, modified, deleted) for commit
  execSync("git add .", { stdio: "inherit" });

  //* Commit the staged changes with the dynamic commit message

  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });

  // Push the committed changes to the 'master' branch on the remote 'origin'
  execSync("git push origin master", { stdio: "inherit" });
  console.log("Changes auto-pushed to GitHub");
} catch (err) {
  console.error("Git push failed or nothing to commit.");     // If any command fails , catch the error and log a message

>>>>>>> 17eaefa6f85b55b17496ef93d43a369ce67b8940
}
