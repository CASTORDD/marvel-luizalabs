import React from 'react'

import { ControllerFastBackward } from '@styled-icons/entypo/ControllerFastBackward'
import { ControllerJumpToStart } from '@styled-icons/entypo/ControllerJumpToStart'
import { ControllerNext } from '@styled-icons/entypo/ControllerNext'
import { ControllerFastForward } from '@styled-icons/entypo/ControllerFastForward'

import { PagerWrapper, Controls } from './styles'

const Pager = ({
  total,
  page,
  limit,
  btnPages,
  handlePage,
  handleChangeOffset,
  handleChangeLimit,
  handleFirst,
  handleNext,
  handlePrev,
  handleLast
}: any) => {
  return (
    <PagerWrapper>
      <span>{`${page * limit} de ${total}`}</span>
      <Controls>
        {page > 3 && (
          <button onClick={handleFirst}>
            <ControllerJumpToStart size={18} />
          </button>
        )}
        {page > 1 && (
          <button onClick={handlePrev}>
            <ControllerFastBackward size={18} />
          </button>
        )}

        {btnPages.map((btn: any, index: any) => {
          return (
            <button
              key={index}
              className={page === btn ? 'active' : ''}
              onClick={() => {
                handleChangeOffset(btn)
                handlePage(btn)
              }}
            >
              {btn}
            </button>
          )
        })}
        <button onClick={handleNext}>
          <ControllerFastForward size={18} />
        </button>
        <button onClick={handleLast}>
          <ControllerNext size={18} />
        </button>
        <select
          value={limit}
          onChange={(evt) => handleChangeLimit(evt.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </Controls>
    </PagerWrapper>
  )
}

export default Pager
