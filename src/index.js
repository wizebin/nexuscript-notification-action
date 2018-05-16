import nexusdk from 'nexusdk';
import notifier from 'node-notifier';

function callWrap(messageType) {
  return function (message) {
    nexusdk.sendMessage({ type: messageType, data: message });
  }
}

const boundNotify = notifier.notify.bind(notifier);

nexusdk.on('start', (properties) => {
  const { title, message, timeout } = properties;
  const result = boundNotify({
    title,
    message: message ? message : ' ',
    timeout: timeout ? timeout : undefined,
  }, () => {
    process.exit(1);
  });
});

nexusdk.on('exit', () => {
  process.exit(1);
});

