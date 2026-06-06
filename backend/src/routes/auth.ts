import express from 'express';
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // TODO: Authenticate with Supabase
    res.json({ token: '', user: {} });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

// Register route
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    // TODO: Register with Supabase
    res.json({ success: true, user: {} });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

export default router;
