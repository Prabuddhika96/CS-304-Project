import CircularProgressItem from "components/CircularProgress/CircularProgressItem";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import FileUpload from "Services/FileUpload/FileUpload";

function UpdateUserProfilePic({ user }: any) {
  //update propic
  const [src, setSrc] = useState<any>();
  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv: any) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem: any) {
    if (elem.target.files[0].size > 7168000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  // handle backdrop
  const [backdrop, setBackdrop] = useState<boolean>(false);
  const handlePropic = () => {
    setBackdrop(true);
    setTimeout(() => {
      const file = FileUpload.convertBase64ToFile(preview, "aa.png");

      let formData = new FormData();
      formData.append("file", file);

      FileUpload.uploadProfilePicture(user?.userId, formData);
      window.location.reload();
    }, 1000);
  };
  return (
    <div>
      <div className="flex justify-center w-full text-center">
        <Avatar
          width={470}
          height={470}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={src}
          exportQuality={1}
          shadingOpacity={0.6}
          exportAsSquare
          exportSize={2000}
        />
      </div>

      <div className="react-hook-form-btn-div">
        <button
          type="submit"
          onClick={handlePropic}
          className="react-hook-form-btn react-hook-form-btn-submit">
          {backdrop === true && (
            <>
              <div className="mr-3">
                <CircularProgressItem />
              </div>
            </>
          )}
          Update Profile Picture
        </button>
      </div>
    </div>
  );
}

export default UpdateUserProfilePic;
