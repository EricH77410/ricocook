import React from 'react'

const Video = ({url}) => {
    const videoId = url.split('=')[1];
    return (        
        <div className="video-details embed-responsive embed-responsive-16by9">
            <iframe src={'https://www.youtube.com/embed/'+videoId} className="embed-responsive-item" frameBorder="0"></iframe>
        </div>
    )
}

export default Video;