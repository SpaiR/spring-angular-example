package io.github.spair.repository.entities;

import org.junit.Assert;
import org.junit.Test;

public class ArticleTest {

    @Test
    public void testGetSequenceName() {
        Assert.assertEquals("articles", Article.getSequenceName());
    }
}
