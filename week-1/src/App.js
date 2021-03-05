import './App.css';

function App() {
  const styles = {
    border: '1px solid #eee', 
    padding: '20px',
    display: 'flex', 
    width: '100vw', 
    maxWidth: '400px', 
    margin: '30px auto', 
    flexDirection: 'column'
  };
  const my_name = "Yu Jin"

  return (
    <div className="App">
      <div style={ styles }>
        <h1 style={{ color: 'purple' }}>안녕하세요! 제 이름은 { my_name } 입니다!</h1>
        <hr style={{ width: '100%' }}/>
        <p style={{ textAlign: 'left' }}>이름을 입력해주세요.</p>
        <input type="text"/>
      </div>
    </div>
  );
}

export default App;
