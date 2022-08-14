import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '..'
import { addPopup, ApplicationModal, PopupContent, removePopup, setOpenModal } from './actions'

export const useModalOpen = (modal: ApplicationModal): boolean => {
  const openModal = useSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export const useToggleModal = (modal: ApplicationModal): () => void => {
  const open = useModalOpen(modal)
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export const useOpenModal = (modal: ApplicationModal): () => void => {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal])
}

export const useCloseModals = (): () => void => {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(null)), [dispatch])
}

export const useToggleSettingsMenu = (): () => void => {
  return useToggleModal(ApplicationModal.SETTINGS)
}

// returns a const that allows adding a popup
export const useAddPopup = (): (content: PopupContent, key?: string) => void => {
  const dispatch = useDispatch()

  return useCallback(
    (content: PopupContent, key?: string) => {
      dispatch(addPopup({ content, key }))
    },
    [dispatch]
  )
}

export const useRemovePopup = (): (key: string) => void => {
  const dispatch = useDispatch()
  return useCallback(
    (key: string) => {
      dispatch(removePopup({ key }))
    },
    [dispatch]
  )
}

// get the list of active popups
export const useActivePopups = (): AppState['application']['popupList'] => {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter((item: any) => item.show), [list])
}

