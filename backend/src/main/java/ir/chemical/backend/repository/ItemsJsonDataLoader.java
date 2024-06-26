package ir.chemical.backend.repository;

import java.io.IOException;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import aj.org.objectweb.asm.TypeReference;
import ir.chemical.backend.model.ItemsRecord;

@Component
public class ItemsJsonDataLoader implements CommandLineRunner {
    private static final Logger log = LoggerFactory.getLogger(ItemsJsonDataLoader.class);
    private final ItemsRepository itemsRepo;
    private final ObjectMapper objectMapper;

    public ItemsJsonDataLoader(ItemsRepository itemsRepo, ObjectMapper objectMapper) {
        this.itemsRepo = itemsRepo;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        if (itemsRepo.count() == 0) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/items.json")) {
                ItemsRecord allItems = objectMapper.readValue(inputStream, ItemsRecord.class);
                log.info("Reading {} items from items.json", allItems.allItems().size());
                itemsRepo.saveAll(allItems.allItems());
            } catch (IOException e) {
                throw new RuntimeException("Failed to load json data", e);
            }
        } else {
            log.info("data already loaded");
        }
    }
}
