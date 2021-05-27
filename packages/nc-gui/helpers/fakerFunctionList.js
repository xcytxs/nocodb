const functionList = [
  {
    name: 'zipCode',
    group: 'address',
    value: 'address.zipCode',
    type: 'string'
  },
  {
    name: 'city',
    group: 'address',
    value: 'address.city',
    type: 'string'
  },
  {
    name: 'cityPrefix',
    group: 'address',
    value: 'address.cityPrefix',
    type: 'string'
  },
  {
    name: 'citySuffix',
    group: 'address',
    value: 'address.citySuffix',
    type: 'string'
  },
  {
    name: 'streetName',
    group: 'address',
    value: 'address.streetName',
    type: 'string'
  },
  {
    name: 'streetAddress',
    group: 'address',
    value: 'address.streetAddress',
    type: 'string'
  },
  {
    name: 'streetSuffix',
    group: 'address',
    value: 'address.streetSuffix',
    type: 'string'
  },
  {
    name: 'streetPrefix',
    group: 'address',
    value: 'address.streetPrefix',
    type: 'string'
  },
  {
    name: 'secondaryAddress',
    group: 'address',
    value: 'address.secondaryAddress',
    type: 'string'
  },
  {
    name: 'county',
    group: 'address',
    value: 'address.county',
    type: 'string'
  },
  {
    name: 'country',
    group: 'address',
    value: 'address.country',
    type: 'string'
  },
  {
    name: 'countryCode',
    group: 'address',
    value: 'address.countryCode',
    type: 'string'
  },
  {
    name: 'state',
    group: 'address',
    value: 'address.state',
    type: 'string'
  },
  {
    name: 'stateAbbr',
    group: 'address',
    value: 'address.stateAbbr',
    type: 'string'
  },
  {
    name: 'latitude',
    group: 'address',
    value: 'address.latitude',
    type: 'number'
  },
  {
    name: 'longitude',
    group: 'address',
    value: 'address.longitude',
    type: 'number'
  },
  {
    name: 'color',
    group: 'commerce',
    value: 'commerce.color',
    type: 'string'
  },
  {
    name: 'department',
    group: 'commerce',
    value: 'commerce.department',
    type: 'string'
  },
  {
    name: 'productName',
    group: 'commerce',
    value: 'commerce.productName',
    type: 'string'
  },
  {
    name: 'price',
    group: 'commerce',
    value: 'commerce.price',
    type: 'number'
  },
  {
    name: 'productAdjective',
    group: 'commerce',
    value: 'commerce.productAdjective',
    type: 'string'
  },
  {
    name: 'productMaterial',
    group: 'commerce',
    value: 'commerce.productMaterial',
    type: 'string'
  },
  {
    name: 'product',
    group: 'commerce',
    value: 'commerce.product',
    type: 'string'
  },
  {
    name: 'suffixes',
    group: 'company',
    value: 'company.suffixes',
    type: 'string'
  },
  {
    name: 'companyName',
    group: 'company',
    value: 'company.companyName',
    type: 'string'
  },
  {
    name: 'companySuffix',
    group: 'company',
    value: 'company.companySuffix',
    type: 'string'
  },
  {
    name: 'catchPhrase',
    group: 'company',
    value: 'company.catchPhrase',
    type: 'string'
  },
  {
    name: 'bs',
    group: 'company',
    value: 'company.bs',
    type: 'string'
  },
  {
    name: 'catchPhraseAdjective',
    group: 'company',
    value: 'company.catchPhraseAdjective',
    type: 'string'
  },
  {
    name: 'catchPhraseDescriptor',
    group: 'company',
    value: 'company.catchPhraseDescriptor',
    type: 'string'
  },
  {
    name: 'catchPhraseNoun',
    group: 'company',
    value: 'company.catchPhraseNoun',
    type: 'string'
  },
  {
    name: 'bsAdjective',
    group: 'company',
    value: 'company.bsAdjective',
    type: 'string'
  },
  {
    name: 'bsBuzz',
    group: 'company',
    value: 'company.bsBuzz',
    type: 'string'
  },
  {
    name: 'bsNoun',
    group: 'company',
    value: 'company.bsNoun',
    type: 'string'
  },
  {
    name: 'column',
    group: 'database',
    value: 'database.column',
    type: 'string'
  },
  {
    name: 'type',
    group: 'database',
    value: 'database.type',
    type: 'string'
  },
  {
    name: 'collation',
    group: 'database',
    value: 'database.collation',
    type: 'string'
  },
  {
    name: 'engine',
    group: 'database',
    value: 'database.engine',
    type: 'string'
  },
  {
    name: 'past',
    group: 'date',
    value: 'date.past',
    type: 'date'
  },
  {
    name: 'future',
    group: 'date',
    value: 'date.future',
    type: 'date'
  },
  // {
  //   name: 'between',
  //   group: 'date',
  //   value: 'date.between',
  //   type: 'date'
  // },
  {
    name: 'recent',
    group: 'date',
    value: 'date.recent',
    type: 'date'
  },
  {
    name: 'soon',
    group: 'date',
    value: 'date.soon',
    type: 'date'
  },
  {
    name: 'month',
    group: 'date',
    value: 'date.month',
    type: 'string'
  },
  {
    name: 'weekday',
    group: 'date',
    value: 'date.weekday',
    type: 'string'
  },
  {
    name: 'account',
    group: 'finance',
    value: 'finance.account',
    type: 'string'
  },
  {
    name: 'accountName',
    group: 'finance',
    value: 'finance.accountName',
    type: 'string'
  },
  {
    name: 'mask',
    group: 'finance',
    value: 'finance.mask',
    type: 'string'
  },
  {
    name: 'amount',
    group: 'finance',
    value: 'finance.amount',
    type: 'number'
  },
  {
    name: 'transactionType',
    group: 'finance',
    value: 'finance.transactionType',
    type: 'string'
  },
  {
    name: 'currencyCode',
    group: 'finance',
    value: 'finance.currencyCode',
    type: 'string'
  },
  {
    name: 'currencyName',
    group: 'finance',
    value: 'finance.currencyName',
    type: 'string'
  },
  {
    name: 'currencySymbol',
    group: 'finance',
    value: 'finance.currencySymbol',
    type: 'string'
  },
  {
    name: 'bitcoinAddress',
    group: 'finance',
    value: 'finance.bitcoinAddress',
    type: 'string'
  },
  {
    name: 'ethereumAddress',
    group: 'finance',
    value: 'finance.ethereumAddress',
    type: 'string'
  },
  {
    name: 'iban',
    group: 'finance',
    value: 'finance.iban',
    type: 'string'
  },
  {
    name: 'bic',
    group: 'finance',
    value: 'finance.bic',
    type: 'string'
  },
  {
    name: 'abbreviation',
    group: 'hacker',
    value: 'hacker.abbreviation',
    type: 'string'
  },
  {
    name: 'adjective',
    group: 'hacker',
    value: 'hacker.adjective',
    type: 'string'
  },
  {
    name: 'noun',
    group: 'hacker',
    value: 'hacker.noun',
    type: 'string'
  },
  {
    name: 'verb',
    group: 'hacker',
    value: 'hacker.verb',
    type: 'string'
  },
  {
    name: 'ingverb',
    group: 'hacker',
    value: 'hacker.ingverb',
    type: 'string'
  },
  {
    name: 'phrase',
    group: 'hacker',
    value: 'hacker.phrase',
    type: 'string'
  },
  // {
  //   name: 'randomize',
  //   group: 'helpers',
  //   value: 'helpers.randomize',
  //   type: 'string'
  // },
  // {
  //   name: 'slugify',
  //   group: 'helpers',
  //   value: 'helpers.slugify',
  //   type: 'string'
  // },
  // {
  //   name: 'replaceSymbolWithNumber',
  //   group: 'helpers',
  //   value: 'helpers.replaceSymbolWithNumber',
  //   type: 'string'
  // },
  // {
  //   name: 'replaceSymbols',
  //   group: 'helpers',
  //   value: 'helpers.replaceSymbols',
  //   type: 'string'
  // },
  // {
  //   name: 'shuffle',
  //   group: 'helpers',
  //   value: 'helpers.shuffle',
  //   type: 'string'
  // },
  // {
  //   name: 'mustache',
  //   group: 'helpers',
  //   value: 'helpers.mustache',
  //   type: 'string'
  // },
  {
    name: 'createCard',
    group: 'helpers',
    value: 'helpers.createCard',
    type: 'string'
  },
  {
    name: 'contextualCard',
    group: 'helpers',
    value: 'helpers.contextualCard',
    type: 'string'
  },
  {
    name: 'userCard',
    group: 'helpers',
    value: 'helpers.userCard',
    type: 'string'
  },
  {
    name: 'createTransaction',
    group: 'helpers',
    value: 'helpers.createTransaction',
    type: 'string'
  },
  {
    name: 'image',
    group: 'image',
    value: 'image.image',
    type: 'string'
  },
  {
    name: 'avatar',
    group: 'image',
    value: 'image.avatar',
    type: 'string'
  },
  {
    name: 'imageUrl',
    group: 'image',
    value: 'image.imageUrl',
    type: 'string'
  },
  {
    name: 'abstract',
    group: 'image',
    value: 'image.abstract',
    type: 'string'
  },
  {
    name: 'animals',
    group: 'image',
    value: 'image.animals',
    type: 'string'
  },
  {
    name: 'business',
    group: 'image',
    value: 'image.business',
    type: 'string'
  },
  {
    name: 'cats',
    group: 'image',
    value: 'image.cats',
    type: 'string'
  },
  {
    name: 'city',
    group: 'image',
    value: 'image.city',
    type: 'string'
  },
  {
    name: 'food',
    group: 'image',
    value: 'image.food',
    type: 'string'
  },
  {
    name: 'nightlife',
    group: 'image',
    value: 'image.nightlife',
    type: 'string'
  },
  {
    name: 'fashion',
    group: 'image',
    value: 'image.fashion',
    type: 'string'
  },
  {
    name: 'people',
    group: 'image',
    value: 'image.people',
    type: 'string'
  },
  {
    name: 'nature',
    group: 'image',
    value: 'image.nature',
    type: 'string'
  },
  {
    name: 'sports',
    group: 'image',
    value: 'image.sports',
    type: 'string'
  },
  {
    name: 'technics',
    group: 'image',
    value: 'image.technics',
    type: 'string'
  },
  {
    name: 'transport',
    group: 'image',
    value: 'image.transport',
    type: 'string'
  },
  {
    name: 'dataUri',
    group: 'image',
    value: 'image.dataUri',
    type: 'string'
  },
  {
    name: 'avatar',
    group: 'internet',
    value: 'internet.avatar',
    type: 'string'
  },
  {
    name: 'email',
    group: 'internet',
    value: 'internet.email',
    type: 'string'
  },
  {
    name: 'exampleEmail',
    group: 'internet',
    value: 'internet.exampleEmail',
    type: 'string'
  },
  {
    name: 'userName',
    group: 'internet',
    value: 'internet.userName',
    type: 'string'
  },
  {
    name: 'protocol',
    group: 'internet',
    value: 'internet.protocol',
    type: 'string'
  },
  {
    name: 'url',
    group: 'internet',
    value: 'internet.url',
    type: 'string'
  },
  {
    name: 'domainName',
    group: 'internet',
    value: 'internet.domainName',
    type: 'string'
  },
  {
    name: 'domainSuffix',
    group: 'internet',
    value: 'internet.domainSuffix',
    type: 'string'
  },
  {
    name: 'domainWord',
    group: 'internet',
    value: 'internet.domainWord',
    type: 'string'
  },
  {
    name: 'ip',
    group: 'internet',
    value: 'internet.ip',
    type: 'string'
  },
  {
    name: 'ipv6',
    group: 'internet',
    value: 'internet.ipv6',
    type: 'string'
  },
  {
    name: 'userAgent',
    group: 'internet',
    value: 'internet.userAgent',
    type: 'string'
  },
  {
    name: 'color',
    group: 'internet',
    value: 'internet.color',
    type: 'string'
  },
  {
    name: 'mac',
    group: 'internet',
    value: 'internet.mac',
    type: 'string'
  },
  {
    name: 'password',
    group: 'internet',
    value: 'internet.password',
    type: 'string'
  },
  {
    name: 'word',
    group: 'lorem',
    value: 'lorem.word',
    type: 'string'
  },
  {
    name: 'words',
    group: 'lorem',
    value: 'lorem.words',
    type: 'string'
  },
  {
    name: 'sentence',
    group: 'lorem',
    value: 'lorem.sentence',
    type: 'string'
  },
  {
    name: 'slug',
    group: 'lorem',
    value: 'lorem.slug',
    type: 'string'
  },
  {
    name: 'sentences',
    group: 'lorem',
    value: 'lorem.sentences',
    type: 'string'
  },
  {
    name: 'paragraph',
    group: 'lorem',
    value: 'lorem.paragraph',
    type: 'string'
  },
  {
    name: 'paragraphs',
    group: 'lorem',
    value: 'lorem.paragraphs',
    type: 'string'
  },
  {
    name: 'text',
    group: 'lorem',
    value: 'lorem.text',
    type: 'string'
  },
  {
    name: 'lines',
    group: 'lorem',
    value: 'lorem.lines',
    type: 'string'
  },
  {
    name: 'firstName',
    group: 'name',
    value: 'name.firstName',
    type: 'string'
  },
  {
    name: 'lastName',
    group: 'name',
    value: 'name.lastName',
    type: 'string'
  },
  {
    name: 'findName',
    group: 'name',
    value: 'name.findName',
    type: 'string'
  },
  {
    name: 'jobTitle',
    group: 'name',
    value: 'name.jobTitle',
    type: 'string'
  },
  {
    name: 'prefix',
    group: 'name',
    value: 'name.prefix',
    type: 'string'
  },
  {
    name: 'suffix',
    group: 'name',
    value: 'name.suffix',
    type: 'string'
  },
  {
    name: 'title',
    group: 'name',
    value: 'name.title',
    type: 'string'
  },
  {
    name: 'jobDescriptor',
    group: 'name',
    value: 'name.jobDescriptor',
    type: 'string'
  },
  {
    name: 'jobArea',
    group: 'name',
    value: 'name.jobArea',
    type: 'string'
  },
  {
    name: 'jobType',
    group: 'name',
    value: 'name.jobType',
    type: 'string'
  },
  {
    name: 'phoneNumber',
    group: 'phone',
    value: 'phone.phoneNumber',
    type: 'string'
  },
  {
    name: 'phoneNumberFormat',
    group: 'phone',
    value: 'phone.phoneNumberFormat',
    type: 'string'
  },
  {
    name: 'phoneFormats',
    group: 'phone',
    value: 'phone.phoneFormats',
    type: 'string'
  },
  {
    name: 'number',
    group: 'random',
    value: 'random.number',
    type: 'number'
  },
  {
    name: 'float',
    group: 'random',
    value: 'random.float',
    type: 'number'
  },
  // Todo : use it for collection or enum
  // {
  //   name: 'arrayElement',
  //   group: 'random',
  //   value: 'random.arrayElement',
  //   type: 'collection'
  // },
  // {
  //   name: 'objectElement',
  //   group: 'random',
  //   value: 'random.objectElement',
  //   type: 'string'
  // },
  {
    name: 'uuid',
    group: 'random',
    value: 'random.uuid',
    type: 'string'
  },
  {
    name: 'boolean',
    group: 'random',
    value: 'random.boolean',
    type: 'boolean'
  },
  {
    name: 'word',
    group: 'random',
    value: 'random.word',
    type: 'string'
  },
  {
    name: 'words',
    group: 'random',
    value: 'random.words',
    type: 'string'
  },
  {
    name: 'image',
    group: 'random',
    value: 'random.image',
    type: 'string'
  },
  {
    name: 'locale',
    group: 'random',
    value: 'random.locale',
    type: 'string'
  },
  {
    name: 'alphaNumeric',
    group: 'random',
    value: 'random.alphaNumeric',
    type: 'string'
  },
  {
    name: 'hexaDecimal',
    group: 'random',
    value: 'random.hexaDecimal',
    type: 'string'
  },
  {
    name: 'fileName',
    group: 'system',
    value: 'system.fileName',
    type: 'string'
  },
  {
    name: 'commonFileName',
    group: 'system',
    value: 'system.commonFileName',
    type: 'string'
  },
  {
    name: 'mimeType',
    group: 'system',
    value: 'system.mimeType',
    type: 'string'
  },
  {
    name: 'commonFileType',
    group: 'system',
    value: 'system.commonFileType',
    type: 'string'
  },
  {
    name: 'commonFileExt',
    group: 'system',
    value: 'system.commonFileExt',
    type: 'string'
  },
  {
    name: 'fileType',
    group: 'system',
    value: 'system.fileType',
    type: 'string'
  },
  {
    name: 'fileExt',
    group: 'system',
    value: 'system.fileExt',
    type: 'string'
  },
  {
    name: 'directoryPath',
    group: 'system',
    value: 'system.directoryPath',
    type: 'string'
  },
  {
    name: 'filePath',
    group: 'system',
    value: 'system.filePath',
    type: 'string'
  },
  {
    name: 'semver',
    group: 'system',
    value: 'system.semver',
    type: 'string'
  }
]
export default functionList;
/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */