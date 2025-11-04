package com.solesociety.app.db;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public final class Database {
    private static final Logger LOG = Logger.getLogger(Database.class.getName());
    private static HikariDataSource dataSource;

    public static DataSource getDataSource() {
        if (dataSource == null) {
            HikariConfig cfg = new HikariConfig();

            // safer environment / system property handling
            String url = System.getProperty("datasource.url");
            if (url == null || url.isBlank()) {
                String env = System.getenv("DATASOURCE_URL");
                url = (env == null || env.isBlank()) ? "jdbc:postgresql://localhost:5432/solesociety" : env;
            }

            String user = System.getProperty("datasource.user");
            if (user == null || user.isBlank()) {
                String env = System.getenv("DATASOURCE_USER");
                user = (env == null || env.isBlank()) ? "postgres" : env;
            }

            String pass = System.getProperty("datasource.password");
            if (pass == null || pass.isBlank()) {
                String env = System.getenv("DATASOURCE_PASSWORD");
                pass = (env == null || env.isBlank()) ? "postgres" : env;
            }

            cfg.setJdbcUrl(url);
            cfg.setUsername(user);
            cfg.setPassword(pass);
            cfg.setMaximumPoolSize(5);

            try {
                dataSource = new HikariDataSource(cfg);
            } catch (Exception ex) {
                LOG.log(Level.SEVERE, "Failed to initialize datasource", ex);
                // throw runtime so startup fails fast and error is visible in logs
                throw new RuntimeException("Database initialization failed", ex);
            }
        }
        return dataSource;
    }
}


