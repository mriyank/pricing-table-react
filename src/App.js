import "./App.css";
// import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div class="row">
        <div class="column">
          <ul class="price">
            <li class="header">
              Features <br />
              <br />
            </li>

            <li>Centralized Teams</li>
            <li>Version History</li>
            <li>Plugin Administrator</li>
            <li>Facebook & Instagram Ads</li>
            <li>Design System Analytics</li>
            <li>Unlimited cloud storage</li>
          </ul>
        </div>

        <div class="column">
          <ul class="price">
            <li class="header">
              Starter
              <br />
              <span class="dollar">0</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="column">
          <ul class="price">
            <li class="header">
              Professional
              <br />
              <span class="dollar">25</span>
            </li>

            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="column">
          <ul class="price">
            <li class="header">
              Organization
              <br />
              <span class="dollar">50</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
