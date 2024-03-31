export default function App(){ 
  return <div className="app">
    <Logo/>
    <Form />
    <PackingList />
    <Stats />
  </div>
}

function Logo(){
  return <h1>🏝️ far away 💼 </h1>
}

function Form(){
  return (
  <div className="add-form"> <h3> what do u need for ur trip 😍</h3> </div>);
}

function PackingList() {
  return <div className="list"> LIST </div>
}

function Stats () {
  return (
  <footer className="stats"> <em>you have X items on your list and you already packed X </em></footer>
  );
}

