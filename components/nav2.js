function Nav2() {
  const links = [
    { id: "id33", href: "/", icon: "/img/home.svg" },
    {
      id: "id44",
      href: "/Notification",
      icon: "/img/noticolor.svg",
    },
    {
      id: "id55",
      href: "/Post",
      icon: "/img/post.svg",
    },
  ];

  return (
    <div className="text-center nav-bar">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((link) => (
          <li key={link.id} className="flex px-2 py-1">
            <a className="text-black-500 text-sm" href={link.href}>
              <img src={link.icon} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav2;
