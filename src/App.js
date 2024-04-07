import { createContext, useState } from 'react';
import Header from './components/header';
import InfoToDo from './components/infoToDo';
import SetToDo from './components/setToDo';
import './App.css';

export const AllTask = createContext(null)
export const GetInfoAllTask = createContext(null)

function App() {
  const [allInfo, setAllInfo] = useState(JSON.parse(localStorage.getItem('allTask')) || [])
  const [getInfoAllTask, setGetInfoAllTask] = useState(allInfo[0] || { task: '', taskBody: '' })
  // console.log(allInfo);
  return (
    <div className="App row justify-content-center bg-primary align-items-center" style={{ height: "100dvh", width: "100dvw" }}>
      <AllTask.Provider value={{ allInfo, setAllInfo }}>
        <GetInfoAllTask.Provider value={{ getInfoAllTask, setGetInfoAllTask }}>
          <Header />
          <InfoToDo />
          <SetToDo />
        </GetInfoAllTask.Provider>
      </AllTask.Provider>
    </div >
  );
}

export default App;