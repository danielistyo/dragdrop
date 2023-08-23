import { FolderIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 w-52 pt-6 text-gray-600 min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="w-full font-bold px-6">Listening Test</div>
      <div className="border-t py-6 text-sm border-r-8 border-gray-200 h-full flex-grow">
        <div className="font-semibold px-6 py-1">Pages</div>
        <div className="flex px-6 py-1 items-center bg-blue-50 text-sky-700 font-semibold">
          <PlusCircleIcon className="w-5 mr-3" />
          New Items
        </div>
        <div className="flex px-6 py-1 items-center">
          <FolderIcon className="w-5 mr-3" />
          Database
        </div>
        <div className="px-6 pl-14 py-1">Lorem ipsum</div>
      </div>
    </aside>
  );
};

export default Sidebar;
