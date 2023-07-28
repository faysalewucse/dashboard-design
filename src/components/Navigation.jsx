const navigationItems = [
  {
    title: "Job Management",
    path: "/",
  },
  {
    title: "JD Write ",
    path: "/",
  },
  {
    title: "R3achout",
    path: "/",
  },
  {
    title: "Search",
    path: "/",
  },
  {
    title: "Intake",
    path: "/",
  },
  {
    title: "Interview",
    path: "/",
  },
];

const Navigation = () => {
  const selected = "Job Management";

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {navigationItems.map((menu, index) => (
        <a
          className={`${
            menu.title === selected && "bg-white"
          } hover:bg-white py-3 px-6 rounded`}
          href={menu.path}
          key={index}
        >
          {menu.title}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
