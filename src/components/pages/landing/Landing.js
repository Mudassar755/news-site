import React from 'react';
import Showcase from '../../dashboard/Showcase';
import Articles from './Articles';
import VideosSection from './VideosSection'

 function Dashboard() {
  return (
    <div>
      <Showcase />
      <VideosSection />
      <Articles />
    </div>
  )
}

export default Dashboard;
