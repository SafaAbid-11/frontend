import './App.scss';
import {Routes ,Route} from "react-router-dom"
import Home from './components/Pages/Home/Home'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import Buy from './components/Pages/Home/buy/Buy';
import Rent from './components/Pages/Home/rent/Rent';
import Property from './components/Pages/Home/property/Property';


const client = new ApolloClient({
  uri :"http://localhost:1337/graphql",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/rent" element={<Rent/>} />
        <Route path="/property:propertyId" element={<Property/>} />
            

      </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
