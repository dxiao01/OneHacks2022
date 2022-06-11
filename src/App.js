import Video from './Video'
import Navbar from './Navbar'
import Info from './Info'
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white bg-green-400">
          <Navbar/>
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Helping Hand</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-20">
Second Wind is an ecosystem of various software meant to prevent accidental falls, notably in the case of the elderly. We hope you enjoy using our tool!</p>
        <Video/>
        </main>
        <Info/>
        </div>
  );
}

export default App;
