import {Sequelize} from 'sequelize-typescript';
import { dbconfig } from './config'; // DB connection parameters
import { Currency } from './models/currencymodel';

export const sequelize = new Sequelize({
 database: dbconfig.database,
 username: dbconfig.username,
 password: dbconfig.password,
 host: dbconfig.host,
 port: dbconfig.port,
 dialect: dbconfig.dialect
});

sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})

.catch((err) => {
 console.log(err);
})

sequelize.addModels([Currency]);

// Force Initialization of the models and wipe all data ///
function initializeDatabase() {
    sequelize
    .sync({ force: true })
    .then(() => {
    console.log('Connection synced')
    return;
    })
    .catch(err => {
    console.log('err');
    });
   }