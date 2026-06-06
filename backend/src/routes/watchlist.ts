import express from 'express';
const router = express.Router();

// Get watchlist
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch from Supabase
    res.json({ watchlist: [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch watchlist' });
  }
});

// Add to watchlist
router.post('/', async (req, res) => {
  try {
    const { symbol } = req.body;
    // TODO: Add to Supabase
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to watchlist' });
  }
});

// Remove from watchlist
router.delete('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    // TODO: Delete from Supabase
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove from watchlist' });
  }
});

export default router;
