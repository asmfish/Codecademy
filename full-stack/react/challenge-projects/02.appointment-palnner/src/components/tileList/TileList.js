/**
 * Requirements - stateless
 * 1. render a list of Tilte components using array of objects of contacts
 * 2. Iterate the array of objects passed as prop
 * 3. This component is to be generalized to be shared by borth ContactsPage and AppointmentsPage to list items
 */
import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({data}) => {
  return (
    <div>
      {
        data.map(({name, ...rest}, idx) =>{
          return <Tile name={name} description={rest} key={idx}/>
        })
      }
    </div>
  );
};
