import React, { useState } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';
import Weapons from './Weapons';

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
  }
]

function DragDrop() {

  const [board, setBoard] = useState([])
  const [weaponBoard, setWeaponBoard] = useState([])

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  const [{ isOver: isOverWeaponBoard }, dropWeaponBoard] = useDrop(() => (
    {
      accept: "sword",
      drop: (item) => addWeaponToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  const addImageToBoard = (id) => {
    const filteredPictures = PictureList.filter((picture) => id == picture.id)
    setBoard((board) => [...board, filteredPictures[0]])
  }

  const addWeaponToBoard = (id) => {
    const myWeapons = PictureList.filter((picture) => id == picture.id)
    setWeaponBoard((board) => [...board, myWeapons[0]])
  }

  const myPictures = PictureList.map(picture => {
    return <Picture key={ picture.id } id={ picture.id } url={ picture.url }/>
  })

  const myBoard = board.map((picture) => {
    return <Picture url={picture.url} id={picture.id} />
  })

  const myWeapons = PictureList.map(picture => {
    return <Weapons key={ picture.id } id={ picture.id } url={ picture.url }/>
  })

  const myWeaponBoard = weaponBoard.map((weapon) => {
    return <Weapons key={ weapon.id } id={ weapon.id } url={ weapon.url } />
  })

  return (
    <>
      <div className='Pictures'> { myPictures } </div>
      <div className='Board' ref={dropBoard}> { myBoard } </div>
      <div className='Board' ref={dropWeaponBoard}> { myWeaponBoard } </div>
      <div className='Pictures'> { myWeapons }</div>
    </>
  )
}

export default DragDrop