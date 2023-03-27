import CircularProgressItem from "components/CircularProgress/CircularProgressItem";
import React, { useState } from "react";
import { toast } from "react-toastify";
import FileUpload from "Services/FileUpload/FileUpload";
import AddNewImageCard from "./AddNewImageCard";

function AddNewDetailImage({ limit, setLimit, providerId }: any) {
  const [files, setFiles] = useState<File[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (limit > 0) {
      setLimit(limit - 1);
      const selectedFiles = event.target.files;
      if (selectedFiles) {
        const filesArray = Array.from(selectedFiles);
        setFiles((prevFiles) => [...prevFiles, ...filesArray]);
      }
    }
  };

  const [backdrop, setBackdrop] = useState<boolean>(false);
  const uploadImages = (e: any) => {
    e.preventDefault();
    setBackdrop(true);

    let formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });

    setTimeout(() => {
      FileUpload.uploadServiceDetailImages(providerId, formData).then(
        (res: any) => {
          if (res.status === 200) {
            toast.success("Successfully Uploaded");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            toast.error("Upload failed");
          }
        }
      );
    }, 1000);
  };
  return (
    <div>
      <div className="relative grid grid-cols-5 gap-3 p-3 bg-white">
        {files &&
          Array.from(files).map((file) => (
            <img
              key={file.name}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className={`rounded-lg`}
              style={{ width: "100%", height: "200px" }}
            />
          ))}
        {limit > 0 && <AddNewImageCard func={handleChange} />}
      </div>

      {files?.length > 0 && (
        <div className="react-hook-form-btn-div">
          <button
            type="submit"
            onClick={uploadImages}
            className={`react-hook-form-btn react-hook-form-btn-submit `}>
            {backdrop === true && (
              <>
                <div className="mr-3">
                  <CircularProgressItem />
                </div>
              </>
            )}
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default AddNewDetailImage;
