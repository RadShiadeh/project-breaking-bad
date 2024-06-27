package ir.chemical.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import ir.chemical.backend.model.Items;

@Repository
public class ItemsRepository {
    private final JdbcClient jdbcClient;

    public int count() {
        return jdbcClient.sql("select count(*) from items").query(Integer.class).single();
    }

    public void saveAll(List<Items> items) {
        items.stream().forEach(this::create);
    }

    public ItemsRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Items> getAll() {
        return jdbcClient.sql("select * from items").query(Items.class).list();
    }

    public Optional<Items> findById(long id) {
        return jdbcClient.sql("SELECT * from items where id = :id").param("id", id).query(Items.class).optional();
    }

    public void create(Items item) {
        var updated = jdbcClient.sql("INSERT INTO ITEMS(id, name, description, type, imageURL) Values(?,?,?,?,?)")
                .params(List.of(item.getId(), item.getName(), item.getDescription(), item.getType(),
                        item.getImageURL()))
                .update();

        Assert.state(updated == 1, "failed to insert item: " + item.getName());
    }

    public void deleteById(long id) {
        var updated = jdbcClient.sql("DELETE FROM ITEMS WHERE id = :id").param("id", id).update();

        Assert.state(updated == 1, "delete failed, item id: " + id);
    }

    public void updateByID(long id, Items item) {
        var updated = jdbcClient.sql("UPDATE ITEMS set name = ?, description = ?, type = ?, imageURL = ? WHERE id = ?")
                .params(List.of(item.getName(), item.getDescription(), item.getType(), item.getImageURL(), id))
                .update();

        Assert.state(updated == 1, "failed to update item id: " + item.getId());
    }

    public Optional<Items> findByName(String name) {
        return jdbcClient.sql("SELECT * from items where name = :name").param("name", name).query(Items.class)
                .optional();
    }

    public List<Items> findByType(String type) {
        return jdbcClient.sql("SELECT * FROM ITEMS WHERE TYPE = :type").param("type", type).query(Items.class).list();
    }
}
