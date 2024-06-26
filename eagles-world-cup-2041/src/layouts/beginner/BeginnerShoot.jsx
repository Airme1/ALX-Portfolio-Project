import React, { useState, useEffect } from "react";
import VideoList from '../VideoList';
import '../subTraining.css'

function BeginnerShoot() {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDEZ8XeOqNjbWdQhazkdbDLbcFPDBE1ScY&q=Beginner soccer shooting drill&type=video&part=snippet&maxResults=12"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const videosData = await response.json();
        setVideos(videosData.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once after the initial render

  if (loading) {
    return <div>Beginner Passing Drills Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div className="video-container">
      <h1>Work on Your Shooting</h1>
      <VideoList videos={videos} />
    </div>
  );
}

export default BeginnerShoot;
