import React from 'react';

const Dashboard = () => {
  const externalHTMLSrc = 'http://127.0.0.1:5500/my-app/src/clone/sem5_miniproj/index.html';

  return (
    <div>
      <iframe src={externalHTMLSrc} title="External Content" width="100%" height="400" />
    </div>
  );
};

export default Dashboard;
