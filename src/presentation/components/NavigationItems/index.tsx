import { navigationOptions } from './navigationOptions';
import { NavigationContainer, HeaderItem, HamburguerMenuItem } from './styles';

type NavigationItemsProps = {
  isHeader?: boolean;
  isHamburgerMenu?: boolean;
};

export const NavigationItems = ({ isHeader, isHamburgerMenu }: NavigationItemsProps) => {
  return (
    <>
      {navigationOptions.map((item, index) => (
        <>
          {isHeader &&
            <NavigationContainer>
              <HeaderItem href={item.path} style={{ textDecoration: 'none' }}>
                {item.title}
              </HeaderItem>
            </NavigationContainer>}

          {isHamburgerMenu &&
            <HamburguerMenuItem href={item.path} style={{ textDecoration: 'none', textTransform: 'uppercase' }}>
              {item.title}
            </HamburguerMenuItem>
          }
        </>
      ))}
    </>
  )
};