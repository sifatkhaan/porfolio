import sql from 'mssql'

const config = {
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server:process.env.DB_SERVER,
    databaser:process.env.DB_NAME,
    options: {
        encrypt:true,
        trustServerCertificate:true
    }
};
let poolPromise;
export async function connectToDatabase() {
    if(!poolPromise){
        poolPromise = new sql.ConnectionPool(config).connect().then(pool =>{
            console.log("Connected to SQl Server");
            return pool;
        }).catch(err =>{
            console.error(err, "Database Connection Failed");
            poolPromise = null;
        });
    }
    return poolPromise;
}