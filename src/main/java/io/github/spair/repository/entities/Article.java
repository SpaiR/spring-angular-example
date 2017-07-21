package io.github.spair.repository.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Article {

    @Id
    private Long id;
    private String title;
    private Date postDate;
    private String imageLink;
    private String previewText;
    private String text;
    private Integer likes;

    static public String getSequenceName() {
        return "articles";
    }
}
