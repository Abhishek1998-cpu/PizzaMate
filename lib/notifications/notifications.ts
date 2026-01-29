import * as SecureStore from 'expo-secure-store';

type NotificationPermissionStatus =
  | 'undetermined'
  | 'denied'
  | 'granted'
  | 'blocked'
  | 'limited'
  | 'unavailable'
  | 'unknown';

type NotificationsModule = {
  getPermissionsAsync: () => Promise<{ status: NotificationPermissionStatus }>;
  requestPermissionsAsync: () => Promise<{ status: NotificationPermissionStatus }>;
  setNotificationChannelAsync?: (
    channelId: string,
    channel: { name: string; importance: number; vibrationPattern?: number[]; lightColor?: string }
  ) => Promise<void>;
  AndroidImportance?: { MAX?: number; HIGH?: number; DEFAULT?: number };
  scheduleNotificationAsync: (req: {
    content: { title: string; body?: string };
    trigger: null | { seconds: number };
  }) => Promise<string>;
};

let notificationsModule: NotificationsModule | null | undefined = undefined;
function getNotifications(): NotificationsModule | null {
  if (notificationsModule !== undefined) return notificationsModule;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require('expo-notifications') as NotificationsModule;
    notificationsModule = mod;
    return mod;
  } catch {
    notificationsModule = null;
    return null;
  }
}

const KEY = 'notifications_enabled';

export async function getStoredNotificationsEnabled(): Promise<boolean> {
  try {
    const v = await SecureStore.getItemAsync(KEY);
    return v === 'true';
  } catch {
    return false;
  }
}

export async function setStoredNotificationsEnabled(enabled: boolean) {
  try {
    await SecureStore.setItemAsync(KEY, enabled ? 'true' : 'false');
  } catch {
    // ignore
  }
}

export async function getNotificationPermissionStatus(): Promise<NotificationPermissionStatus> {
  const Notifications = getNotifications();
  if (!Notifications) return 'unavailable';
  try {
    const res = await Notifications.getPermissionsAsync();
    return res?.status ?? 'unknown';
  } catch {
    return 'unknown';
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  const Notifications = getNotifications();
  if (!Notifications) return false;

  try {
    const existing = await Notifications.getPermissionsAsync();
    const status =
      existing?.status === 'granted'
        ? existing.status
        : (await Notifications.requestPermissionsAsync())?.status;

    const granted = status === 'granted';

    if (granted) {
      // Android requires a channel for proper importance.
      try {
        const importance =
          Notifications.AndroidImportance?.HIGH ??
          Notifications.AndroidImportance?.DEFAULT ??
          3;
        await Notifications.setNotificationChannelAsync?.('timer', {
          name: 'Timer',
          importance,
          vibrationPattern: [0, 250, 150, 250],
          lightColor: '#ec1313',
        });
      } catch {
        // ignore
      }
    }

    await setStoredNotificationsEnabled(granted);
    return granted;
  } catch {
    await setStoredNotificationsEnabled(false);
    return false;
  }
}

export async function maybeNotifyTimerComplete(params: { title: string; body?: string }) {
  const Notifications = getNotifications();
  if (!Notifications) return;

  const enabled = await getStoredNotificationsEnabled();
  if (!enabled) return;

  try {
    await Notifications.scheduleNotificationAsync({
      content: { title: params.title, body: params.body },
      // trigger immediately
      trigger: null,
    });
  } catch {
    // ignore
  }
}

