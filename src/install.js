import os from 'os';
import path from 'path';
import fs from 'fs';

const cdpPath = new URL('./cdp/cdp.sh', import.meta.url).pathname.slice(1);
const lspPath = new URL('./lsp/lsp.sh', import.meta.url).pathname.slice(1);

const aliases =
  `
# Ben's lsp & cdp CLIs
alias lsp=". ${lspPath}"

function cdp {
  . ${cdpPath} $1
}
`;

const bashProfilePath = path.join(os.homedir(), './.bash_profile');

const isInstalled = () => {
  const homeDir = fs.readdirSync(os.homedir(), 'utf-8');

  if (homeDir.includes('.bash_profile')) {
    const bashProfile = fs.readFileSync(bashProfilePath, 'utf-8');
    return bashProfile.includes(aliases);
  }

  return false;
};

(() => {
  if (isInstalled()) {
    return console.log('Already setup');
  }

  fs.writeFileSync(bashProfilePath, aliases, { flag: 'as+' });
  console.log('Aliases added to .bash_profile');
})();
