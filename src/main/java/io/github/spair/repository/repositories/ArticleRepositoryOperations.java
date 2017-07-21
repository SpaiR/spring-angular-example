package io.github.spair.repository.repositories;

import io.github.spair.repository.entities.Article;

import java.util.List;

public interface ArticleRepositoryOperations {

    /**
     * Return last added articles to database in given range
     * and with `text` field equal to null.
     * @param start position to find from
     * @param limit number of elements to return
     * @return list of articles from end, in given range and with field `text` equal null
     */
    List<Article> getLastInRangeWithoutText(int start, int limit);
}
