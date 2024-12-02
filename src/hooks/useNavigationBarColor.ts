import {useEffect} from 'react';
import {Platform} from 'react-native';

import SystemNavigationBar from 'react-native-system-navigation-bar';

export const useNavigationBarColor = (color: string) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SystemNavigationBar.setNavigationColor(color);
    }

    return () => {
      if (Platform.OS === 'android') {
        SystemNavigationBar.setNavigationColor(color);
      }
    };
  }, [color]);
};
