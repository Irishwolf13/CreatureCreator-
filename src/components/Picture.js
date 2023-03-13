import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    locked: false,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const handleClick = () => {
    console.log('iran')
  }

  return(
    <img
      onClick={handleClick}
      ref={drag}
      src={url}
      width="150px"
      style={{border: isDragging ? "5px solid red" : "0px"}}
    />
  );
}

export default Picture