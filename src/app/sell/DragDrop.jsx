import { SquareCheck, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AnimatePresence, motion } from "framer-motion"

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (file) => {
    setFile(file);
    setShowMessage(true);
  };


  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);


  return (
    <div className="h-full relative">
      <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
        <div className=" border-secondary-two py-5 md:py-0 h-full text-[#5a849f] border-[3px] bg-secondary border-dashed cursor-pointer flex flex-col items-center justify-center rounded-lg">
          <Upload size={58} />
          <p className='font-semibold pb-2'>Add Images</p>
          <p className=''>Drag & Drop files here</p>
        </div>
      </FileUploader>
      <AnimatePresence>
        {showMessage &&
          <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{y: 200, opacity: 0}} className=" absolute w-full flex justify-center py-2 rounded-md bg-secondary-two items-center gap-2 top-[-50px] shadow-lg shadow-primary text-green-400"><SquareCheck /> Image Uploaded
          </motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default DragDrop;