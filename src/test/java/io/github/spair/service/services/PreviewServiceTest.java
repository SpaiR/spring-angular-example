package io.github.spair.service.services;

import io.github.spair.repository.entities.Article;
import io.github.spair.repository.entities.Preview;
import io.github.spair.service.services.impl.PreviewServiceImpl;
import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
public class PreviewServiceTest {

    private final PreviewServiceTestHelper helper = new PreviewServiceTestHelper();
    private final List<Preview> checkingPreviewList = new ArrayList<>();
    private final List<Article> articleList = new ArrayList<>();
    private static final int START = 0;
    private static final int LIMIT = 2;
    private static final int TOTAL = 10;

    @TestConfiguration
    static class PreviewServiceTestConfig {
        @Bean
        public PreviewService previewService() {
            return new PreviewServiceImpl();
        }
    }

    @Autowired
    private PreviewService previewService;

    @MockBean
    private ArticleService articleService;

    @Before
    public void setUp() {
        for (long i = 0; i < TOTAL; i++) {
            articleList.add(helper.getArticleTemplateWithId(i));
            checkingPreviewList.add(helper.getPreviewTemplateWithId(i));
        }

        when(articleService.getLastInRangeWithoutText(START, LIMIT)).thenReturn(
                Lists.newArrayList(articleList.get(TOTAL - 1), articleList.get(TOTAL - 2))
        );
        when(articleService.getAllWithoutText()).thenReturn(articleList);
    }

    @Test
    public void testGetLastInRange() {
        List<Preview> previewList = previewService.getLastInRange(START, LIMIT);
        List<Preview> checkedList = Lists.newArrayList(checkingPreviewList.get(TOTAL - 1), checkingPreviewList.get(TOTAL - 2));

        assertEquals(checkedList, previewList);
    }

    @Test
    public void testGetAll() {
        assertEquals(checkingPreviewList, previewService.getAll());
    }
}
