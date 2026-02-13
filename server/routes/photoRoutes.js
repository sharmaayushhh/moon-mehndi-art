import express from "express";
import multer from "multer";
import Photo from "../models/Photo.js";

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Upload Photo
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newPhoto = new Photo({
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
      category: req.body.category,
    });

    await newPhoto.save();
    res.status(201).json(newPhoto);

  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
});

// Get All Photos
router.get("/", async (req, res) => {
  const photos = await Photo.find().sort({ createdAt: -1 });
  res.json(photos);
});

// Delete Photo
router.delete("/:id", async (req, res) => {
  await Photo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
