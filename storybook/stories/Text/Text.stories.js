import { action } from "@storybook/addon-actions";
import { color, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import Button from ".";
import CenterView from "../CenterView";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Test", () => <Text>{text("Button text", "Text test")}</Text>);
