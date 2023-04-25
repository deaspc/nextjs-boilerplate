function Nav() {
  const links = [
    { id: "id1", label: "Home", href: "/", icon: "http://placehold.co/32x32" },
    {
      id: "id2",
      label: "Noti",
      href: "/Noti",
      icon: "http://placehold.co/32x32",
    },
    {
      id: "id3",
      label: "Post",
      href: "/Post",
      icon: "http://placehold.co/32x32",
    },
  ];

  return (
    <nav className="text-center nav-bar">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((l) => (
          <li key={l.id} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm" href={l.href}>
              <img src={l.icon} />
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
