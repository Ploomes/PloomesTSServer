import { createConnection } from "./src/Connection";

const connection = createConnection('https://app9-api2.ploomes.com/')

connection.login('teste@mrdias.com', '1234').then((uk) => console.log('login ok', uk))