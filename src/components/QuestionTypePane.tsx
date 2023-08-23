import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MiniQuestion1 from "./MiniQuestion/MiniQuestion1";
import MiniQuestion2 from "./MiniQuestion/MiniQuestion2";
import MiniQuestion3 from "./MiniQuestion/MiniQuestion3";
import MiniQuestion4 from "./MiniQuestion/MiniQuestion4";
import MiniQuestion5 from "./MiniQuestion/MiniQuestion5";
import MiniQuestion6 from "./MiniQuestion/MiniQuestion6";
import MiniQuestion7 from "./MiniQuestion/MiniQuestion7";
import MiniQuestion8 from "./MiniQuestion/MiniQuestion8";
import MiniQuestion9 from "./MiniQuestion/MiniQuestion9";

const QuestionTypePane = ({ open, onOpen }: { open: boolean; onOpen: (open: boolean) => void }) => {
  const onCollapseClick = () => {
    onOpen(!open);
  };
  return (
    <div
      className={`fixed right-0 top-[113px] bg-white h-[calc(100vh-7rem)] overflow-y-auto flex items-stretch  border-t ${
        open ? "w-56" : "w-5"
      }`}
    >
      <div
        className="w-3 bg-[#f5f3f8] mx-2 flex items-center cursor-pointer fixed bottom-0 right-54 top-[113px]"
        onClick={onCollapseClick}
      >
        {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </div>
      <div className={`py-8 px-3 ml-5 ${open ? "block" : "hidden"}`}>
        <h4 className="text-sm mb-3">Pilih type soale</h4>
        <MiniQuestion1 />
        <MiniQuestion2 />
        <MiniQuestion3 />
        <MiniQuestion4 />
        <MiniQuestion5 />
        <MiniQuestion6 />
        <MiniQuestion7 />
        <MiniQuestion8 />
        <MiniQuestion9 />
      </div>
    </div>
  );
};

export default QuestionTypePane;
