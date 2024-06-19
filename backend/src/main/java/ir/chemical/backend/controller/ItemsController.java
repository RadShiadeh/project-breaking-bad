package ir.chemical.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ir.chemical.backend.model.Items;
import ir.chemical.backend.repository.ItemsRepository;


@RestController
public class ItemsController {
    private final ItemsRepository itemsRepository;

    public ItemsController(ItemsRepository itemsRepository) {
        this.itemsRepository = itemsRepository;
    }

    @GetMapping("/api/items")
    public List<Items> findAll() {
        return itemsRepository.getAll();
    }
}
