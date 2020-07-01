export const Greeter = (name: string) => `Hello ${name}`;
export const getTitle = () => `Trustify IOTA Tipbot`;
export const getDescription = () => `A IOTA Tip bot without access to private keys or seed.`;
export { add } from './commands/add';
export { tip } from './commands/tip';
export { setDB } from './database';
