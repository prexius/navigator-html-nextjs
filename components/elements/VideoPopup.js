'use client'

import { useState } from "react"
import ModalVideo from "react-modal-video"
import '../../node_modules/react-modal-video/css/modal-video.css'
export default function VideoPopup() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="video-player">
                <img className="img-fluid rounded w-100" src="/images/slider/video-player-thumb.jpg" alt="" />
                <a className="play-icon" onClick={() => setOpen(true)}>
                    <i className="tf-ion-play" data-video="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1" />
                </a>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
            />
        </>
    )
}
