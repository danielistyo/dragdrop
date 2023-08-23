import Checkbox from "rc-checkbox";
import MiniQuestionTypeBox from "../MiniQuestionTypeBox";

const MiniQuestion8 = () => {
  return (
    <MiniQuestionTypeBox title="Type Soal 8">
      <div className="mt-2">
        <span className="w-4 h-4 align-middle inline-block leading-4  bg-sky-900 text-white text-xs text-center rounded-sm mr-2">
          A
        </span>
        <Checkbox className="align-middle leading-3 mr-2" />
        <span className="align-middle leading-4">Mazda</span>
      </div>
      <div className="mt-1">
        <span className="w-4 h-4 align-middle inline-block leading-4  bg-sky-900 text-white text-xs text-center rounded-sm mr-2">
          A
        </span>
        <Checkbox className="align-middle leading-3 mr-2" checked/>

        <span className="align-middle leading-4">Supra</span>
      </div>
      <div className="mt-2">
        <span className="w-4 h-4 align-middle inline-block leading-4  bg-sky-900 text-white text-xs text-center rounded-sm mr-2">
          A
        </span>
        <Checkbox className="align-middle leading-3 mr-2" />
        <span className="align-middle leading-4">Mazda</span>
      </div>
      <div className="mt-1">
        <span className="w-4 h-4 align-middle inline-block leading-4  bg-sky-900 text-white text-xs text-center rounded-sm mr-2">
          A
        </span>
        <Checkbox className="align-middle leading-3 mr-2" checked/>

        <span className="align-middle leading-4">Supra</span>
      </div>
    </MiniQuestionTypeBox>
  );
};

export default MiniQuestion8;
