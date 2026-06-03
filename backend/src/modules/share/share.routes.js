import express from "express";

import { createShareImage } from "./share.controller.js";

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                             CREATE SHARE IMAGE                             */
/* -------------------------------------------------------------------------- */

router.post(
  "/",
  createShareImage
);

export default router;