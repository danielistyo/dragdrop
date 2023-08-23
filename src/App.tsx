import { useMemo, useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Tab from "./components/common/Tab";
import AddItem from "./components/QuestionBuilder/AddItem";

const TABS = [
  { title: "Description", body: <div>Mantap</div> },
  { title: "Add Items", body: <AddItem /> },
  { title: "Preview", body: <div>Mantap</div> },
  { title: "Explanations", body: <div>Mantap</div> },
];

function App() {
  const [selectedTab, setSelectedTab] = useState<string>("Add Items");
  const tabs = useMemo(() => TABS, []);
  const onSelected = (val: string) => {
    setSelectedTab(val);
  };
  return (
    <div className="mx-auto border-x font-sans relative">
      <header className="h-16 shadow-lg flex items-center fixed top-0 w-full z-10 bg-white">
        <img
          className="block w-24"
          src="https://kobieducation.com/wp-content/uploads/2023/01/KOBI-main-logo_main-1024x507.png"
        />
      </header>
      <Sidebar />
      <div className="ml-52 w-[calc(100%-13rem)] min-h-[calc(100%-4rem)] pt-6 mt-16 z-0 relative">
        <Tab tabs={tabs} selected={selectedTab} onSelected={onSelected} />
      </div>
    </div>
  );
}

export default App;
