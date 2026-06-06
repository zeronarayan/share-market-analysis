import express from 'express';
const router = express.Router();

// Get user portfolio
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch from Supabase
    res.json({ holdings: [], totalValue: 0, dayChange: 0 });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio' });
  }
});

// Add stock to portfolio
router.post('/add', async (req, res) => {
  try {
    const { symbol, quantity, buyPrice } = req.body;
    // TODO: Add to Supabase
    res.json({ success: true, holding: {} });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add holding' });
  }
});

// Remove stock from portfolio
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Delete from Supabase
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove holding' });
  }
});

export default router;
