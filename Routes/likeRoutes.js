const express = require('express');
const router = express.Router();
const { getLikeCount, incrementLikeCount } = require('../models/like');

// Get like count for a specific project
router.get('/:projectId', async (req, res) => {
  try {
    const projectId = parseInt(req.params.projectId);  // Parse projectId as integer
    const count = await getLikeCount(projectId);
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Like a specific project (increment the like count)
router.post('/:projectId', async (req, res) => {
  try {
    const projectId = parseInt(req.params.projectId);  // Parse projectId as integer
    const newCount = await incrementLikeCount(projectId);
    res.json({ count: newCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;