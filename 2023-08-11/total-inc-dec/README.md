See https://www.codewars.com/kata/55b195a69a6cc409ba000053

## Description

Let's define `increasing` numbers as the numbers whose digits, read from left to right, are never less than the previous ones: 234559 is an example of increasing number.

Conversely, `decreasing` numbers have all the digits read from left to right so that no digits is bigger than the previous one: 97732 is an example of decreasing number.

You do not need to be the next Gauss to figure that all numbers with 1 or 2 digits are either increasing or decreasing: 00, 01, 02, ..., 98, 99 are all belonging to one of this categories (if not both, like 22 or 55): 101 is indeed the first number which does NOT fall into either of the categories. Same goes for all the numbers up to 109, while 110 is again a decreasing number.

Now your task is rather easy to declare (a bit less to perform): you have to build a function to return the total occurrences of all the increasing or decreasing numbers _below_ 10 raised to the xth power (x will always be >= 0).

To give you a starting point, there are a grand total of increasing and decreasing numbers as shown in the table:

| Total | Below |
| --- | --- |
| 1 | 1 |
| 10 | 10 |
| 100 | 100 |
| 475 | 1000 |
| 1675 | 10000 |
| 4954 | 100000 |
| 12952 | 1000000 |

This means that your function will have to behave like this:

```python
total_inc_dec(0)==1
total_inc_dec(1)==10
total_inc_dec(2)==100
total_inc_dec(3)==475
total_inc_dec(4)==1675
total_inc_dec(5)==4954
total_inc_dec(6)==12952
```

```javascript
totalIncDec(0)==1
totalIncDec(1)==10
totalIncDec(2)==100
totalIncDec(3)==475
totalIncDec(4)==1675
totalIncDec(5)==4954
totalIncDec(6)==12952
```

```ruby
total_inc_dec(0)==1
total_inc_dec(1)==10
total_inc_dec(2)==100
total_inc_dec(3)==475
total_inc_dec(4)==1675
total_inc_dec(5)==4954
total_inc_dec(6)==12952
```

```haskell
totalIncDec 0 `shouldBe` 1
totalIncDec 1 `shouldBe` 10
totalIncDec 2 `shouldBe` 100
totalIncDec 3 `shouldBe` 475
totalIncDec 4 `shouldBe` 1675
totalIncDec 5 `shouldBe` 4954
totalIncDec 6 `shouldBe` 12952
```

```clojure
total-inc-dec 0 => 1
total-inc-dec 1 => 10
total-inc-dec 2 => 100
total-inc-dec 3 => 475
total-inc-dec 4 => 1675
total-inc-dec 5 => 4954
total-inc-dec 6 => 12952
```

```csharp
TotalIncDec(0) == 1
TotalIncDec(1) == 10
TotalIncDec(2) == 100
TotalIncDec(3) == 475
TotalIncDec(4) == 1675
TotalIncDec(5) == 4954
TotalIncDec(6) == 12952
```

```coffeescript
totalIncDec(0)==1
totalIncDec(1)==10
totalIncDec(2)==100
totalIncDec(3)==475
totalIncDec(4)==1675
totalIncDec(5)==4954
totalIncDec(6)==12952
```

```java
totalIncDec(0)==1
totalIncDec(1)==10
totalIncDec(2)==100
totalIncDec(3)==475
totalIncDec(4)==1675
totalIncDec(5)==4954
totalIncDec(6)==12952
```

```scala
totalIncDec(0) should be (1)
totalIncDec(1) should be (10)
totalIncDec(2) should be (100)
totalIncDec(3) should be (475)
totalIncDec(4) should be (1675)
totalIncDec(5) should be (4954)
totalIncDec(6) should be (12952)
```

```racket
(equal? (total-inc-dec 0) 1)
(equal? (total-inc-dec 1) 10)
(equal? (total-inc-dec 2) 100)
(equal? (total-inc-dec 3) 475)
(equal? (total-inc-dec 4) 1675)
(equal? (total-inc-dec 5) 4954)
(equal? (total-inc-dec 6) 12952)
```

```cobol
      TOTAL-INC-DEC 0 -> 1
      TOTAL-INC-DEC 1 -> 10
      TOTAL-INC-DEC 2 -> 100
      TOTAL-INC-DEC 3 -> 475
      TOTAL-INC-DEC 4 -> 1675
      TOTAL-INC-DEC 5 -> 4954
      TOTAL-INC-DEC 6 -> 12952
```

**Tips:** efficiency and trying to figure out how it works are essential: with a brute force approach, some tests with larger numbers may take more than the total computing power currently on Earth to be finished in the short allotted time.

To make it even clearer, the increasing or decreasing numbers between in the range 101-200 are: \[110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 126, 127, 128, 129, 133, 134, 135, 136, 137, 138, 139, 144, 145, 146, 147, 148, 149, 155, 156, 157, 158, 159, 166, 167, 168, 169, 177, 178, 179, 188, 189, 199, 200\], that is 47 of them. In the following range, 201-300, there are 41 of them and so on, getting rarer and rarer.

**Trivia:** just for the sake of your own curiosity, a number which is neither decreasing of increasing is called a `bouncy` number, like, say, 3848 or 37294; also, usually 0 is not considered being increasing, decreasing or bouncy, but it will be for the purpose of this kata