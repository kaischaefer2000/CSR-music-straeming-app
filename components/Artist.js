import React from 'react'

function Artist({name,  images}) {
    console.log(name)
  return (
    <div className="h-70 w-50 bg-gray-900 hover:bg-gray-800 p-4 rounded my-4">
      <img
        className="h-44 w-44 shadow-2xl rounded-full"
        src={images[0].url}
        alt="Artists cover"
      />
      <div className="mt-4">{name}</div>
      <div className="text-gray-400">Künstler*in</div>
    </div>
  );
}

export default Artist