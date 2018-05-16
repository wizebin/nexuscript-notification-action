import { wrapAction } from 'nexusdk';
import notifier from 'node-notifier';

const boundNotify = notifier.notify.bind(notifier);

wrapAction((properties) => {
  const { title, message, timeout } = properties;

  const result = boundNotify({
    title,
    message: message ? message : ' ',
    timeout: timeout ? timeout : undefined,
  });

  return !!result;
});

