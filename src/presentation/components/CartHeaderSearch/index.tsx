import { HamburgerMenu } from '../HamburgerMenu';
import { Header } from '../Header';
import { SearchInput } from '../SearchInput';
import { WineBoxCart } from '../WineBoxCart';

export type HeaderProps = {
  searchClick: boolean;
  cartClick: boolean;
  hamburgerClick: boolean;
  handleSearchClick: (close: boolean) => void;
  handleCartClick: (close: boolean) => void;
  handleHamburgerClick: (close: boolean) => void;
}
export const CartHeaderSearch = ({ searchClick, cartClick, hamburgerClick, handleHamburgerClick, handleCartClick, handleSearchClick }: HeaderProps) => {
  return (
    <>
      <Header searchClick={searchClick} cartClick={cartClick} hamburgerClick={hamburgerClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} handleHamburgerClick={handleHamburgerClick} />
      <WineBoxCart cartClick={cartClick} handleCartClick={handleCartClick} />
      <SearchInput search={searchClick} handleSearchClick={handleSearchClick} />
      <HamburgerMenu hamburgerClick={hamburgerClick} handleHamburgerClick={handleHamburgerClick} />
    </>
  )
};