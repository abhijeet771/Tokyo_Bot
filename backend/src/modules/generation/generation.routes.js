import express from "express";

import { generateHairstyle } from "./generation.controller.js";

import { uploadMiddleware } from "../../middleware/upload.middleware.js";

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                           GENERATE HAIRSTYLE                               */
/* -------------------------------------------------------------------------- */

router.post(
  "/",
  uploadMiddleware.fields([
    {
      name: "frontImage",
      maxCount: 1,
    },
  ]),
  generateHairstyle
);

export default router;