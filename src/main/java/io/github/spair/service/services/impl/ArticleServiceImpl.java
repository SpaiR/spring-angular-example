package io.github.spair.service.services.impl;

import io.github.spair.repository.entities.Article;
import io.github.spair.repository.repositories.ArticleRepository;
import io.github.spair.service.exceptions.ArticleNotFoundException;
import io.github.spair.service.services.ArticleService;
import io.github.spair.service.services.SequenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private SequenceService sequenceService;

    @Override
    public Article create(Article article) {
        article.setId(sequenceService.getNextSequence(Article.getSequenceName()));
        return articleRepository.save(article);
    }

    @Override
    public Article getById(Long id) throws ArticleNotFoundException {
        Article article = articleRepository.findOne(id);

        if (article == null) {
            throw new ArticleNotFoundException(id);
        }

        return article;
    }

    @Override
    public void update(Article article) {
        articleRepository.save(article);
    }

    @Override
    public void deleteById(Long id) {
        articleRepository.delete(id);
    }

    @Override
    public List<Article> getLastInRangeWithoutText(int start, int limit) {
        return articleRepository.getLastInRangeWithoutText(start, limit);
    }

    @Override
    public List<Article> getAllWithoutText() {
        return articleRepository.findAllWithoutText();
    }
}
