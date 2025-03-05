import { Router, Request, Response } from 'express';
import fs from 'fs';

const router = Router();

// Data inladen
const loadNews = () => {
  const data = fs.readFileSync('server/data/news.json', 'utf-8');
  return JSON.parse(data);
};

// Startpagina
router.get('/', (req: Request, res: Response) => {
  const news = loadNews();
  res.render('index', { news });
});

// Detailpagina
router.get('/detail/:slug', (req: Request, res: Response) => {
  const news = loadNews();
  const article = news.find((item: any) => item.slug === req.params.slug);
  if (article) {
    res.render('detail', { article });
  } else {
    res.status(404).send('Artikel niet gevonden');
  }
});

export { router };