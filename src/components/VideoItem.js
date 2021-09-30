import React from "react"
import "./VideoItem.css"

const VideoItem =({video,onVideoSelect,selectedVideo})=>{

    return(
        <div onClick={()=>{onVideoSelect(video)}} className={`video_item item ${selectedVideo&&selectedVideo.id.videoId===video.id.videoId?'onShow':''}`}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>   
            <div className="content">
                <div className="header">
                    {video.snippet.title}   
                </div>
            </div> 
        </div> 
    )
}


export default VideoItem