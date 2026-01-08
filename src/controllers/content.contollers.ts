import { random } from "../config/utils.js";
import Content from "../models/content.model.js";
import Link from "../models/link.model.js";
import User from "../models/user.model.js";

export const createContent = async (req: any, res: any) => {
  try {
    const { title, link, type } = req.body;
    const userId = req.user.id;
    // create new content
    const newContent = await Content.create({
      title,
      link,
      type,
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
    const { title, link, type } = req.body;
    // Validate input
    if (!title && !link && !type) {
      return res.status(400).json({
        message: "At least one field (title, link, type) is required",
      });
    }
    const content = await Content.findOneAndUpdate(
      { _id: contentId, userId },
      { $set: { title, link, type } },
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

export const shareContent = async (req: any, res: any) => {
  try {
    const { share } = req.body;

    if (share) {
      // check if link already exists
      // console.log("✅ REQ USER ID:", req.user.id);
      let link = await Link.findOne({ userId: req.user.id });

      if (!link) {
        link = await Link.create({
          userId: req.user.id,
          hash: random(26),
        });
      }

      return res.status(200).json({
        success: true,
        message: "Sharable link enabled",
        linkHash: `${link.hash}`,
      });
    } else {
      await Link.deleteOne({ userId: req.user.id });

      return res.status(200).json({
        success: true,
        message: "Sharable link disabled",
      });
    }
  } catch (error) {
    console.error("❌ SHARE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const shareContentLink = async (req: any, res: any) => {
  try {
    const hash = req.params.shareLink;

    const link = await Link.findOne({ hash });
    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Invalid or expired share link",
      });
    }

    const content = await Content.find({
      userId: link.userId,
    });

    const user = await User.findOne({
      _id: link.userId, // ✅ FIX
    });

    return res.status(200).json({
      success: true,
      username: user?.username,
      content,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
