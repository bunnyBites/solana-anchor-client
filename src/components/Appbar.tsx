import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import solanaLogo from "../assets/solanaLogo.png";

export const Appbar: React.FC = () => (
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src={solanaLogo} alt="solanaLogo" className="h8" width={200} />
      </a>
      <WalletMultiButton />
    </div>
  </nav>
);
