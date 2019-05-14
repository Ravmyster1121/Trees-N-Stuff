import { Sequelize } from 'sequelize-typescript';
import { dbconfig } from './config'; // DB connection parameters

export const sequelize = new Sequelize({
    database: dbconfig.database,
    username: dbconfig.username,
    password: dbconfig.password,
    host: dbconfig.host,
    port: dbconfig.port
});
sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})
.catch((err) => {
 console.log(err);
})