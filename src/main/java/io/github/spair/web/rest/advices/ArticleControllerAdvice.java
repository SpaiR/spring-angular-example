package io.github.spair.web.rest.advices;

import io.github.spair.service.exceptions.ArticleNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ArticleControllerAdvice {

    @ExceptionHandler(ArticleNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public @ResponseBody Error handleArticleNotFound(ArticleNotFoundException e) {
        return new Error(HttpStatus.NOT_FOUND.value(), "Article [" + e.getArticleId() + "] not found");
    }
}
