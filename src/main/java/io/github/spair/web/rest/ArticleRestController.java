package io.github.spair.web.rest;

import io.github.spair.repository.entities.Article;
import io.github.spair.service.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ArticleRestController {

    @Autowired
    private ArticleService articleService;

    @Secured("ROLE_ADMIN")
    @PostMapping("/articles")
    @ResponseStatus(HttpStatus.CREATED)
    public Article create(@RequestBody Article article) {
        return articleService.create(article);
    }

    @GetMapping("/articles/{id}")
    public Article getById(@PathVariable Long id) {
        return articleService.getById(id);
    }

    @Secured("ROLE_ADMIN")
    @PutMapping("/articles/{id}")
    public void update(@RequestBody Article article) {
        articleService.update(article);
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/articles/{id}")
    public void deleteById(@PathVariable Long id) {
        articleService.deleteById(id);
    }
}
