import MiniQuestionTypeBox from "../MiniQuestionTypeBox";

const MiniQuestion5 = () => {
  return (
    <MiniQuestionTypeBox title="Type Soal 5">
      <div>Option</div>
      <div className="mt-2">
        <span className="w-4 h-4 align-middle inline-block leading-4  bg-sky-900 text-white text-xs text-center rounded-sm mr-2">
          A
        </span>
        <span className="align-middle leading-4">Mazda</span>
      </div>
      <div className="mt-1">
        <span className="w-4 h-4 align-middle inline-block leading-4  bg-sky-900 text-white text-xs text-center rounded-sm mr-2">
          A
        </span>
        <span className="align-middle leading-4">Supra</span>
      </div>

      <div className="flex border border-gray-400 rounded-sm mt-2">
        <select className="bg-gray-400 ">
          <option>Supra</option>
        </select>
        <div className="pl-2">Vehicle has 4</div>
      </div>
      <div className="flex border border-gray-400 rounded-sm mt-2">
        <select className="bg-gray-400 ">
          <option>Supra</option>
        </select>
        <div className="pl-2">Vehicle has 2</div>
      </div>
    </MiniQuestionTypeBox>
  );
};

export default MiniQuestion5;
