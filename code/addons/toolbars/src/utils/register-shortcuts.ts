import type { API } from '@storybook/manager-api';
import { ADDON_ID } from '../constants';
import type { ToolbarShortcutConfig } from '../types';

interface Shortcuts {
  dev: ToolbarShortcutConfig & { action: () => void };
  previous: ToolbarShortcutConfig & { action: () => void };
  reset: ToolbarShortcutConfig & { action: () => void };
}

export const registerShortcuts = async (api: API, id: string, shortcuts: Shortcuts) => {
  if (shortcuts && shortcuts.dev) {
    await api.setAddonShortcut(ADDON_ID, {
      label: shortcuts.dev.label,
      defaultShortcut: shortcuts.dev.keys,
      actionName: `${id}:dev`,
      action: shortcuts.dev.action,
    });
  }

  if (shortcuts && shortcuts.previous) {
    await api.setAddonShortcut(ADDON_ID, {
      label: shortcuts.previous.label,
      defaultShortcut: shortcuts.previous.keys,
      actionName: `${id}:previous`,
      action: shortcuts.previous.action,
    });
  }

  if (shortcuts && shortcuts.reset) {
    await api.setAddonShortcut(ADDON_ID, {
      label: shortcuts.reset.label,
      defaultShortcut: shortcuts.reset.keys,
      actionName: `${id}:reset`,
      action: shortcuts.reset.action,
    });
  }
};
