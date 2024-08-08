import React, { useState } from "react";
import InputLabel from "./InputLabel";
import Files from "react-files";

export default function FileInput({ ...props }) {
    let [selectedFiles, setSelectedFiles] = useState([]);
    const handleChange = (files) => {
        setSelectedFiles(files);
        console.log(files);
    };

    const handleError = (error, file) => {
        console.log("error code " + error.code + ": " + error.message);
    };

    return (
        <div className="files">
            <Files
                className="files-dropzone w-100 p-3 border my-5"
                onChange={handleChange}
                onError={handleError}
                accepts={["image/png", ".pdf", "audio/*"]}
                multiple
                maxFileSize={10000000}
                minFileSize={0}
                clickable
            >
                Drop files here or click to upload
            </Files>

            {/* Preview Area */}

            {selectedFiles.length ? (
                <div className="p-5 bg-gray-100 border rounded-sm ">
                    <div className="flex gap-5">
                    {selectedFiles.map((file, key) => (
                        <div>
                            <img className="object-cover h-48 w-96" src={file.preview.url} alt="" />
                        </div>
                    ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
