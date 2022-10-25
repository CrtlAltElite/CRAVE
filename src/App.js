
import './App.css';
import Error from './components/Error';
import Button from './components/Button';
import CategoryBar from './components/CategoryBar';
import AdminMenu from './components/AdminMenu';
import NavBar from './components/NavBar';
import Item from './components/Item';
import ItemBrowser from './components/ItemBrowser';
import LoginForm from './forms/LoginForm';
import CatForm from './forms/CatForm';
import ItemForm from './forms/ItemForm';
import Shop from './views/Shop';
import Login from './views/Login';
import AdminCategory from './views/AdminCategory';
import AdminItem from './views/AdminItem';
import CheckOutSuccess from './views/CheckOutSuccess';
import CartPage from './views/CartPage';
function App() {

  return (
    <div>

      <NavBar>
       {/* <CatForm category={{id:5, name:"Healing"}}/>
        <ItemForm item={{
        "id":19,
        "name":"Bergamot",
        "desc":"Do you know how to pronounce Bergamot? Because I don't",
        "price":34.55,
        "img":"https://post.healthline.com/wp-content/uploads/2018/11/Bergamot_Oil-732x549-thumbnail.jpg",
        "category_id":4,
        "category_name":'Energy'
        }}/> */}
        <CartPage/>
      </NavBar>
    </div>
  );
}

export default App;
