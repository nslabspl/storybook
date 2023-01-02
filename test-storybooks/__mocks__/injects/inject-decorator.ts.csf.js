import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Button",
  excludeStories: ["text"],
  includeStories: /emoji.*/
};

export const text = () => (
  <Button onClick={action("clicked")}/>
);

export const emoji = () => (
  <Button onClick={action("clicked")}/>
);

export function emojiFn() {
  return (
    <Button onClick={action("clicked")}/>
  )
};
