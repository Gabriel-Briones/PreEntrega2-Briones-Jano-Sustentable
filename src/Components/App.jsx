
import './App.css';
//Components
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';


export const App = () => {
  return (
    <>
      <Navbar nombre={"Jano Sustentable"} />
      <ItemListContainer greeting={"Próximamente veras nuestros productos"} />
    </>

  )
}