package com.solesociety.app.repo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import com.solesociety.app.db.Database;
import com.solesociety.app.model.Sneaker;

public class SneakerRepository {
    private final DataSource dataSource;

    public SneakerRepository() {
        this.dataSource = Database.getDataSource();
    }

    public List<Sneaker> listByBrandName(String brandName) throws Exception {
        String sql = "SELECT s.id, s.brand_id, s.name, s.price, s.image_url, s.description " +
                     "FROM sneakers s JOIN brands b ON b.id = s.brand_id " +
                     "WHERE LOWER(b.name) = LOWER(?) ORDER BY s.id";
        try (Connection c = dataSource.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, brandName);
            try (ResultSet rs = ps.executeQuery()) {
                List<Sneaker> items = new ArrayList<>();
                while (rs.next()) {
                    Sneaker s = new Sneaker();
                    s.id = rs.getInt("id");
                    s.brandId = rs.getInt("brand_id");
                    s.name = rs.getString("name");
                    s.price = rs.getDouble("price");
                    s.imageUrl = rs.getString("image_url");
                    s.description = rs.getString("description");
                    items.add(s);
                }
                return items;
            }
        }
    }

    public List<Sneaker> listAll() throws Exception {
        String sql = "SELECT s.id, s.brand_id, s.name, s.price, s.image_url, s.description FROM sneakers s ORDER BY s.id";
        try (Connection c = dataSource.getConnection();
             PreparedStatement ps = c.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            List<Sneaker> items = new ArrayList<>();
            while (rs.next()) {
                Sneaker s = new Sneaker();
                s.id = rs.getInt("id");
                s.brandId = rs.getInt("brand_id");
                s.name = rs.getString("name");
                s.price = rs.getDouble("price");
                s.imageUrl = rs.getString("image_url");
                s.description = rs.getString("description");
                items.add(s);
            }
            return items;
        }
    }

    public List<Sneaker> searchByName(String query) throws Exception {
        String sql = "SELECT s.id, s.brand_id, s.name, s.price, s.image_url, s.description " +
                     "FROM sneakers s WHERE LOWER(s.name) LIKE LOWER(?) ORDER BY s.name";
        try (Connection c = dataSource.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, "%" + query + "%");
            try (ResultSet rs = ps.executeQuery()) {
                List<Sneaker> items = new ArrayList<>();
                while (rs.next()) {
                    Sneaker s = new Sneaker();
                    s.id = rs.getInt("id");
                    s.brandId = rs.getInt("brand_id");
                    s.name = rs.getString("name");
                    s.price = rs.getDouble("price");
                    s.imageUrl = rs.getString("image_url");
                    s.description = rs.getString("description");
                    items.add(s);
                }
                return items;
            }
        }
    }

    public Sneaker findById(int id) throws Exception {
        String sql = "SELECT s.id, s.brand_id, s.name, s.price, s.image_url, s.description FROM sneakers s WHERE s.id = ?";
        try (Connection c = dataSource.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Sneaker s = new Sneaker();
                    s.id = rs.getInt("id");
                    s.brandId = rs.getInt("brand_id");
                    s.name = rs.getString("name");
                    s.price = rs.getDouble("price");
                    s.imageUrl = rs.getString("image_url");
                    s.description = rs.getString("description");
                    return s;
                }
                return null;
            }
        }
    }

    /**
     * Backwards-compatible no-op for stock decrement so checkout works if DB doesn't have 'stock'.
     * If you later run the migration that adds 'stock', reintroduce the UPDATE and check logic here.
     */
    public boolean decrementStock(int sneakerId, int quantity) throws Exception {
        // no-op: accept purchase even without stock column
        return true;
    }
}



