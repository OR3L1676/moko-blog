import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { CardProp } from "./Card";
import Form from "./Form";
import { Button } from "./ui/button";

interface Props {
  mode: "edit" | "create";
  blog?: CardProp;
}

const Modal = ({ mode, blog }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {mode === "edit" && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger onClick={openModal}>
            <FaEdit />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Mode</DialogTitle>
              <DialogDescription>
                <Form blog={blog!} mode="edit" closeModal={closeModal} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}

      {mode === "create" && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild onClick={openModal}>
            <Button className="bg-blue-400 hover:bg-blue-300">
              Add Blog <FaPlusCircle />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Mode</DialogTitle>
              <DialogDescription>
                <Form mode="create" closeModal={closeModal} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Modal;
