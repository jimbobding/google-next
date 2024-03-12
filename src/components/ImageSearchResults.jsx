import Link from "next/link";
import React from "react";

function ImageSearchResults({ results }) {
  return (
    <div className="pb-24 mt-4 ">
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-lg transition-shadow duration-300 object-contain cursor-pointer w-full"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate test-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline truncate test-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSearchResults;
