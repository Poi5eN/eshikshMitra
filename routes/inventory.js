const express = require("express");
const { createsellItem} = require("../controllers/inventoryController");
const verifyToken = require("../middleware/auth");

const router = express.Router();

router.post('/createsellItem', verifyToken, createsellItem);
// router.get('/getsellItems', verifyToken, getsellItems);
// router.delete('/deleteExam/:examId', verifyToken, deleteExam);
// router.put('/updateExam', verifyToken, updateExam);

module.exports = router;