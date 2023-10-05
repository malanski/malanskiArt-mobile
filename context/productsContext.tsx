import { createContext, ReactNode } from 'react';
interface IProductsProps {
  FlipFlopsId: string
  FlipFlopCategory: string
  FlipFlopDescription: string
  FlipFlopOptions: string[]
  FlipFlopPrice: number
}
interface IProductsContextProviderProps {
  children: ReactNode;
}
export const ProductsContext = createContext({} as IProductsProps)


export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const ApronsDescription =
    'Brim 100% algodão , Bolso frontal arredondado, faixa para amarração nas costas e alça com regulador em metal'
  const ApronsCategory = 'Aventais'
  const ApronsPrice = 89.9
  const ApronsOptions = ['Preto', 'Branco', 'Vermelho', 'Azul']
  const ApronsId = ApronsPrice * 4 + Math.random()

  const ButtonsDescription =
    'Broches de banho, acabamento em película brilhante de polietileno, fecho	de alfinete em alumínio, 4,5cm de diâmetro'
  const ButtonsCategory = 'Broche'
  const ButtonsPrice = 9.9
  const ButtonsOptions = ['4,5 centímetros']
  const ButtonsId = ButtonsPrice * 4 + Math.random()

  const FlipFlopDescription =
    'Em tamanhos do 23 ao 46. Borracha premium e varias cores de tiras'
  const FlipFlopCategory = 'Chinelo'
  const FlipFlopPrice = 79.9
  const FlipFlopOptions = ['Tradicional', 'Slim']
  const FlipFlopsId = FlipFlopPrice * 4 + Math.random()

  return (

    <ProductsContext.Provider value={{
      FlipFlopCategory,
      FlipFlopsId,
      FlipFlopDescription,
      FlipFlopOptions,
      FlipFlopPrice,

    }}>
      {children}
    </ProductsContext.Provider>
  )
}