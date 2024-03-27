"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitBtn({ text }: { text?: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      <Button aria-disabled={pending}>{text || "Submit"}</Button>
    </>
  );
}
