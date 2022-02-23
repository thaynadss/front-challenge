import { HamburgerMenu } from '../HamburgerMenu';
import { Header } from '../Header';
import { SearchInput } from '../SearchInput';
import { WineBoxCart } from '../WineBoxCart';

export type HeaderProps = {
  isSearchClick: boolean;
  isCartClick: boolean;
  isHamburgerClick: boolean;
  handleIsSearchClick: (close: boolean) => void;
  handleIsCartClick: (close: boolean) => void;
  handleIsHamburgerClick: (close: boolean) => void;
}
export const CartHeaderSearch = ({ isSearchClick, isCartClick, isHamburgerClick, handleIsHamburgerClick, handleIsCartClick, handleIsSearchClick }: HeaderProps) => {
  return (
    <>
      <Header isSearchClick={isSearchClick} isCartClick={isCartClick} isHamburgerClick={isHamburgerClick} handleIsSearchClick={handleIsSearchClick} handleIsCartClick={handleIsCartClick} handleIsHamburgerClick={handleIsHamburgerClick} />
      <WineBoxCart isCartClick={isCartClick} handleIsCartClick={handleIsCartClick} />
      <SearchInput isSearchClick={isSearchClick} handleIsSearchClick={handleIsSearchClick} />
      <HamburgerMenu isHamburgerClick={isHamburgerClick} handleIsHamburgerClick={handleIsHamburgerClick} />
    </>
  )
};