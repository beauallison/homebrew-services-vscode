export function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface command {
  restart: string;
  start: string;
  stop: string;
  [key: string]: string;
}

const toStatus: command = {
  restart: 'Restarting',
  start: 'Starting',
  stop: 'Stopping',
};

export { toStatus };
