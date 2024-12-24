const express = require('express');
const router = express.Router();
const View = require('../models/View'); 

router.get('/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    let view = await View.findOne({ projectId });
    if (!view) {
      view = new View({ projectId, count: 1 });
      await view.save();
    } else {
      view.count += 1;
      await view.save();
    }
    res.status(200).json({ projectId, views: view.count });
  } catch (error) {
    res.status(500).json({ error: 'Error updating views' });
  }
});

module.exports = router;
