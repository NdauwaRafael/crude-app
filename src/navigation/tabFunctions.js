/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 6:09 PM
 **/

import {Navigation} from 'react-native-navigation';

export const switchToTab = (componentId, index) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      currentTabIndex: index,
    },
  });
  Navigation.popToRoot(componentId);
};

export const goToHomeTab = (componentId) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      currentTabIndex: 0,
    },
  });
  Navigation.popToRoot(componentId);
};
