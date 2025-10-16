# LoanShot
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)  
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/cflower6/LoanShot/pulls)  
[![Node.js CI](https://github.com/cflower6/LoanShot/actions/workflows/nodejs.yml/badge.svg)](https://github.com/cflower6/LoanShot/actions)

---

## 🏦 What is LoanShot?

LoanShot is a decentralized finance (DeFi) project combining **Solidity smart contracts** and a **JavaScript/TypeScript** frontend or backend tooling. Its goal is to implement lending, borrowing, or loan operations on-chain, providing scripts and tests in JavaScript to interact with the contracts.

---

## 📋 Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Repository Structure](#repository-structure)  
- [Prerequisites](#prerequisites)  
- [Setup](#setup)  
- [Compilation & Deployment](#compilation--deployment)  
- [Interaction & Scripts](#interaction--scripts)  
- [Testing](#testing)  
- [Usage Examples](#usage-examples)  
- [Roadmap & TODOs](#roadmap--todos)  
- [Contributing](#contributing)  
- [License](#license)

---

## ✨ Features

- Solidity contracts for loans, collateralization, interest logic  
- JavaScript / TypeScript scripts for deployment, management, and testing  
- Support for simulation or dry-run modes  
- Interaction via Ethers.js or Hardhat scripts  
- Security considerations (reentrancy guards, safe math, access control)

---

## 🧰 Technologies

- **Solidity** — smart contracts  
- **Hardhat** or **Truffle** — testing, deployment, local chain  
- **Ethers.js** (or Web3.js) — script-level interaction  
- **Chai / Mocha** — for unit & integration testing  
- **Node.js / npm** — for scripts and tooling

---

## 📁 Repository Structure

```text
LoanShot/
├── contracts/                # Solidity smart contracts
│   └── Loan.sol              # (example)
├── scripts/                  # Deployment / management scripts
│   └── deploy.js
├── test/                     # JavaScript/TypeScript test files
│   └── loan.test.js
├── hardhat.config.js         # (or truffle-config.js)
├── package.json
```
## 🛠 Prerequisites

Node.js (>= 16 recommended)

npm or yarn

Hardhat (or your choice of dev framework)

Local or remote Ethereum node (e.g. Hardhat network, Ganache, Alchemy, Infura)

Optional: a funded wallet/private key for deploying to testnet/mainnet

## ⚙️ Setup

Clone repo:

git clone https://github.com/cflower6/LoanShot.git
cd LoanShot


Install dependencies:

npm install
# or
yarn install


Configure environment variables (see next section).

## 🧩 Configuration

Create a .env file in your root directory with contents like:

# RPC provider for deployment / interaction
RPC_URL=https://goerli.infura.io/v3/YOUR_KEY
PRIVATE_KEY=0xYOUR_PRIVATE_KEY

# Deployment / contract parameters
LOAN_TOKEN_ADDRESS=0x...
COLLATERAL_TOKEN_ADDRESS=0x...
INTEREST_RATE=5   # e.g. 5% APR
MAX_LTV=75         # in percent

# Others
NETWORK=goerli


Security Warning: Never commit .env or private keys in version control.

## 🏗 Compilation & Deployment
Compile

If using Hardhat (example):

npx hardhat compile

Deploy to local network (Hardhat):
npx hardhat node
# In another terminal:
npx hardhat run scripts/deploy.js --network localhost

Deploy to testnet / mainnet:
npx hardhat run scripts/deploy.js --network goerli


Adjust commands if you're using Truffle or a different setup.

## 🔧 Interaction & Scripts

You can interact with deployed contracts via scripts. Example:

npx hardhat run scripts/borrow.js --network goerli


Or in Node/JS:

const { ethers } = require("hardhat");

async function main() {
  const loan = await ethers.getContractAt("Loan", deployedAddress);
  await loan.borrow(amount, { gasLimit: 300_000 });
}


Modify based on your script names and logic.

## 🧪 Testing

Run tests with:

npm test
# or
npx hardhat test


Ensure your tests cover edge cases — reentrancy, interest accrual, liquidation logic, etc.

## 📌 Usage Examples

Borrow:

npx hardhat run scripts/borrow.js --network goerli


Repay:

npx hardhat run scripts/repay.js --network goerli


Liquidate (if part of logic):

npx hardhat run scripts/liquidate.js --network goerli

## 📆 Roadmap & TODOs

 Complete core contract logic (loan issuance, interest, collateral)

 Add admin / access roles (ownable, pausable)

 Add security tests (reentrancy, overflow)

 Add integration tests across multiple contracts

 Add frontend or UI for users

 Add event logging & monitoring

## 🤝 Contributing

We welcome contributions! Steps:

Fork the repo

Create a feature branch

Add your changes + tests

Push and open a PR

Avoid including secrets or private data in your commits.

---
