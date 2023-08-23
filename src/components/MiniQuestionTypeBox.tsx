import { ReactNode } from "react";

const MiniQuestionTypeBox = ({ children, title }: { children: ReactNode; title: string }) => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("question_type", title);
  };
  return (
    <div
      className="bg-[#f8f7fd] p-3 text-[10px] relative w-full shadow-lg hover:bg-[#fba33b] rounded-md mt-3 cursor-grab"
      draggable
      onDragStart={onDragStart}
    >
      <div className="bg-white p-3 w-full rounded-sm">{children}</div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-transparent"></div>
      <div className="mt-2">{title}</div>
    </div>
  );
};

export default MiniQuestionTypeBox;
