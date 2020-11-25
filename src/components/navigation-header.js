import Link from "next/link";

import React from "react";

function NavigationHeader() {
  const allPosts = [
    {
      id: 1,
      name: "First Post",
    },
    {
      id: 2,
      name: "Second Post",
    },
    {
      id: 3,
      name: "Third Post",
    },
  ];

  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        {allPosts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/post/${encodeURIComponent(id)}`}>
              <a>Post: {name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default NavigationHeader;
