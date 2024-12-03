import {Header, HeaderText} from '../../../components/header';
import {theme} from '../../../styles/theme';
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
      <Header imageSource={require('../../../../assets/images/nav.png')} />
      <HeaderText />
    </>
  ),
  tabBarActiveBackgroundColor: theme.colors.green.dark,
  tabBarInactiveBackgroundColor: theme.colors.green.dark,
};
