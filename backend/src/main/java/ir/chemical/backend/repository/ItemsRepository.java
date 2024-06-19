package ir.chemical.backend.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import ir.chemical.backend.model.Items;
import jakarta.annotation.PostConstruct;

@Repository
public class ItemsRepository {
    private List<Items> items = new ArrayList<>(); // in mem database for testing

    public ItemsRepository(List<Items> items) {
        this.items = items;
    }

    public List<Items> getAll() {
        return items;
    }

    public Optional<Items> findById(long id) {
        return items.stream().filter(item -> item.getId() == id).findFirst();
    }

    public Optional<Items> findByName(String name) {
        return items.stream().filter(item -> (item.getName() == null ? name == null : item.getName().equals(name))).findFirst();
    }

    //post
    public void create(Items item) {
        items.add(item);
    }

    public Items updateById(Items item, long id) {
        Items existingItem = items.stream().filter(i -> i.getId() == id).findFirst().get();
        existingItem.setName(item.getName());
        existingItem.setDescription(item.getDescription());
        existingItem.setType(item.getType());
        existingItem.setImageURL(item.getImageURL());
        return existingItem;
    }

    public Items updateByName(Items item, String name) {
        Items existingItem = items.stream().filter(i -> (i.getName() == null ? name == null : item.getName().equals(name))).findFirst().get();
        existingItem.setName(item.getName());
        existingItem.setDescription(item.getDescription());
        existingItem.setType(item.getType());
        existingItem.setImageURL(item.getImageURL());
        return existingItem;
    }

    public void deleteById(long id) {
        items.removeIf(item -> item.getId() == id);
    }

    public void deleteByName(String name) {
        items.removeIf(item -> item.getName().equals(name));
    }

    @PostConstruct
    public void init() {
        items.add(new Items(1, "n1", "d1", "t1", "i1"));
        items.add(new Items(2, "n2", "d2", "t2", "i2"));
        items.add(new Items(3, "n3", "d3", "t3", "i3"));
    }
}
