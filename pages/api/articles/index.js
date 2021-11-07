import { articles } from '../../../news';

export default function handler(req, res) {
  res.status(200).json(articles);
}
