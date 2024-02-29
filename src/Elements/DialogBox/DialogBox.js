// DialogDefault.jsx

import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const DialogDefault = ({ dialogTitle, children, isOpen, handleOpen, handleClose, handleConfirm, contentClass, buttonRequired }) => {
  return (
    <>
      <Dialog open={isOpen} handler={handleClose} className="max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <span>{dialogTitle}</span>
            {/* <CloseIcon className="cursor-pointer" onClick={handleClose} /> */}
          </div>
        </DialogHeader>
        <DialogBody className={`flex-2 ${contentClass}`}>{children}</DialogBody>
        {buttonRequired && (
          <DialogFooter>
            <Button class="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded-xl mr-3" onClick={handleClose}>
              <span>Reset</span>
            </Button>
            <Button class="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded" onClick={handleConfirm}>
              <span>Apply</span>
            </Button>
          </DialogFooter>
        )}
      </Dialog>
    </>
  );
};

export default DialogDefault;
