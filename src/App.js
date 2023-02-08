import './App.css';
import Profile from './Profile/Profile';

function App() {
  const handleName=(x)=>alert(x);
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullname="adam kadhi" bio="poireazlzer" profession="etudiant" handleName={handleName} src="http://m.gettywallpapers.com/wp-content/uploads/2020/03/Cool-Wallpapers.jpg"/>
      </header>
    </div>
  );
}
export default App;
