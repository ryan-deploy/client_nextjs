# CLIENT_NEXTJS

## Project Setup

`npx create-next-app --ts client_nextjs`

## Engine Locking

.npmrc 文件是 npm 的运行时配置文件，它可以设置 package.json 中依赖包的安装来源，即从哪里下载依赖包。.npmrc 文件中的 engine-strict=true 表示强制使用 package.json 中指定的 node 版本。

.nvmrc 文件是用来管理项目使用的 node.js 版本的。它包含一个 nvm 可识别的 node.js 版本文本。.nvmrc 文件中的 lts/gallium 表示使用长期支持版本（Long Term Support, LTS）的 Gallium 版本（[We can check the codename by this link](https://github.com/nodejs/release#release-schedule)）。

## Code Formatting and Quality Tools

- eslint - For best practices on coding standards
  - Test config by running: `npm run lint`
- prettier - For automatic formatting of code files
  - Only needed during development: `npm i -D prettier`
  - `npm run prettier`
  - Get Prettier VS Code extension to handle the formatting of the files and we don't need to reply on the command line tool

## Git Hooks

Husky is a tool for running script at different stages of the git process.

- `npm i -D husky`
- `npx husky install`
- Ensure Husky gets installed automatically when other developments run the project
  ```
  scripts: {
    "prepare": "husky install"
  }
  ```
- To create a hook run `npx husky add .husky/pre-commit "npm run lint"` (Run `npm run lint` when we make a commit)
- `npx husky add .husky/pre-push "npm run build"`

## Commitlint

Ensure that everyone on the team is following a standard convertion for all commit messages.

- `npm i -D @commitlint/config-conventional @commitlint/cli`
- `/commitlint.config.js`
- `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'` or `npx husky add .husky/commit-msg \"npx --no -- commitlint --edit '$1'\"` or `npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"`

## VS Code Configuration

Override the default settings of your installed VS Code that only apply to this project.

## References

[How to Build Scalable Architecture for your Next.js Project](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)
