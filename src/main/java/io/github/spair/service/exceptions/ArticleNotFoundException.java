package io.github.spair.service.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ArticleNotFoundException extends RuntimeException {

    private Long articleId;
}
