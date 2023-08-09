import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home.page"

function App() {
	fetch("http://localhost:3000/products")
		.then((res) => {
			return res.json()
		})
		.then(console.log)


    

	return (<>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </>)
}

export default App
