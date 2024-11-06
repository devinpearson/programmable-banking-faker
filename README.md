**programmable-banking-faker**

A package for generating fake banking data for testing purposes.

## 📦 Install

```bash
npm install --save-dev programmable-banking-faker
```

## 🪄 Usage

```ts
// ESM
import { Investec } from 'programmable-banking-faker';

// CJS
const { Investec } = require('programmable-banking-faker');

// Generate a random transaction description
const description = Investec.description();

// Either 'credit' or 'debit'
const type = Investec.type();

// Returns one of the other banks
const bank = new Investec.bank();

// Generate a random transaction
const transaction = Investec.transaction();

// Generate a random account
const account = Investec.account();

// Generate a random beneficiary
const beneficiary = Investec.beneficiary();
```

## 🔑 License

[MIT](https://github.com/devinpearson/programmable-banking-faker/blob/next/LICENSE)
