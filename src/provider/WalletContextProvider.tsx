import { ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

export const WalletContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <ConnectionProvider endpoint="http://127.0.0.1:8899">
    <WalletProvider autoConnect wallets={[]}>
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);
