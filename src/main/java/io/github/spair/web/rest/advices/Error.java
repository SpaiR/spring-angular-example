package io.github.spair.web.rest.advices;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class Error {

    private int code;
    private String message;
}
