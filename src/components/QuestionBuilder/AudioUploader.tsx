import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioUploader = () => {
  // const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.target.files[0]
  // };
  return (
    <div className="bg-gray-100 rounded-md px-4 py-6">
      <div className="flex mb-3">
        <MusicalNoteIcon className="w-8" />
        <div className="ml-2">
          <div className="text-xs font-bold">Music.mp3</div>
          <div className="text-[10px]">72.2 Mb</div>
        </div>
      </div>
      {/* <input type="file" onChange={onFileChange} /> */}
      <AudioPlayer src="https://samplelib.com/lib/preview/mp3/sample-15s.mp3" layout="horizontal-reverse" />
    </div>
  );
};

export default AudioUploader;
