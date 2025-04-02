const shell = require('shelljs')
const { prompt } = require('enquirer')
const { version: currentVersion } = require('./package.json')

const npm = 'https://registry.npmjs.org'
async function publish() {
  const { version, registry } = await prompt([
    {
      type: 'select',
      message: '发布环境:',
      name: 'registry',
      required: true,
      choices: [
        { name: npm, message: 'npm' },
      ],
    },
    {
      type: 'input',
      message: '新版本:',
      name: 'version',
      initial: currentVersion,
      required: true,
    },
  ])
  shell.exec(
    `yarn publish --new-version ${version}  --registry=${registry}${
      registry === npm ? ' --access=public' : ''
    }`,
  )
}
publish()
