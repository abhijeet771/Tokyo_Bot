import express from "express";
import cors from "cors";

import generationRoutes from "./modules/generation/generation.routes.js";
import uploadRoutes from "./modules/upload/upload.routes.js";
import shareRoutes from "./modules/share/share.routes.js";

import {
  errorMiddleware,
} from "./middleware/error.middleware.js";

const app = express();

/* -------------------------------------------------------------------------- */
/*                                MIDDLEWARE                                  */
/* -------------------------------------------------------------------------- */

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "20mb",
  })
);

/* -------------------------------------------------------------------------- */
/*                                  HEALTH                                    */
/* -------------------------------------------------------------------------- */

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message:
      "Tokyo AI Backend Running 🚀",
  });
});

/* -------------------------------------------------------------------------- */
/*                             API ROUTES                                     */
/* -------------------------------------------------------------------------- */

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/generation",
  generationRoutes
);

app.use(
  "/api/share",
  shareRoutes
);



/* -------------------------------------------------------------------------- */
/*                           ERROR MIDDLEWARE                                 */
/* -------------------------------------------------------------------------- */

app.use(errorMiddleware);

export default app;