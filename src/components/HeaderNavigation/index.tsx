import * as C from './styles';

export const HeaderNavigation = () => {
  return (
    <C.NavigationContainer>
      <C.NavigationItem href='/club' style={{ textDecoration: 'none' }}>Clube</C.NavigationItem>
      <C.NavigationItem href='/home' style={{ textDecoration: 'none' }}>Loja</C.NavigationItem>
      <C.NavigationItem href='/producers' style={{ textDecoration: 'none' }}>Produtores</C.NavigationItem>
      <C.NavigationItem href='/offers' style={{ textDecoration: 'none' }}>Ofertas</C.NavigationItem>
      <C.NavigationItem href='/events' style={{ textDecoration: 'none' }}>Eventos</C.NavigationItem>
    </C.NavigationContainer>
  )
}