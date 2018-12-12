    CREATE TABLE IF NOT EXISTS
      users (
        count SERIAL PRIMARY KEY,
        firstname VARCHAR(20) NOT NULL,
        surname VARCHAR(20) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        username VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL,
        userid UUID NOT NULL
      );

      CREATE TABLE IF NOT EXISTS
      orders (
        id SERIAL PRIMARY KEY,
        orderid UUID NOT NULL,
        foodid UUID NOT NULL,
        quantity VARCHAR(5) NOT NULL,
        status VARCHAR(20) NOT NULL,
        userid UUID NOT NULL
      );

      CREATE TABLE IF NOT EXISTS
      menu (
        id SERIAL,
        foodid UUID PRIMARY KEY NOT NULL,
        foodname VARCHAR(20) NOT NULL,
        foodprice INTEGER NOT NULL,
        fooddescription TEXT NOT NULL        
      );
