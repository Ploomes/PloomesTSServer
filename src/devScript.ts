import { PloomesServer } from './Connection/PloomesServer';

export function test() {
  console.log('No test aqui');
  const server = new PloomesServer({
    authMethod: 'emailAndPassword',
    email: 'tiago.provenzano@ploomes.com',
    psw: '1234',
    baseUrl: 'https://api2.ploomes.com/',
  });
  server.login();
}
