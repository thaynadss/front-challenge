import { navigationOptions } from './navigationOptions';
import { NavigationContainer, HeaderItem, HamburgerMenuItem } from './styles';

type NavigationItemsProps = {
  isHeader?: boolean;
  isHamburgerMenu?: boolean;
};

export const NavigationItems = ({ isHeader, isHamburgerMenu }: NavigationItemsProps) => {
  return (
    <>
      {isHeader &&
        <NavigationContainer>
          {navigationOptions.map((item, index) => (
            <HeaderItem key={index} href={item.path}>
              {item.title}
            </HeaderItem>
          ))}
        </NavigationContainer>
      }
      {isHamburgerMenu &&
        navigationOptions.map((item, index) => (
          <HamburgerMenuItem key={index} href={item.path} style={{ textTransform: 'uppercase' }}>
            {item.title}
          </HamburgerMenuItem>
        ))}
    </>
  )
};