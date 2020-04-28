import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Lodaing...</div>;
  }
  console.log(video.id.videoId)

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
  return (
    <div className="">
      <div className="ui embed">
        <iframe title="Video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="headers">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;