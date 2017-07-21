package io.github.spair.service.services;

import io.github.spair.repository.entities.Article;
import io.github.spair.repository.entities.Preview;

final class PreviewServiceTestHelper {

    Article getArticleTemplateWithId(Long id) {
        return new Article(id, "title", null, "imageLink", "preview", null, 10);
    }

    Preview getPreviewTemplateWithId(Long id) {
        return new Preview(id, "title", "imageLink", "preview");
    }
}
