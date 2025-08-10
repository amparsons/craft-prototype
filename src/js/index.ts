import { hello } from './modules/hello.js';

async function main() {
  const user = { id: 1, name: 'Craft CMS fdfr' };
    hello(user);
}

main();