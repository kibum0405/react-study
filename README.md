# Database Schema

## Tables

### Member_table

| Column     | Type         |
|------------|--------------|
| MemberID   | INT (PK)     |
| Username   | VARCHAR(50)  |
| Email      | VARCHAR(100) |
| Password   | VARCHAR(255) |
| DateJoined | DATETIME     |

### Product_table

| Column      | Type          |
|-------------|---------------|
| ProductID   | INT (PK)      |
| ProductName | VARCHAR(100)  |
| Description | TEXT          |
| Price       | DECIMAL(10,2) |
| Stock       | INT           |
| Category    | VARCHAR(50)   |
| ImageURL    | VARCHAR(255)  |

### Cart_table

| Column     | Type         |
|------------|--------------|
| CartID     | INT (PK)     |
| MemberID   | INT (FK)     |
| ProductID  | INT (FK)     |
| Quantity   | INT          |
| DateAdded  | DATETIME     |

## Relationships

- Member_table.MemberID --< Cart_table.MemberID
- Product_table.ProductID --< Cart_table.ProductID
