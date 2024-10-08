package ir.chemical.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import ir.chemical.backend.model.Items;
import ir.chemical.backend.repository.ItemsRepository;

@RestController
@RequestMapping("/api/items")
public class ItemsController {
    private final ItemsRepository itemsRepository;

    public ItemsController(ItemsRepository itemsRepository) {
        this.itemsRepository = itemsRepository;
    }

    @GetMapping("")
    public List<Items> findAll() {
        return itemsRepository.getAll();
    }

    @GetMapping("{id}")
    public Items findById(@PathVariable long id) {
        Optional<Items> found = itemsRepository.findById(id);
        if (found.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return found.get();
        }
    }

    @GetMapping("name/{name}")
    public Items findByName(@PathVariable String name) {
        Optional<Items> found = itemsRepository.findByName(name);
        if (found.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return found.get();
        }
    }

    @GetMapping("type/{type}")
    public List<Items> findAllByType(@PathVariable String type) {
        return itemsRepository.findByType(type);
    }

    @PostMapping("")
    public void createNewItem(@RequestBody Items item) {
        itemsRepository.create(item);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("{id}")
    public void updateByID(@RequestBody Items item, @PathVariable long id) {
        Optional<Items> found = itemsRepository.findById(id);
        if (found.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            itemsRepository.updateByID(id, item);
        }
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable long id) {
        Optional<Items> found = itemsRepository.findById(id);
        if (found.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            itemsRepository.deleteById(id);
        }
    }
}
