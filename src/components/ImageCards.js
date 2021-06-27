import React from "react";

function ImageCards({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-2xl my-2 mx-auto">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          photo by {image.user}
        </div>
        <ul>
          <li>
            <b>Views: </b>
            {image.views}
          </li>
          <li>
            <b>Downloads: </b>
            {image.downloads}
          </li>
          <li>
            <b>Likes: </b>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="mx-6 my-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCards;
