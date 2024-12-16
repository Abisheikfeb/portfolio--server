const express = require('express');
const router = express.Router();
const View = require('../models/View');

// Get view count for a specific project
router.get('/:id', async (req, res) => {
  try {
    const view = await View.findOne({ projectId: req.params.id });
    if (!view) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ count: view.count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Increment view count for a project
router.post('/:id', async (req, res) => {
  try {
    let view = await View.findOne({ projectId: req.params.id });

    if (!view) {
      // If project doesn't exist, create it
      view = new View({
        projectId: req.params.id,
        count: 1,  // Start with 1 view
      });
    } else {
      view.count += 1;  // Increment view count
    }

    await view.save();
    res.json({ count: view.count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
