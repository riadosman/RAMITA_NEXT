import mongoose from "mongoose";

const { Schema } = mongoose;

const IssueSchema = new Schema(
  {
    website: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."], // Example validation for email
    },
    issue: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Issue = mongoose.model("Issue", IssueSchema);

export default Issue;
