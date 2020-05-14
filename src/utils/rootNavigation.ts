import { createRef } from 'react';

export const navigationRef = createRef();
export const isMountedRef =  createRef();

export const navigation = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    return navigationRef.current;
  } else {
    console.log("the app hasn't mounted");
  }
}

export const navigate = (name: string, params ?: object) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    console.log("the app hasn't mounted");
  }
};
