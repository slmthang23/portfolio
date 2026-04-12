// import TopNavBar from './components/TopNavBar';
import Info from "./components/Info";
import Education from "./components/Education";
// import Experiences from './components/Experiences';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

function App() {
  return (
    <main className="w-dvw flex flex-col m-0 p-0 center bg-bg1 text-text1">
      <div className="w-full sm:w-[640px] sm:border-1 sm:border-border1">
        <Info />
        <Education />
        <Certificates />
        {/* 
        <Experiences /> */}
        <Projects />
        <Skills />
      </div>
    </main>
  );
}

export default App;
