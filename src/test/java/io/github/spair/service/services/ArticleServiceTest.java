package io.github.spair.service.services;

import io.github.spair.repository.entities.Article;
import io.github.spair.repository.repositories.ArticleRepository;
import io.github.spair.service.exceptions.ArticleNotFoundException;
import io.github.spair.service.services.impl.ArticleServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
public class ArticleServiceTest {

    @TestConfiguration
    static class AboutServiceTestContextConfig {
        @Bean
        public ArticleService articleService() {
            return new ArticleServiceImpl();
        }
    }

    @Autowired
    private ArticleService articleService;

    @MockBean
    private ArticleRepository articleRepository;
    @MockBean
    private SequenceService sequenceService;

    @Before
    public void setUp() {
        when(articleRepository.findOne(1L)).thenReturn(new Article());
        when(articleRepository.findOne(2L)).thenReturn(null);
    }

    @Test
    public void testGetById() {
        assertNotNull(articleService.getById(1L));
    }

    @Test(expected = ArticleNotFoundException.class)
    public void testGetByIdException() {
        articleService.getById(2L);
    }
}
