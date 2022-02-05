import { render, screen } from '@testing-library/react';
import { CartItem } from '.';

describe('<CartItem />', () => {
  it('should render cart item', () => {
    render(<CartItem id={1} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />)

    screen.getByAltText(/title1/i)
  })
})