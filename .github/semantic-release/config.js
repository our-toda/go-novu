module.exports = {
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        "presetConfig": {},
        "releaseRules": [
          {
            "type": "refactor",
            "release": "patch"
          }
        ]
      }
    ],
    "@semantic-release/github",
    [
      "@semantic-release/release-notes-generator",
      {
        "preset": "conventionalcommits",
        "writerOpts": {
          "commitsSort": ["type", "scope"]
        }
      }
    ],
    [
      "@semantic-release/exec",
      {
        "successCmd": "echo new-release-version=${ nextRelease.version } >> $GITHUB_OUTPUT"
      }
    ]
  ]
};