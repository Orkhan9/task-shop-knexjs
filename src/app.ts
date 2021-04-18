import express, {Application} from 'express';

// Route files
import {routerCashier} from './routes/cashier';

// Boot express
const app: Application = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/', routerCashier);

const port = 5000;
// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
