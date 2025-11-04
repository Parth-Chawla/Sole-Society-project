package com.solesociety.app;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.solesociety.app.model.Sneaker;
import com.solesociety.app.repo.SneakerRepository;

import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.options;
import static spark.Spark.port;
import static spark.Spark.post;

public class App {
    public static void main(String[] args) {
        port(Integer.parseInt(System.getenv().getOrDefault("PORT", "8080")));

        // CORS for local static frontend
        before((req, res) -> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type");
        });
        options("*", (req, res) -> "");

        Gson gson = new Gson();
        SneakerRepository repo = new SneakerRepository();

        get("/api/sneakers", (req, res) -> {
            String brand = req.queryParams("brand");
            if (brand == null || brand.isBlank()) {
                res.status(400);
                Map<String, String> err = new HashMap<>();
                err.put("error", "brand query param required");
                return gson.toJson(err);
            }
            try {
                List<Sneaker> items = repo.listByBrandName(brand);
                res.type("application/json");
                return gson.toJson(items);
            } catch (Exception e) {
                res.status(500);
                Map<String, String> err = new HashMap<>();
                err.put("error", e.getMessage());
                return gson.toJson(err);
            }
        });

        // Get all sneakers
        get("/api/sneakers/all", (req, res) -> {
            try {
                List<Sneaker> items = repo.listAll();
                res.type("application/json");
                return gson.toJson(items);
            } catch (Exception e) {
                res.status(500);
                Map<String, String> err = new HashMap<>();
                err.put("error", e.getMessage());
                return gson.toJson(err);
            }
        });

        // Search sneakers by name
        get("/api/sneakers/search", (req, res) -> {
            String query = req.queryParams("q");
            if (query == null || query.isBlank()) {
                res.status(400);
                Map<String, String> err = new HashMap<>();
                err.put("error", "query param 'q' required");
                return gson.toJson(err);
            }
            try {
                List<Sneaker> items = repo.searchByName(query);
                res.type("application/json");
                return gson.toJson(items);
            } catch (Exception e) {
                res.status(500);
                Map<String, String> err = new HashMap<>();
                err.put("error", e.getMessage());
                return gson.toJson(err);
            }
        });

        // Get sneaker by ID
        get("/api/sneakers/:id", (req, res) -> {
            try {
                int id = Integer.parseInt(req.params("id"));
                Sneaker sneaker = repo.findById(id);
                if (sneaker == null) {
                    res.status(404);
                    Map<String, String> err = new HashMap<>();
                    err.put("error", "Sneaker not found");
                    return gson.toJson(err);
                }
                res.type("application/json");
                return gson.toJson(sneaker);
            } catch (NumberFormatException e) {
                res.status(400);
                Map<String, String> err = new HashMap<>();
                err.put("error", "Invalid sneaker ID");
                return gson.toJson(err);
            } catch (Exception e) {
                res.status(500);
                Map<String, String> err = new HashMap<>();
                err.put("error", e.getMessage());
                return gson.toJson(err);
            }
        });

        // Create purchase - decrements stock for given items
        post("/api/purchase", (req, res) -> {
            try {
                // incoming JSON: { items: [{ id: number, quantity: number }, ...] }
                Map body = gson.fromJson(req.body(), Map.class);
                Object itemsObj = body == null ? null : body.get("items");
                if (!(itemsObj instanceof List)) {
                    res.status(400);
                    Map<String, String> err = new HashMap<>();
                    err.put("error", "Invalid payload: items array required");
                    return gson.toJson(err);
                }

                List items = (List) itemsObj;
                for (Object o : items) {
                    if (!(o instanceof Map)) continue;
                    Map item = (Map) o;
                    int id = ((Number) item.getOrDefault("id", 0)).intValue();
                    int qty = Math.max(1, ((Number) item.getOrDefault("quantity", 1)).intValue());
                    boolean ok = repo.decrementStock(id, qty);
                    if (!ok) {
                        res.status(409);
                        Map<String, String> err = new HashMap<>();
                        err.put("error", "Insufficient stock for sneaker id " + id);
                        return gson.toJson(err);
                    }
                }
                res.type("application/json");
                Map<String, Object> out = new HashMap<>();
                out.put("status", "success");
                return gson.toJson(out);
            } catch (Exception e) {
                res.status(500);
                Map<String, String> err = new HashMap<>();
                err.put("error", e.getMessage());
                return gson.toJson(err);
            }
        });

        get("/health", (req, res) -> "ok");
    }
}


