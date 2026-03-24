app/src/main/java/com/example/App.java
package com.example;

import java.sql.Connection;
import java.sql.DriverManager;

public class App {
    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://" + System.getenv("DB_HOST") + ":3306/" + System.getenv("DB_NAME");
            String user = System.getenv("DB_USER");
            String pass = System.getenv("DB_PASSWORD");

            Connection conn = DriverManager.getConnection(url, user, pass);
            System.out.println("✅ Connected to MySQL DB successfully!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
