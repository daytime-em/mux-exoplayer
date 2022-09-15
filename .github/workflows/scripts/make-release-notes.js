// make-release-notes.js: Makes release notes from a given PR by catenating the commit messages
// Usage
//  make-releae-notes 

const octokit = require("octokit")
const octokit = new octokit.Octokit({
    auth: process.env.GITHUB_TOKEN
})

// Wait hang on. What data do we need?
//  Auth with Github Token (or whatever): Might not need this for testing
//  Need PR number so we know what to do
//  Repo name $GITHUB_REPOSITORY from env context: "muxinc/mux-stats-sdk-exoplayer"
