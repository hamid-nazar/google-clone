import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../contexts/RestultContextProvider";
import Loading from "./Loading";
import ReactPlayer from "react-player";

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  // const { results:{results, image_results, entries:news}, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(
    function () {
      if (searchTerm) {
        if (location.pathname === "/images") {
          getResults(`${location.pathname}`);
        } else {
          getResults(`${searchTerm}`);
        }
      }
    },
    [searchTerm, location.pathname]
  );

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/images":
      return (
        <div className="flex flex-wrap justify-between items-center">
          {results?.map(({ alt_description, urls, links, id, user }) => (
            <a
              href={links?.html}
              target="_blank"
              rel="noreferrer"
              className="sm:p-3 p-5"
              key={id}
            >
              <div className="flex justify-center itemc px-2">
                <img
                  src={urls?.small}
                  alt={alt_description}
                  loading="lazy"
                  style={{
                    weight: 300,
                    height: 300,
                  }}
                  className="h-80 w-80"
                />
              </div>
              <p className="w-36 text-sm mt-2">
                {alt_description?.length < 41
                  ? alt_description
                  : alt_description.substring(0, 30)}
              </p>
            </a>
          ))}
        </div>

        // <div className="flex flex-wrap justify-between items-center">
        //   {results?.map(({ image, link:{href,title} }, index) => (
        //     <div key={index} className="md:w-2/5 w-full">
        //       <a
        //         href={href}
        //         target="_blank"
        //         rel="noreferrer"
        //         className="sm:p-3 p-5"
        //         key={index}
        //       >
        //         <img src={image.?src} alt={title} loading="lazy" />
        //         <p className="w-36 break-words text-sm mt-2"></p>
        //         {title}
        //       </a>
        //  <div className="flex gap-4">
        //   <a href={srouce?.href} target="_blank" ref="noreferrer"></a>
        //   {srouce?.href}
        //  </div>
        //     </div>
        //   ))}
        // </div>
      );

    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ link, id, srouce, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={link?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg  dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <div className="flex gap-4 ">
                  <a href={srouce?.href} target="_blank" rel="noreferrer"></a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );

    case "/vidoes":
      return null;

    // (
    //   <div className="flex flex-wrap">
    //     {results.map((video, index) => {
    //       <div key={index} className="p-2">
    //         {video?.additional_links?.[0].href && (
    //           <ReactPlayer
    //             url={video.additional_links?.[0].href}
    //             controls
    //             width="355px"
    //             height="200px"
    //           />
    //         )}
    //       </div>;
    //     })}
    //   </div>
    // );

    default:
      return "ERROR";
  }
}

export default Results;
