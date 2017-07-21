package io.github.spair.service.services;

import io.github.spair.repository.entities.Article;
import io.github.spair.service.exceptions.ArticleNotFoundException;

import java.util.List;

public interface ArticleService {

    /**
     * Create new article in database.
     * @param article article to create from
     * @return article with initialized ID
     */
    Article create(Article article);

    /**
     * Find article by ID.
     * @param id id to find
     * @return founded article
     * @throws ArticleNotFoundException in case if article not found
     */
    Article getById(Long id) throws ArticleNotFoundException;

    /**
     * Update article in database.
     * @param article article to update for
     */
    void update(Article article);

    /**
     * Find by ID and delete article from database.
     * @param id ID to find
     */
    void deleteById(Long id);

    /**
     * Get list of articles from database in given range and without `text` field (set to null).
     * @param start position to find from
     * @param limit number of elements to return
     * @return list of articles from end, in given range and with field `text` equal null
     */
    List<Article> getLastInRangeWithoutText(int start, int limit);

    /**
     * Return all articles in database, exclude `text` field (set to null).
     * @return all articles with `text` field equal to null
     */
    List<Article> getAllWithoutText();
}
