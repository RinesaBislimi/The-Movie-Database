import React, { useState } from "react";
const Card = ({ info }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  return (
    <>
      <div className="movie" onClick={handleModalShow} style={{ cursor: "pointer" }}>
        <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} className="poster" alt={info.title} />
        <div className="movie-details">
          <div className="box">
            <h4 className="title">{info.title}</h4>
            <p className="rating">{info.vote_average}</p>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal">
            <div className="modal-header">
              <h3>{info.title}</h3>
              <button onClick={handleModalClose}>&times;</button>
            </div>
            <div className="modal-body">
              <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} className="img-fluid" />
              <p>{info.overview}</p>
              {/* Add other details you want to display in the modal */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;