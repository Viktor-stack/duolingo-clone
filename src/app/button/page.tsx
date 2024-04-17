import React from 'react';
import {Button} from "@/components/ui/button";

const Page = () => {
  return (
    <div className="p-2 flex flex-col space-y-4 max-w-[200px]">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant="primaryOutline">Primary outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary outline</Button>
      <Button variant={"danger"}>Danger</Button>
      <Button variant="dangerOutline">Danger outline</Button>
      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super outline</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebarOutline</Button>
    </div>
  );
};

export default Page;