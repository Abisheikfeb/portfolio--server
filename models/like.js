const mongoose = require('mongoose');

// Define the Like schema with a projectId to distinguish between different projects
const likeSchema = new mongoose.Schema({
  projectId: {
    type: Number,
    required: true,
    unique: true,  // Ensure that each project has its own unique like count
  },
  count: {
    type: Number,
    default: 0,
  },
});

// Create the Like model based on the schema
const Like = mongoose.model('Like', likeSchema);

// Function to get the like count for a specific project
const getLikeCount = async (projectId) => {
  try {
    const like = await Like.findOne({ projectId });
    return like ? like.count : 0;
  } catch (error) {
    throw new Error('Error fetching like count');
  }
};

// Function to increment the like count for a specific project
const incrementLikeCount = async (projectId) => {
  try {
    // Try to find the like entry for the specific project
    let like = await Like.findOne({ projectId });

    if (!like) {
      // If the project doesn't exist, create a new entry with the count starting at 1
      like = new Like({ projectId, count: 1 });
    } else {
      // Increment the like count for the project
      like.count += 1;
    }

    // Save the updated like count
    await like.save();
    return like.count;
  } catch (error) {
    throw new Error('Error updating like count');
  }
};

module.exports = { getLikeCount, incrementLikeCount };
