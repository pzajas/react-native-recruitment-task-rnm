import {Header} from '../../../components/header/Header';
import {HeaderText} from '../../../components/header/HeaderText';
import {theme} from '../../../theme/theme';
import {TabIcon} from '../components';
import {styles} from '../TabNavigationStack.styled';

export const screenOptions = ({route}: any) => ({
  tabBarStyle: styles.tabBar,
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarIcon: ({focused}: {focused: boolean}) => (
    <TabIcon name={route.name} focused={focused} />
  ),
});

export const tabScreenOptions = {
  header: () => (
    <>
      <Header />
      <HeaderText />
    </>
  ),
  tabBarActiveBackgroundColor: theme.colors.green.dark,
  tabBarInactiveBackgroundColor: theme.colors.green.dark,
};
