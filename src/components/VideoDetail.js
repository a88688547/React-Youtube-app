import React from "react"

const VideoDetail = ({video})=>{

    if(video){
        var VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return(
            <div>
                <div className="ui embed">
                    <iframe src={VideoSrc} title="videoiFrame"></iframe>
                </div>
    
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
    }else{
        return(
            <div>Loading....</div>
        )
    }
}

export default VideoDetail