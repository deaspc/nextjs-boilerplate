function Card() {
  const links = [
    {
      card: "card1",
      icon: "http://placehold.co/162x235",
    },
    {
      card: "card2",
      icon: "http://placehold.co/162x235",
    },
    {
      card: "card3",
      icon: "http://placehold.co/162x235",
    },
  ];

  return (
    <div className="text-left Card">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((c) => (
          <li key={c.card} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm" href={c.href}>
              <img src={c.icon} />
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
