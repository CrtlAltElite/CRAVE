
import './App.css';
import Error from './components/Error';
import Button from './components/Button';
import CategoryBar from './components/CategoryBar';
import AdminMenu from './components/AdminMenu';

function App() {

  return (
    <div>
      <CategoryBar />
      <Error>ANYTHING INSIDE IS CALLED A CHILD</Error>
      <Button onClick={()=>console.log("clicked")}>I want this text</Button>
      <AdminMenu/>
    </div>
  );
}

export default App;
