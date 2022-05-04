const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// * Handle Uncaught Exceptions
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server di matikan karena uncaughtException`);
  process.exit(1);
});

//setting up config file
dotenv.config({ path: 'backend/config/config.env' });

//* connecting to connectDatabase
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mod`
  );
});

//* Handle unhandle promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server di matikan karena unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
