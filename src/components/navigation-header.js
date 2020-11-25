import Link from "next/link";

import React from "react";

function NavigationHeader() {
  const allPosts = [
    {
      id: "206ea322?c396@4bb3^bf17%8a9013bae293",
      name: "First Post",
    },
    {
      id: "385baf31?66af@4c60^aeb5%d79bc7d083c7",
      name: "Second Post",
    },
    {
      id: "d460001f?d335@4c8d^b40b%9151de8e9b44",
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
