import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo, ConnectWallet } from "components";
import styles from "./index.module.css";

const walletPublicKey = "";

export const HomeView: FC = ({ }) => {
  const { publicKey } = useWallet();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box flex justify-around">
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xs sm:text-xl">
                <li><img src="https://i.imgur.com/G9DcBaC.png" width="200" height="200" alt="image" /></li>
                <li>
                  <Link href="/">
                    <a>APEDAO SOLANA TOOLS</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome Apes! <SolanaLogo />
                </h1>
                <p className="mb-2">
                Ape Dao Society
                <br />
                First Tombstoned DAO based on continuing the vibes of community idealism that the Tombstoned high society has worked to build.
The First agenda the DAO worked towards was minting a y00t together, through this success the APE DAO discord was born and our numbers grew!
A total of 282 apes roam the Graveyard, Will you join? 
                <br />
                <em>Twitter:</em><a href="https://twitter.com/TombstonedApes">@TombstonedApes</a>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* <h1 className="mb-2 pb-8 text-5xl">Available tools :</h1> */}
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                    Burn NFT
                    </a>
                    <div>A UI to burn Solana NFTs and get SOL back</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/burnSPL">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                    Burn SPL token
                    </a>
                    <div>A UI to burn SPL tokens and get SOL back</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/closeaccount">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                    Close empty account
                    </a>
                    <div>A UI to close empty account of unused token and get SOL back</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/revoke">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                    Revoke authority
                    </a>
                    <div>A UI to view the tokens you have delegated rights to and revoke them </div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/spltoken">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                      SPL Token Creator
                    </a>
                    <div>A UI to create your own Solana token</div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/multisender">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                    Multi Sender
                    </a>
                    <div>A UI to send multiple tokens in 1 transaction (same token to different people/many tokens to one person)</div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/updateNFTmetadata">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                    Update NFT metadata
                    </a>
                    <div>A UI to update the metadata of your NFT</div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/upload">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                      Upload file
                    </a>
                    <div>A UI to upload file to Arweave</div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/suatmm">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                    Send NFT message
                    </a>
                    <div>A UI to send a message to the owner of the NFT or the .sol domain name you want</div>
                  </div>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};