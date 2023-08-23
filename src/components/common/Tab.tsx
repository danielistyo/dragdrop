import { ReactNode } from "react";

const Tab = ({
  tabs,
  selected,
  onSelected,
}: {
  tabs: Array<{ title: string; body: ReactNode }>;
  selected: string;
  onSelected: (val: string) => void;
}) => {
  const onClick = (val: string) => () => {
    onSelected(val);
  };
  return (
    <div>
      <div className="flex relative z-20">
        {tabs.map(({ title }) => (
          <div
            key={title}
            onClick={onClick(title)}
            className={
              "text-gray-600 border mr-0.5 py-1 px-2 items-center text-xs " +
              (selected === title ? "bg-white border-b-0" : "bg-gray-100")
            }
          >
            {title}
          </div>
        ))}
      </div>
      <div className="relative z-10">{tabs.find((tab) => tab.title === selected)?.body}</div>
    </div>
  );
};

export default Tab;
