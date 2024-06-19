package ir.chemical.backend.repository;

import java.util.ArrayList;
import java.util.List;

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

    @PostConstruct
    public void init() {
        items.add(new Items(1, "n1", "d1", "t1", "i1"));
        items.add(new Items(2, "n2", "d2", "t2", "i2"));
        items.add(new Items(2, "n3", "d3", "t3", "i3"));
    }
}
