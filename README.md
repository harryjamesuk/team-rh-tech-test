Team RH Engineer Technical Test
==================================

This is a simple command-line Node.js application written in TypeScript.

# Running the project
```shell
  yarn install
  yarn build
  yarn start
```

## Tests
```shell
  yarn test
```
Testing is achieved using the [Jest](https://jestjs.io/) framework. Currently, only the `utils` directory is tested
which handles data manipulation.

Generally, testing user input is usually more complicated, but a good starting point for this could be a library
I found which is [node-mock-stdin](https://www.npmjs.com/package/mock-stdin).

Additionally, integration tests could also be developed.

### Biggest challenges
One of the biggest challenges was to do with the descriptions of the data provided. The descriptions don't follow a
consistent syntax and so it was difficult to parse the data. I ended up using a few regex patterns that attempt to
parse the data in different ways until it finds a method that works.<br>
Some of the descriptions also include HTML tags which I decided to strip out as this could be a security vulnerability
if this endpoint was compromised and used on a frontend system.

### Final remarks
Thanks for the challenge - it was a fun one! :)
