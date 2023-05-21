function Nav() {
  const links = [
    { id: "id1", href: "/", icon: "/img/home.svg" },
    {
      id: "id2",
      href: "/Notification",
      icon: "/img/noti.svg",
    },
    {
      id: "id3",
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

export default Nav;
