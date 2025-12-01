import Content from "../models/content.model.js";

export const createContent = async (req: any, res: any) => {
  try {
    const { title, link } = req.body;
    const userId = req.user.id;
    // create new content
    const newContent = await Content.create({
      title,
      link,
      tags: [],
      userId,
    });
    res
      .status(201)
      .json({ message: "Content created successfully", content: newContent });
  } catch (error) {}
};

export const getContents = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const contents = await Content.find({ userId }).populate(
      "userId",
      "username"
    );

    res.status(200).json({ contents });
  } catch (error) {}
};

export const deleteContent = async (req: any, res: any) => {
  try {
    const contentId = req.params.id;
    const userId = req.user.id;
    const content = await Content.findOneAndDelete({ _id: contentId, userId });
    if (!content) {
      return res
        .status(404)
        .json({ message: "Content not found or unauthorized" });
    }
    res.status(200).json({ message: "Content deleted successfully", content });
  } catch (error) {}
};

export const updateContent = async (req: any, res: any) => {
  try {
    const contentId = req.params.id;
    const userId = req.user.id;
    const { title, link, tags } = req.body;
    // Validate input
    if (!title && !link && !tags) {
      return res
        .status(400)
        .json({
          message: "At least one field (title, link, tags) is required",
        });
    }
    const content = await Content.findOneAndUpdate(
      { _id: contentId, userId },
      { $set: { title, link, tags } },
      { new: true }
    );
    if (!content) {
      return res
        .status(404)
        .json({ message: "Content not found or unauthorized" });
    }
    res.status(200).json({ message: "Content updated successfully", content });
  } catch (error) {}
};
