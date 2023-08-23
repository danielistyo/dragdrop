import Checkbox from "rc-checkbox";
import MiniQuestionTypeBox from "../MiniQuestionTypeBox";

const MiniQuestion1 = () => {
  return (
    <MiniQuestionTypeBox title="Type Soal 1">
      <p>What is the woman from?</p>
      <div>
        <Checkbox type="radio" className="align-middle leading-3" />{" "}
        <span className="align-middle leading-3">Germany</span>
      </div>
      <div>
        <Checkbox type="radio" className="align-middle leading-3" checked />{" "}
        <span className="align-middle leading-3">Russia</span>
      </div>
      <div>
        <Checkbox type="radio" className="align-middle leading-3" />{" "}
        <span className="align-middle leading-3">Indonesia</span>
      </div>
      <div>
        <Checkbox type="radio" className="align-middle leading-3" />{" "}
        <span className="align-middle leading-3">Australia</span>
      </div>
    </MiniQuestionTypeBox>
  );
};

export default MiniQuestion1;
