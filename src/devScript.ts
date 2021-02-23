import { PloomesServer } from './Connection/PloomesServer';

export function test() {
  console.log('No test aqui');
  const userKey =
    '4862F77A37BA32F3C0A85ACF2989AD3396569139BB0684A0974B93A6D87695A3023A3C3460889B62A48C56C534DD4652EC4FF879304ADCB058E0D1EFD529DFB0';
  const server = new PloomesServer({
    authMethod: 'validUserKey',
    userKey,
    baseUrl: 'https://app9-api2.ploomes.com/',
  });
  server
    .get('Self')
    .then(dados => console.log(dados))
    .catch(error => {
      console.log(error);
    });
}
