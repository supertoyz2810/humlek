"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CartConfirmDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-slate-800 bg-slate-50 border-slate-800"
          >
            Confirm payment
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cart informations</DialogTitle>
            <DialogDescription>
              Please check carefully before proceed to payment.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 justify-start text-slate-600">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-sm">Name</span>
              <span className="text-sm">abc</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-sm">Name</span>
              <span className="text-sm">abc</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-sm">Name</span>
              <span className="text-sm">abc</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-sm">Name</span>
              <span className="text-sm">abc</span>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
}