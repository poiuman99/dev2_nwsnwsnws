import express from 'express';
import { router } from './routes';
import path from 'path';

const app = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

// View engine instellen
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});