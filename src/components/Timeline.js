import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const posts = props.events.map((post) => {
    return (
      <TimelineEvent key={post.timeStamp} person={post.person} status={post.status} time={post.timeStamp}/>
    );
  });
  

  return (
    <div className='timeline'>
      {posts}
    </div>
  );
};

export default Timeline;