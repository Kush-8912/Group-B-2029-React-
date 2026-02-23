import React, { useState } from "react";


function Pagination({pageNo , pageAhead , pageBehind}) {
     
  return (
    <div className="w-full flex h-12.5 bg-gray-500 justify-center p-4 items-center">
      <div onClick={pageBehind} className="m-5">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={pageAhead} className="m-5">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
