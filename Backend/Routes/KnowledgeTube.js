// routes/videoRoutes.js
const express = require('express');
const multer = require('multer');
const { getPresignedUrl, uploadVideo, uploadtubevideo, getKnowTubeVideos } = require('../controllers/KnowledgeTubeController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/knowtubevideos',getKnowTubeVideos)

router.post('/upload', upload.single('file'), uploadVideo);

router.get('/:filename', getPresignedUrl);

router.post('/uploadtubevideo',uploadtubevideo)


module.exports = router;
