import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    title: { type: String, default: "" },
    author: { type: String, default: "" },
    note: { type: String, default: "" },
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

export default BlogModel;
