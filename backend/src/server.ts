import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Phani Shankar', email: 'test@example.com' },
];

app.get('/', (req: Request, res: Response) => {
  res.json({
    service: 'Full-Stack 3-Tier Web Application API',
    version: '1.0.0',
    stack: 'Node.js | Express | PostgreSQL',
    status: 'running'
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/api/users', (req: Request, res: Response) => {
  res.json({ success: true, data: users, count: users.length });
});

app.post('/api/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email required' });
  }
  const newUser: User = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ success: false, error: 'User not found' });
  res.json({ success: true, data: user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
