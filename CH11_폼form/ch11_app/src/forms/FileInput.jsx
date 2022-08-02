import React, { useState } from 'react';

const FileInput = () => {
  const [imgSrc, setImgSrc] = useState([]);

  const handleImgUpload = (e) => {
    const nowSelectImgList = e.target.files;
    const nowImgURLList = [...imgSrc];

    for (let i = 0; i < nowSelectImgList.length; i++) {
      const nowImgURL = URL.createObjectURL(nowSelectImgList[i]);
      nowImgURLList.push(nowImgURL);
    }
    setImgSrc(nowImgURLList);
    // console.log(e.target.files[0]);
    // setImgSrc(URL.createObjectURL(e.target.files[0]));
    // console.log("imgSrc: ", imgSrc);
  }

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="file"
          multiple="multiple"
          accept="image/*"
          name=""
          id="inputFile"
          className="form-control"
          onChange={handleImgUpload}
        />
        <label className="input-group-text">upload</label>
      </div>
      <div className="preview">
        {imgSrc.map((e) => {
          return <img className="w-25" src={e} alt="imgs" />
        })}
        {/* {imgSrc && <img className="w-25" src={imgSrc} alt="imgs" />} */}
      </div>
    </div>
  );
};

export default FileInput;