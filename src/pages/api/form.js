import { dbConnect } from "@lib/dbConnect";
import Form from "@models/Form";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const form = new Form(req.body);
        await form.save();

        return res.status(200).json({ success: true, form });
      } catch (e) {
        return res.status(400).json({ success: false, error: e });

      }
    default:
      return res
        .status(500)
        .json({ success: false, error: "Method not allowed" });
  }
}
