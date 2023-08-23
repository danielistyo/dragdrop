import MiniQuestionTypeBox from "../MiniQuestionTypeBox";

const MiniQuestion6 = () => {
  return (
    <MiniQuestionTypeBox title="Type Soal 6">
      <div className="flex">
        <img
          className="w-1/2 grow object-cover max-h-10"
          src="https://freedesignfile.com/upload/2016/12/Cute-puppet-cat-Stock-Photo.jpg"
        />
        <img
          className="w-1/2 grow object-cover max-h-10"
          src="https://www.puppetsinc.com/v/vspfiles/photos/31104-2.jpg"
        />
      </div>
      <div className="flex border border-gray-400 rounded-sm mt-2">
        <select className="bg-gray-400 ">
          <option>Cat</option>
        </select>
        <div className="pl-2">Cute animal</div>
      </div>
      <div className="flex border border-gray-400 rounded-sm mt-2">
        <select className="bg-gray-400 ">
          <option>Cat</option>
        </select>
        <div className="pl-2">Wild animal</div>
      </div>
    </MiniQuestionTypeBox>
  );
};

export default MiniQuestion6;
