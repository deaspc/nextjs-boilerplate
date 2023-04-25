function Nav() {
  const links = [
    { id: "id1", href: "/", icon: "/http://placehold.co/48x48" },
    {
      id: "id2",
      href: "/about",
      icon: "/http://placehold.co/48x48",
    },
    {
      id: "id3",
      href: "/contact",
      icon: "/http://placehold.co/48x48",
    },
  ];

  return (
    <nav className="text-center nav-bar">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((link) => (
          <li key={link.id} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm" href={link.href}>
              <img src={link.icon} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
