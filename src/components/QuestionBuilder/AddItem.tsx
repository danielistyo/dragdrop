import { useState } from "react";
import QuestionTypePane from "../QuestionTypePane";
import AudioUploader from "./AudioUploader";
import FieldProperties from "./FieldProperties";
import QuestionForm1 from "./QuestionForm1";
import QuestionForm2 from "./QuestionForm2";
import QuestionForm3 from "./QuestionForm3";
import QuestionForm4 from "./QuestionForm4";
import QuestionForm5 from "./QuestionForm5";
import QuestionForm6 from "./QuestionForm6";
import QuestionForm7 from "./QuestionForm7";
import QuestionForm8 from "./QuestionForm8";
import QuestionForm9 from "./QuestionForm9";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import uniqueId from "lodash/fp/uniqueId";

const AddItem = () => {
  const [openPane, setOpenPane] = useState(true);
  const [questionEls, setQuestionEls] = useState<Array<{ id: string; type: string }>>([]);
  const [isDragging, setIsDragging] = useState(false);

  const onQuestionDelete = (id: string) => {
    setQuestionEls(questionEls.filter((q) => q.id !== id));
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // (e.target as HTMLDivElement).style.filter =
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const type = e.dataTransfer.getData("question_type");

    // scroll to bottom once successfully add question
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
    const id = uniqueId("question_type");

    setQuestionEls([...questionEls, { id, type }]);
  };

  return (
    <>
      <div
        className={`border-t mt-[-1px] p-5 text-gray-700 relative hover: ${
          openPane ? "w-[calc(100%-224px)]" : "w-[calc(100%-28px)]"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging && (
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0303b545] flex items-center z-20"></div>
        )}
        <div className="text-xs font-bold mb-2">Section 1/1</div>
        <AudioUploader />
        <FieldProperties />
        <div>
          {questionEls.map(({ type, id }) => {
            switch (type) {
              case "Type Soal 1":
                return <QuestionForm1 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 2":
                return <QuestionForm2 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 3":
                return <QuestionForm3 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 4":
                return <QuestionForm4 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 5":
                return <QuestionForm5 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 6":
                return <QuestionForm6 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 7":
                return <QuestionForm7 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 8":
                return <QuestionForm8 id={id} key={id} onDelete={onQuestionDelete} />;
              case "Type Soal 9":
                return <QuestionForm9 id={id} key={id} onDelete={onQuestionDelete} />;
            }
          })}
        </div>
        <div className="flex items-center my-10">
          <div className="grow text-center">
            <QuestionMarkCircleIcon className="w-12 block m-auto text-[#e9063a]" />
            <h4 className="text-[12px] font-bold mt-3">Drag and drop type soal</h4>
            <p className="text-[12px] mt-">Lorem iipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <QuestionTypePane open={openPane} onOpen={setOpenPane} />
    </>
  );
};

export default AddItem;
