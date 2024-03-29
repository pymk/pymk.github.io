---
title: "dbt Tutorial"
date: "2022-12-31"
taxonomies:
  categories: [code]
  tags: [code, dbt]
---

We were thinking about using [dbt](https://www.getdbt.com/product/what-is-dbt/) at work to help with our data pipeline, so I thought this winter break would be a good time to learn the basics.

They offer two products: dbt Cloud and dbt Core. As the name suggests, dbt Cloud is their subscription service and dbt Core is free CLI tool.

I really like what they offer with this tool. Setting up models and creating tables with documentation and tests is really simple. Just gotta get used to writing SQL or Python commands instead of beautiful `dplyr` with pipes.

---

They have lots of nice guides, docs, and tutorials for learning. The one I started with is their `jaffle_shop` [dbt Core tutorial](https://docs.getdbt.com/docs/get-started/getting-started-dbt-core).

One of the prerequisites is to set up BigQuery to access the data, but for learning purposes, I just wanted to run things locally. Could not find a guide or the dataset on their official channels, but I found the original CSV files for the tables in their [repo history](https://github.com/dbt-labs/jaffle_shop/tree/f72efd299dea41b17d84e02d49d364631cca2709). It was probably from their earlier version of the tutorial.

Anyway, I created this guide to use a local Postgres dataset for the `jaffle_shop` tutorial.

**Notes:**

- Copy the [data/](https://github.com/dbt-labs/jaffle_shop/tree/f72efd299dea41b17d84e02d49d364631cca2709) directory and its content to the project directory.
- Ensure you are in the project directory (i.e. `/dbt-tutorial/jaffle_shop/`) for running the Postgres and `dbt` commands below.

---

First, install [Postgres](https://www.postgresql.org/download/) (I'm using [Postgres app](https://postgresapp.com) for macOS).

In terminal, we can login to Postgres as sudo with:

```sh
psql -U postgres
```

And use the command `\l` to list of current databases available.

Next, we create a user and database for `jaffle_shop`. In my example, the user is `dbt_test` (password: `dbt_test`) and the database is called `jaffle_shop`.

```sql
CREATE USER dbt_test WITH PASSWORD 'adb_test';
CREATE DATABASE jaffle_shop WITH OWNER 'dbt_test';
```

Using `\l`, we can see the new database is created. Now we can exist sudo with `\q`.

Now we can update the `~/.dbt/profiles.yml` config file with:

```yaml
type: postgres
threads: 4
host: localhost
port: 5432
user: dbt_test
pass: dbt_test
dbname: jaffle_shop
schema: public
```

Next, we login to `jaffle_shop` database as the new user (`dbt_test`) we just created:

```sql
psql -U dbt_test jaffle_shop
```

We can use `\dt` command to list all available tables (should be none right now) in this database.

The following commands create our tables (schema is based on the CSV files in the `data/` folder).

```sql
CREATE TABLE customers
 (id INTEGER, first_name TEXT, last_name TEXT, email TEXT);

CREATE TABLE orders
 (id INTEGER, user_id INTEGER, order_date DATE, status TEXT);

CREATE TABLE payments
 (id INTEGER, order_id INTEGER, payment_method TEXT, amount BigInt);
```

Now we can run `\dt` again to see a list of newly created tables.

To copy the contents of the CSV files into these tables, we use these commands:

```sql
\COPY customers(id,first_name,last_name,email)
FROM './data/raw_customers.csv'
WITH DELIMITER ','
CSV HEADER;

\COPY orders(id,user_id,order_date,status)
FROM './data/raw_orders.csv'
WITH DELIMITER ','
CSV HEADER;

\COPY payments(id,order_id,payment_method,amount)
FROM './data/raw_payments.csv'
WITH DELIMITER ','
CSV HEADER;
```

And a quick sanity check to ensure we have the data:

```sql
SELECT * FROM customers ORDER BY id ASC LIMIT 10;
SELECT * FROM orders ORDER BY id ASC LIMIT 10;
SELECT * FROM payments ORDER BY id ASC LIMIT 10;
```

And that's it. We can quit at anytime with `\q` and continue with the tutorial.

The example models created for this tutorial are also in [here](https://github.com/pymk/dbt-tutorial/tree/master/jaffle_shop) for reference.
