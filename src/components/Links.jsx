import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },

  { url: "/images", text: "📷 Images" },

  { url: "/videos", text: "📺 Videos" },
];

export function Links() {
  return (
    <div className=" flex sm:justify-around justify-between items-center mt-4">
      {/* the activeClassName does not work!!! */}
      {links.map(({ url, text }) => (
        <Link
          key={url}
          to={url}
          className="m-2 mb-0 active:text-blue-700 active:border-b active:border-blue-700 pb-2"
        >
          {text}
        </Link>
      ))}
    </div>
  );
}
