import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './component/WarningSign'
import MyBadge from './component/MyBadge';
import SingleBook from './component/SingleBook';
import books from './data/books.json'
import BookList from './component/BookList';
import Search from './component/Search';

function App() {
  return (
    <div className="App">
      <Search/>
     <WarningSign title="exercise 1"/>
     <MyBadge color='success'/>

     <SingleBook img = {books[0].img} title ={books[0].title}/>
     <BookList books={books}/>
    </div>
  );
}

export default App;
