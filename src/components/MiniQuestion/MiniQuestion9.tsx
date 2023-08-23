import MiniQuestionTypeBox from "../MiniQuestionTypeBox";

const MiniQuestion9 = () => {
  return (
    <MiniQuestionTypeBox title="Type Soal 9">
      <div>
        <div>
          <span className="inline-block w-3 h-3 bg-[#fba33b] align-middle"></span>{" "}
          <span className="align-middle">True</span>
        </div>
        <div>
          <span className="inline-block w-3 h-3 bg-[#fba33b] align-middle"></span>{" "}
          <span className="align-middle">False</span>
        </div>
      </div>
      <div className="flex border border-gray-400 rounded-sm mt-2">
        <select className="bg-gray-400 ">
          <option>True</option>
        </select>
        <div className="pl-2">Vehicle has 4</div>
      </div>
      <div className="flex border border-gray-400 rounded-sm mt-2">
        <select className="bg-gray-400 ">
          <option>False</option>
        </select>
        <div className="pl-2">Vehicle has 2</div>
      </div>
    </MiniQuestionTypeBox>
  );
};

export default MiniQuestion9;
