import React from "react";

const DisplayInfo = (props) => {
  // console.log("from", props.info);
  const info = props.info;
  const name = info.name.title + " " + info.name.first + " " + info.name.last;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="border p-4 text-center bg-white">
        <img
          src={info.picture.large}
          className="img-fluid rounded-circle mb-2"
          alt="..."
        />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{info.location.city}</p>
        <p className="card-text">{info.location.country}</p>
      </div>
    </div>
  );
};

export default DisplayInfo;
