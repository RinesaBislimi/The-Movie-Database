import React, { useState } from "react";
const Card = ({ info, selectedMovie, setSelectedMovie }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null); // Reset the selected movie when the modal is closed
  };
  const handleModalShow = () => {
    setShowModal(true);
    setSelectedMovie(info.id); // Set the selected movie when the modal is opened
  };
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
      {showModal && selectedMovie === info.id && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal">
            <div className="modal-header">
              <h3>{info.title}</h3>
              <button className="titulli_x" onClick={handleModalClose}>&times;</button>
            </div>
            <div className="modal-body secondclass">
              <div className="modal_body_img">
                <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} className="img-fluid" />
              </div>
              <div className="modal_body_p">
                <p>{info.overview}</p>
              </div>
              {/* Add other details you want to display in the modal */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;