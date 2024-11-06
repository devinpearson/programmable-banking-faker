import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

export const companies = [
  'ENGEN',
  'SASOL',
  'TOTAL',
  'SHELL',
  'BP',
  'ISTORE',
  'POSTNET',
  'ESKORT',
  'NANDOS',
  'BOOST JUICE',
  'BODY FUEL EXPRESS',
  'GAS XPRESS',
  'BWH',
  'MCD',
  'PNP',
  'PNP EXP',
  'BILTON AT ZA',
  'CLICKS',
  'LEROY MERLIN',
  'WEST PACK',
  'TASKO SWEETS',
  'PETZONE',
  'MINTRAMS',
  'DISCHEM',
  'PIZZA PERFECT',
  'CHECKERS',
  'ANDICCIO 24',
  'DECATHLON',
  'PETZONE',
  'WIMPY',
  'SPAR',
  'SUPERSPAR',
  'MRPRICEH',
  'TURN N TENDER',
  'PIZA E VINO',
  'WOOLWORTHS',
  'UBER EATS',
  'UBER SA HELP.UBER.COM',
  'DOPPIO ZERO',
  'KFC',
  'TOYS R US',
  'JJ Cale',
  'GAME',
];

export const areas = [
  'WESTDENE',
  'ALLENS NEK',
  'FLORIDA',
  'BOSKRUIN',
  'SUNDOWNER',
  'CLEARWATER',
  'BRYANSTON',
  'ROODEPOORT',
  'LITTLE FALLS',
  'WILGERHEUWEL',
  'WATERKLOOF',
  'WATERKLOOF RIDGE',
  'RADIOKOP',
  'EAGLES LANDING',
  'STRUBENSVALLEY',
  'RED VALLEY',
  'BRACKENFELL',
  'KUILSRIVER',
  'SUNNINGHILL',
  'RUIMSIG',
  'SUNNINGDALE',
  'NEWLANDS',
  'BLACKHEATH',
  'SANDTON',
  'RANDBURG',
];

export namespace Investec {
  export function company() {
    const company = faker.helpers.arrayElement(companies);
    return company;
  }

  export function area() {
    const area = faker.helpers.arrayElement(areas);
    return area;
  }

  export function description() {
    const description = company() + ' ' + area() + ' ZA';
    return description;
  }

  export function type() {
    const type = faker.helpers.arrayElement(['DEBIT', 'CREDIT']);
    return type;
  }

  export function transactionType() {
    const transactionType = faker.helpers.arrayElement([
      'CardPurchases',
      'OnlineBankingPayments',
      'FasterPay',
      'DebitOrders',
      'FeesAndInterest',
    ]);
    return transactionType;
  }

  export function bank() {
    const bank = faker.helpers.arrayElement([
      { name: 'FIRST NATIONAL BANK', code: '250655' },
      { name: 'ABSA', code: '632005' },
      { name: 'NEDBANK', code: '198765' },
      { name: 'CAPITEC', code: '470010' },
      { name: 'STANDARD BANK', code: '051001' },
    ]);
    return bank;
  }

  export function transaction(accountId: string) {
    const transaction = {
      accountId,
      type: type(),
      transactionType: transactionType(),
      status: 'POSTED',
      description: description(),
      cardNumber: '402167xxxxxx9999',
      postingDate: dayjs().format('YYYY-MM-DD'),
      valueDate: dayjs().format('YYYY-MM-DD'),
      actionDate: dayjs().add(30, 'day').format('YYYY-MM-DD'),
      transactionDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      amount: faker.finance.amount({ min: 5, max: 1000 }),
      runningBalance: 0,
      postedOrder: 0,
    };
    return transaction;
  }

  export function account() {
    const randomNumber = faker.number.int(99);
    const account = {
      accountId: '46757781299101896000000' + randomNumber,
      accountNumber: '100124200' + randomNumber,
      accountName: faker.person.fullName(),
      referenceName: faker.person.fullName(),
      productName: 'Private Bank Account',
    };
    return account;
  }

  export function beneficiary() {
    const bankName = bank();
    const beneficiary = {
      beneficiaryId: 'MTAxOTA2OTI5Nz' + faker.number.int(99) + 'MjM=',
      accountNumber: '10012420003', // + faker.datatype.number(99),
      code: bankName.code,
      bank: bankName.name,
      beneficiaryName: faker.person.fullName(),
      lastPaymentAmount: faker.finance.amount({ min: 5, max: 1000 }),
      lastPaymentDate: dayjs().format('YYYY-MM-DD'),
      cellNo: null,
      emailAddress: null,
      name: faker.person.fullName(),
      referenceAccountNumber: '100124200' + faker.number.int(99),
      referenceName: faker.person.fullName(),
      categoryId: '10189603223001',
      profileId: '10189603223',
    };
    return beneficiary;
  }
}
