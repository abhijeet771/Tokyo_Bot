import express from "express";

import { uploadImages } from "./upload.controller.js";

import {uploadMiddleware} from "../../middleware/upload.middleware.js";

const router = express.Router();

/* =========================
   UPLOAD IMAGES
========================= */

router.post(
  "/",
  uploadMiddleware.fields([
    {
      name: "frontImage",
      maxCount: 1,
    },
    {
      name: "sideImage",
      maxCount: 1,
    },
  ]),
  uploadImages
);

export default router;