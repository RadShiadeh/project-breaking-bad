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
public class ItemsJsonDataloader implements CommandLineRunner {
    private static final Logger log = LoggerFactory.getLogger(ItemsJsonDataloader.class);
    private final ItemsRepository itemsRepository;
    private final ObjectMapper objectMapper;

    public ItemsJsonDataloader(ObjectMapper objectMapper, ItemsRepository itemsRepository) {
        this.itemsRepository = itemsRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        if (itemsRepository.count() == 0) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/items.json")) {
                ItemsRecord allItems = objectMapper.readValue(inputStream, ItemsRecord.class);
                log.info("Reading {} items from items.json and saving to a db", allItems.items().size());
                itemsRepository.saveAll(allItems.items());                
            } catch (IOException e) {
                throw new RuntimeException("Failed to save all items", e);
            }
        } else {
            log.info("play data already loaded");   
        }
    }
        
}
