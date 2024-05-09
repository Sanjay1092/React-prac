import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";

export const Prac = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Button>dialog open</Button>
      <Dialog open={open}>
        <DialogContent asChild={open}>
          <h3>new dialog</h3>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Prac;
