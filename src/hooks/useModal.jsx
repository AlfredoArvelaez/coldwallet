import { useContext } from 'react'
import { ModalContext } from '@/context/Modal'

export function useModal () {
  const { isOpen, setIsOpen } = useContext(ModalContext)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const handlers = {
    open,
    close
  }

  return { isOpen, handlers }
}
