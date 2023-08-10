import { useNavigate } from "react-router-dom";

export const HeaderLink = ({ title, path }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(path);
  };
  return (
    <div
      className="p-1 px-2 cursor-pointer hover:text-black hover:bg-white transition duration-300"
      onClick={onClick}
    >
      {title}
    </div>
  );
};
