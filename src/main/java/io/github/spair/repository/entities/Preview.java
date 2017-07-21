package io.github.spair.repository.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Preview {

    private Long id;
    private String title;
    private String imageLink;
    private String text;
}
