import React from 'react'

const Modal_For_Language = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>Modal_For_Language</div>
  )
}

export default Modal_For_Language