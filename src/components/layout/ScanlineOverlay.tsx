import React from 'react';

export const ScanlineOverlay: React.FC = () => {
  return (
    <>
      <div className="film-grain-bg" aria-hidden="true" />
      <div className="scanlines-overlay" aria-hidden="true" />
    </>
  );
};
