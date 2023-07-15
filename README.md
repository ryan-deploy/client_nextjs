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

## Debugging in VS Code

`/.vscode/launch.json`

## BaseTemplate

Create each componet base on BaseTemplate.

## Adding a Custom Document

Link a font family named Quicksand in Custom Document component: MyDocument

## Adding Layouts

By making and implementing a function called **getLayout**

## Deployment

Deploy with Vercel, [check this out](https://client-nextjs.vercel.app/)

## Domains in Vercel

- `Another Vercel account is using this domain. Please set the following TXT record on _vercel.tangzhenming.com to use nextjs.tangzhenming.com in this project. Once the verification is completed and the domain is successfully configured, the TXT record can be removed`
  - To solve this issue, we need to set a TXT record in our DNS provider's website(For me is [Alibaba](https://dns.console.aliyun.com/?spm=5176.12818093_-1363046575.products-recent.ddns.3be916d0TrKPtQ#/dns/setting/tangzhenming.com)), then Vercel knows that you're the owner of this domain
- Set a CNAME record with name of `nextjs.tangzhenming.com` and value of `cname.vercel-dns.com` in the DNS provider's website
- Add a Domain `next.tangzhenming.com` in Vercel Project(In this case is **client-nextjs**) Settings
- Now when we visite either [https://nextjs.tangzhenming.com/](https://nextjs.tangzhenming.com/) or [https://client-nextjs.vercel.app/](https://client-nextjs.vercel.app/), we'll get to the `client-nextjs` project
- Redirect `client-nextjs.vercel.app` to `next.tangzhenming.com` if you want to

## References

[How to Build Scalable Architecture for your Next.js Project](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)
