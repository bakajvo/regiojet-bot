import {useEffect, useState} from "react";

interface AudioApi {
    playing: boolean;
    toggle: () => void;
}

const useAudio = (url): AudioApi => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState<boolean>(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return {
        playing,
        toggle
    }
};

export default useAudio;