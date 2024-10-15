import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <main className="main">
    <div className="login-card">
      <h1 className="title">
        Authorization
      </h1>
      <form action="" className='login-form'>
        <input type="email" placeholder='Email'   />
        <input type="password" placeholder='Password'   />
        <button>
          Sign in
        </button>
      </form>
      <div className="signup">
        <p>
          Don't have an account ? <a href="#"> Sign up</a>
        </p>
      </div>
    </div>
   </main>
  );
}

export default App;
