# Code Katas

> Practice isn't the thing you do once you're good. It's the thing you do that makes you good.

-- Malcolm Gladwell, Outliers: The Story of Success

---

> The purpose of today's training is to defeat yesterday's understanding.

-- Miyamoto Musashi, A Book of Five Rings

---

> Believe you can and you're halfway there.

-- Theodore Roosevelt

## Description

Each Week's challenges are organized in folders named for the date of the meetup.

Before working on the challenges, run the prepare script by executing `npm run prepare`. This script will prompt you to choose a week, a challenge, and enter your name. It will then create a test file named `${name}.test.{ts,js}` in the challenge folder with the `RUN_TESTS` constant set to `true`.

## Running tests

`npm test` -- runs all tests

`npm test 2023-03-08/` - runs all tests for the specified week

`npm test 2023-03-08/ends-with` - runs all tests for a specific challenge

`npm test 2023-03-08/ends-with/johndoe` - runs tests for a specific challenge and user
