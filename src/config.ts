import { config } from "dotenv";

config();

export class Config {
   public DATABASE_HOST: string;
   public DATABASE_USER: string;
   public DATABASE_PASSWORD: string;
   public DATABASE_NAME: string;
   public DATABASE_PORT: number;
   public JWT_SECRET: string;
   public NEXT_PUBLIC_ERC20_CONTRACT_ADDRESS: string;
   public PORT: number;

   public PUBLIC_ACCOUNT_CLASS_HASH: string;
   public WALLET_ADDRESS: string;
   public WALLET_PRIVATE_KEY: string;

   public REGISTRY_CONTRACT_ADDRESS: string;
   public ERC721_CONTRACT_ADDRESS: string;
   public MARKET_CONTRACT_ADDRESS: string;
   public ERC721_ITEM_CONTRACT_ADDRESS: string;
   public ERC20: string;

   constructor() {
      this.DATABASE_HOST = process.env.DATABASE_HOST || "" ;
      this.DATABASE_USER = process.env.DATABASE_USER || "";
      this.DATABASE_PASSWORD =
         process.env.DATABASE_PASSWORD || "";
      this.DATABASE_NAME = process.env.DATABASE_NAME || "";
      this.DATABASE_PORT = Number(process.env.DATABASE_PORT) || 19096;
      this.PORT = Number(process.env.PORT) || 5000;
      this.JWT_SECRET =
         process.env.JWT_SECRET || "";

      this.PUBLIC_ACCOUNT_CLASS_HASH =
         process.env.PUBLIC_ACCOUNT_CLASS_HASH ||
         "";

      this.WALLET_ADDRESS =
         process.env.WALLET_ADDRESS ||
         "";
      this.WALLET_PRIVATE_KEY =
         process.env.WALLET_PRIVATE_KEY ||
         "";

      this.REGISTRY_CONTRACT_ADDRESS =
         process.env.REGISTRY_CONTRACT_ADDRESS ||
         "";
      this.ERC721_CONTRACT_ADDRESS =
         process.env.ERC721_CONTRACT_ADDRESS ||
         "";
      this.MARKET_CONTRACT_ADDRESS =
         process.env.MARKET_CONTRACT_ADDRESS ||
         "";
      this.ERC721_ITEM_CONTRACT_ADDRESS =
         process.env.ERC721_ITEM_CONTRACT_ADDRESS || "";
      this.ERC20 =
         process.env.ERC20 ||
         "";
   }
}
