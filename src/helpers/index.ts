export function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface status {
  restart: string;
  start: string;
  stop: string;
  [key: string]: string;
}

const statusConversion: status = {
  restart: 'Restarting',
  start: 'Starting',
  stop: 'Stopping',
};

export { statusConversion };
