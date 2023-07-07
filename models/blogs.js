const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    username: { type: String, default: "" },
    age: { type: Number, default: 0 },
    password: { type: Object, default: "" },
  },
  {
    timestamps: {
      createdAt: "createdOn",
      updatedAt: "updatedOn",
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const BlogModel = mongoose.model('blogs-challenge', schema);

module.exports = BlogModel;
