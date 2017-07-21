package io.github.spair.repository.repositories;

import io.github.spair.repository.entities.Article;
import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataMongoTest
public class ArticleRepositoryTest {

    private final static Long FIRST_ID = 1L;
    private final static Long LAST_ID  = 10L;
    private final ArticleRepositoryTestHelper helper = new ArticleRepositoryTestHelper();

    @Autowired
    private ArticleRepository articleRepository;

    @Before
    public void setUp() {
        Article article = helper.getArticleTemplate();

        for (long i = FIRST_ID; i <= LAST_ID; i++) {
            article.setId(i);
            articleRepository.save(article);
        }
    }

    @Test
    public void testGetLastInRangeWithoutText() {
        List<Article> articleListToCompare = helper.nullifyArticleText(
                Lists.newArrayList(
                        helper.getArticleTemplateWithId(LAST_ID), helper.getArticleTemplateWithId(LAST_ID - 1))
        );

        assertEquals(articleListToCompare, articleRepository.getLastInRangeWithoutText(0, 2));

        articleListToCompare = helper.nullifyArticleText(
                Lists.newArrayList(
                        helper.getArticleTemplateWithId(LAST_ID - 2), helper.getArticleTemplateWithId(LAST_ID - 3))
        );

        assertEquals(articleListToCompare, articleRepository.getLastInRangeWithoutText(2, 2));
    }

    @Test
    public void testFindAllWithoutText() {
        List<Article> articleList = articleRepository.findAllWithoutText();

        assertTrue(articleList.size() > 0);
        articleList.forEach(article -> assertNull(article.getText()));
    }
}
