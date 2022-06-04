import express from "express";

const router = express.Router();

//controllers
const { signin, signup, forgot, reset } = require("../controllers/auth");

router.get("/", (req, res) => {
   return res.json({
      data: "Hellow Master"
   });
});

router.post("/api/auth/signin", signin );
router.post("/api/auth/signup", signin );
router.post("/api/auth/forgot", forgot );
router.post("/api/auth/reset", reset );

export default router;