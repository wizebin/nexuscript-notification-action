import { wrapAction } from 'nexusdk';
import notifier from 'node-notifier';

const boundNotify = notifier.notify.bind(notifier);

wrapAction((properties) => {
  const { title, message, timeout } = properties;

  return new Promise((resolve, reject) => {
    const result = boundNotify({
      title,
      message: message ? message : ' ',
      timeout: timeout ? timeout : undefined,
      withFallback: true,
    }, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
});
