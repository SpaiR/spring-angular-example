package io.github.spair.repository.repositories;

import io.github.spair.repository.entities.PlainTextHolder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlainTextHolderRepository extends MongoRepository<PlainTextHolder, String> {}
