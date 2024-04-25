import { Appbar } from "./components/Appbar";
import { WalletContextProvider } from "./provider/WalletContextProvider";

const App: React.FC = () => (
  <WalletContextProvider>
    <Appbar />

    {/* write your code here */}
  </WalletContextProvider>
);

export default App;
