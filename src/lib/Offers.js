import Issue from "../models/Issues.js";
import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://riadosman:_u.wPMm5evs%21%40bR@cluster0.qs04zik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Connection success");
} catch (error) {
  console.error("Not connected to the database", error);
}
const handleSubmit = () => {
  const newIssue = new Issue();
  newIssue.website = "www";
  newIssue.contact = "wwwCOnta";
  newIssue.issue = "wwwIssue";
  newIssue.save();
};
export default function Offers({ contact, link, issue }) {
  return (
    <button
      type="submit"
      className="bg-[#19b7bd] py-4 px-6 rounded-2xl"
      onClick={() => handleSubmit({ contact, link, issue })}
    >
      أرسال
    </button>
  );
}
