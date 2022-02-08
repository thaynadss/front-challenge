import { Header } from '../Header';
import { SearchInput } from '../SearchInput';
import { WineBoxCart } from '../WineBoxCart';

export type HeaderProps = {
  searchClick: boolean;
  cartClick: boolean;
  handleSearchClick: (close: boolean) => void;
  handleCartClick: (close: boolean) => void;
}
export const CartHeaderSearch = ({ searchClick, cartClick, handleCartClick, handleSearchClick }: HeaderProps) => {
  return (
    <>
      <Header searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} />
      <WineBoxCart cartClick={cartClick} handleCartClick={handleCartClick} />
      <SearchInput search={searchClick} handleSearchClick={handleSearchClick} />
    </>
  )
};