import React from "react";

const CardComponent = ({
  title,
  description,
  imageUrl,
  repoUrl,
  frontrepoUrl,
  backendrepoUrl,
}) => {
  return (
    <div className="card-container">
      <img src={imageUrl} alt="Card image" className="card-image" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        {/* Conditional rendering for repository links */}
        {repoUrl && !frontrepoUrl && !backendrepoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            View Repository
          </a>
        )}

        {frontrepoUrl && backendrepoUrl && (
          <>
            <a
              href={frontrepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              View Frontend Repository
            </a>
            <br />
            <a
              href={backendrepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              View Backend Repository
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
