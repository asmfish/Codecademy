/**
 * Requirements - stateless
 * 1. Recive 2 props name and description
 * 2. Render p element with name prop, with className=tile-title
 * 3. Iterate over the values in the description object passed via prop and render
 * p element for each value and give className=tile
 * 4. Just like TileList, Tile is also generalized to work with data from any object(contacts or appointments).
 */
import React from "react";

export const Tile = ({name, description}, key) => {
  return (
    <div className="tile-container" key={key}>
      <p className="tile-title">{name}</p>
      {
        Object.entries(description).map(([key,val], idx) => (
          <p className="tile" key={idx}>{`${key} : ${val}`}</p>
        ))
      }
      <hr/>
    </div>
  );
};
