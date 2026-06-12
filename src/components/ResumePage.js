import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume-page" id="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="resume-title">
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="resume-subtitle">
            View or download my professional resume
          </p>
        </div>

        <div className="resume-actions-top">
          <a 
            href="/Senthamizhselvan Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-btn open-tab-btn"
          >
            <i className="fas fa-external-link-alt"></i> Open in New Tab
          </a>
          <a 
            href="/Senthamizhselvan Resume.pdf" 
            download="Senthamizhselvan_S_Resume.pdf"
            className="action-btn download-btn"
          >
            <i className="fas fa-download"></i> Download PDF
          </a>
        </div>

        <div className="resume-viewer-container">
          <iframe 
            src="/Senthamizhselvan Resume.pdf" 
            title="Senthamizhselvan S Resume"
            width="100%" 
            height="850px" 
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;