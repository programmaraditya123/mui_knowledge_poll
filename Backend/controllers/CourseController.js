const express = require('express');
const course = require('../Models/CourseModel');
const { getBucket } = require('../config/db');

const addCourse = async (req, res) => {
    try {
        const { title, description, category, instructor, price, uploadedon, content } = req.body;
        // validations 
        switch (true) {
            case !title:
                return res.status(500).send({ error: 'Title is required' });
            case !description:
                return res.status(500).send({ error: 'description is required' });
            case !category:
                return res.status(500).send({ error: 'Category is required' });
            case !instructor:
                return res.status(500).send({ error: 'Instructor  is required' });
            case !price:
                return res.status(500).send({ error: 'price is required' });
            case !content:
                return res.status(500).send({ error: 'content is required' });


        }
        const newCourse = new course({
            title, description, category, instructor, price, uploadedon: uploadedon || Date.now(), content
        })
        await newCourse.save();
        res.status(201).send({
            success: true,
            message: "Course added succesfully",

        })

    } catch (error) {
        console.log("Error", error)

    }
};

// const getVideo = async (req, res) => {
//     try {
//         const bucket = getBucket();
//         if (!bucket) {
//             return res.status(500).json({ message: "GridFSBucket not initialized" });
//         }

//         const filename = decodeURIComponent(req.params.filename); // Decode URL
//         console.log("Requested filename:", filename);

//         // 🔹 Debug: Log all available filenames
//         // const files = await bucket.find().toArray();
//         // console.log("Available filenames in DB:++++++++++++++", files.map(f => f.filename));

//         // 🔹 Find file in GridFS
//         const files = await bucket.find({ filename }).toArray();
//         if (!files || files.length === 0) {
//             return res.status(404).json({ message: "File not found" });
//         }
//         const file = files[0];
//         const videoSize = file.length;

//         //handle range request
//         const range = req.headers.range;
//         if (!range) {
//             res.writeHead(200, {
//                 "Content-Length": videoSize,
//                 "Content-Type": file.contentType,
//             });


//             const downloadStream = bucket.openDownloadStreamByName(filename);
//             downloadStream.pipe(res);
//         }
//         // }
//         // const chunksize = 255;
//         // // const chunksize = 1 *1024 * 1024;
//         // const start = Number(range.replace(/\D/g,""));
//         // const end = Math.min(start+chunksize,videoSize-1);
//         // const contentLength = end-start+1;

//         const parts = range.replace(/bytes=/, "").split("-");
//         const start = parseInt(parts[0], 10);
//         const end = parts[1] ? parseInt(parts[1], 10) : videoSize - 1;

//         if (start >= videoSize || end >= videoSize || start > end) {
//             return res.status(416).json({ message: "Requested range not satisfiable" });
//         }

//         const chunkSize = end - start + 1;
//         console.log(`Streaming bytes ${start}-${end} of ${videoSize}`);

//         res.writeHead(206, {
//             "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//             "Accept-Ranges": "bytes",
//             "Content-Length": chunkSize,
//             "Content-Type": file.contentType
//         });

//         // res.set("Content-Type", file[0].contentType);

//         // 🔹 Open the stream correctly
//         const downloadStream = bucket.openDownloadStreamByName(filename, { start });
//         downloadStream.pipe(res);
//         return;
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
const getVideo = async (req, res) => {
    try {
        const bucket = getBucket();
        if (!bucket) {
            return res.status(500).json({ message: "GridFSBucket not initialized" });
        }

        const filename = decodeURIComponent(req.params.filename);
        console.log("Requested filename:", filename);

        // Find file in GridFS
        const files = await bucket.find({ filename }).toArray();
        if (!files || files.length === 0) {
            return res.status(404).json({ message: "File not found" });
        }

        const file = files[0];
        const videoSize = file.length;

        // Handle requests without Range headers (serve full video)
        const range = req.headers.range;
        if (!range) {
            res.writeHead(200, {
                "Content-Length": videoSize,
                "Content-Type": file.contentType,
            });

            const downloadStream = bucket.openDownloadStream(file._id);
            downloadStream.pipe(res);
            return;
        }

        // Parse Range Header
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        let end = parts[1] ? parseInt(parts[1], 10) : videoSize - 1;

        // Validate range
        if (isNaN(start) || start < 0 || start >= videoSize) {
            return res.status(416).json({ message: "Requested range not satisfiable" });
        }

        if (isNaN(end) || end < start || end >= videoSize) {
            end = videoSize - 1;
        }

        const chunkSize = end - start + 1;
        console.log(`Streaming bytes ${start}-${end} of ${videoSize}`);

        res.writeHead(206, {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize,
            "Content-Type": file.contentType,
        });

        // Open stream without start option
        const downloadStream = bucket.openDownloadStream(file._id);

        let bytesSkipped = 0;
        let bytesSent = 0;

        downloadStream.on("data", (chunk) => {
            if (bytesSkipped < start) {
                // Skip bytes until we reach the start position
                const remainingToSkip = start - bytesSkipped;
                if (chunk.length <= remainingToSkip) {
                    bytesSkipped += chunk.length;
                    return; // Skip this chunk entirely
                } else {
                    // Partial skip within this chunk
                    const offset = remainingToSkip;
                    bytesSkipped = start;
                    const dataToSend = chunk.slice(offset);
                    bytesSent += dataToSend.length;
                    if (bytesSent <= chunkSize) {
                        res.write(dataToSend);
                    } else {
                        const remaining = chunkSize - (bytesSent - dataToSend.length);
                        res.write(dataToSend.slice(0, remaining));
                        downloadStream.destroy();
                    }
                    return;
                }
            }

            // After skipping, send data up to the end position
            if (bytesSent < chunkSize) {
                const remaining = chunkSize - bytesSent;
                if (chunk.length <= remaining) {
                    res.write(chunk);
                    bytesSent += chunk.length;
                } else {
                    res.write(chunk.slice(0, remaining));
                    bytesSent += remaining;
                    downloadStream.destroy();
                }
            } else {
                downloadStream.destroy();
            }
        });

        downloadStream.on("end", () => {
            if (bytesSent < chunkSize) {
                console.warn("Stream ended prematurely");
                res.end();
            }
        });

        downloadStream.on("error", (err) => {
            console.error("Stream error:", err);
            if (!res.headersSent) {
                res.status(500).json({ message: "Stream error" });
            }
        });

    } catch (error) {
        console.error("Error streaming video:", error);
        if (!res.headersSent) {
            res.status(500).json({ message: error.message });
        }
    }
};






module.exports = { addCourse, getVideo };