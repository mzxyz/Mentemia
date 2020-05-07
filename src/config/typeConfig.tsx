// @flow
import _ from 'lodash';

const prefix = (name: string): string => {
  const formatted = name
    .split(' ')
    .map(i => _.lowerCase(i))
    .join('_');
  return `app/${formatted}`;
};

const apiActionTypes = (
  name: string
): {
  requested: string,
  completed: string,
  failed: string,
  cancelled: string
} => {
  const p = prefix(name);
  return {
    requested: `${p}/requested`,
    completed: `${p}/completed`,
    failed: `${p}/failed`,
    cancelled: `${p}/cancelled`
  };
};

const changedActionTypes = (name: string): { changed: string } => ({
  changed: `${prefix(name)}/changed`
});

const toggledActionTypes = (name: string): { toggled: string } => ({
  toggled: `${prefix(name)}/toggled`
});

const navigateActionTypes = (name: string): string =>
  `${prefix(name)}/navigate`;

export {
  apiActionTypes,
  changedActionTypes,
  toggledActionTypes,
  navigateActionTypes
};
