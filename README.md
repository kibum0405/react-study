+----------------+      +----------------+      +----------------+
| Member_table   |      | Product_table  |      | Cart_table     |
+----------------+      +----------------+      +----------------+
| MemberID (PK)  |      | ProductID (PK) |      | CartID (PK)    |
| Username       |      | ProductName    |      | MemberID (FK)  |
| Email          |      | Description    |      | ProductID (FK) |
| ...            |      | Price          |      | Quantity       |
|                |      | Stock          |      | DateAdded      |
+----------------+      +----------------+      +----------------+
