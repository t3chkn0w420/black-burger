const express = require ("express");
const router = express.Router();

//controllers
const { signin, signup, forgot, reset, uploadImage } = require("../controllers/auth");

router.get("/", (req, res) => {
   return res.json({
      data: "Hellow Master",
   });
});

router.post("/signin", signin );
router.post("/signup", signup );
router.post("/forgot", forgot );
router.post("/reset", reset );
router.post("/upload-image", uploadImage );

module.exports = router;