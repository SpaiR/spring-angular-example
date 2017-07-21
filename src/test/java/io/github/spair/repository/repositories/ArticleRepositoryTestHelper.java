package io.github.spair.repository.repositories;

import io.github.spair.repository.entities.Article;

import java.util.List;

final class ArticleRepositoryTestHelper {

    Article getArticleTemplate() {
        return getArticleTemplateWithId(null);
    }

    Article getArticleTemplateWithId(Long id) {
        return new Article(id, "title", null, "imageLink", "preview", "text", 10);
    }

    List<Article> nullifyArticleText(List<Article> articleList) {
        articleList.forEach(article -> article.setText(null));
        return articleList;
    }
}
