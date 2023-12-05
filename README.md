# Database Schema

## Member_table
| Column     | Type      |
|------------|-----------|
| MemberID   | INT       |
| Username   | VARCHAR   |
| Email      | VARCHAR   |
| Password   | VARCHAR   |
| DateJoined | DATETIME  |

## Product_table
| Column      | Type        |
|-------------|-------------|
| ProductID   | INT         |
| ProductName | VARCHAR     |
| Description | TEXT        |
| Price       | DECIMAL     |
| Stock       | INT         |
| Category    | VARCHAR     |
| ImageURL    | VARCHAR     |

## Cart_table
| Column     | Type     |
|------------|----------|
| CartID     | INT      |
| MemberID   | INT      |
| ProductID  | INT      |
| Quantity   | INT      |
| DateAdded  | DATETIME |

## Relationships
- `Member_table` -> `Cart_table`: One-to-Many (MemberID)
- `Product_table` -> `Cart_table`: One-to-Many (ProductID)
