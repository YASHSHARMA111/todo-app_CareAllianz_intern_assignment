import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  const links = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Add Task",
      path: "/add"
    }
  ];
  return (
    <div className="bg-black w-full">
      <div className="w-full max-w-3xl m-auto text-white p-2 flex items-center justify-between">
        <h1>TaskApp</h1>
        <div className="flex gap-4">
          {links.map((link, i) => (
            <HeaderLink key={i} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};
