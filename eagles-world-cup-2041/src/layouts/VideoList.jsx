import React from 'react';
import './subTraining.css'

function VideoList({ videos }) {
  return (
    <div className='video-container'>
      {videos.map((video) => (
        <div key={video.id.videoId} className='video-item'>
          <iframe
            width="460"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title={video.snippet.title}
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
