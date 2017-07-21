package io.github.spair.repository.repositories;

import io.github.spair.repository.entities.Article;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ArticleRepository extends MongoRepository<Article, Long>, ArticleRepositoryOperations {

    /**
     * Return all articles in database, exclude `text` field (set to null).
     * @return all articles with `text` field equal to null
     */
    @Query(value = "{}", fields = "{ 'text' : 0 }")
    List<Article> findAllWithoutText();
}
