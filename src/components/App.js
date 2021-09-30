import React, { useEffect, useState } from "react"
import useVideos from "../hook/useVideos"
import SearchBar from "./SearchBar"
import VideoDetail from "./VideoDetail"
import VideoList from "./VideoList"

// 使用 vercel 分享至網路上 供其他人查看
// 若有更新code 使用 vercel --prod (會重新發布一次)

const App = ()=>{

    const [videos,serch] = useVideos("building")
    const [selectedVideo,setSelectedVideo] = useState(null)

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos])

    return(
        <div className="ui container">
            <SearchBar onFormSubmit={serch}></SearchBar>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} selectedVideo={selectedVideo} onVideoSelect={setSelectedVideo}></VideoList>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default App