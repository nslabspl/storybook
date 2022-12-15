import { messages } from "./code/config/messages";
import { appInit } from "./code/config/prod-config";

window.onload(alert(messages.at[0]));
appInit();