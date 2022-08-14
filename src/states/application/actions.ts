import { createAction } from '@reduxjs/toolkit'

export enum ApplicationModal {
  SETTINGS,
}

export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')
export const addPopup = createAction<{
  key?: string
  removeAfterMs?: number | null
  content: string
}>('application/addPopup')
export const removePopup = createAction<{ key: string }>('application/removePopup')
