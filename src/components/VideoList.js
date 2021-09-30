import React from "react"
import VideoItem from "./VideoItem"

const VideoList =({videos,onVideoSelect,selectedVideo})=>{
    
    const renderVideos =videos.map((video)=>{
        return(
            <VideoItem  onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} selectedVideo={selectedVideo}></VideoItem>
        )
    })

    return(
        <div className="ui relaxed divided list">
            {renderVideos}
        </div>
    )
}


export default VideoList