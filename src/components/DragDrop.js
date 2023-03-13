import React, { useState } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';

const PictureList = [
  {
    id: 1,
    url: "https://www.kidsmathgamesonline.com/images/pictures/numbers600/number1.jpg"
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1OX6r_H8VLliuAsMYNYdfvN8ImFhUt8ntw&usqp=CAU"
  },
  {
    id: 3,
    url: "https://us.123rf.com/450wm/inkdrop/inkdrop1903/inkdrop190301379/119198987-gold-glitter-number-3-shiny-sparkling-golden-number-3d-rendering.jpg?ver=6"
  },
]

function DragDrop() {

  const [board, setBoard] = useState([])

  const [{isOver}, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addImageToBoard = (id) => {
    const myPictures = PictureList.filter((picture) => id === picture.id)
    setBoard((board) => [...board, myPictures[0]])
  }

  return (
    <>
      <div className='Pictures'> {PictureList.map(picture => {
        return <Picture key={ picture.id } id={ picture.id } url={ picture.url }/>
        })}
      </div>
      <div className='Board' ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />
        })}
      </div>
    </>
  )
}

export default DragDrop