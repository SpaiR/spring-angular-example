package io.github.spair.web.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.spair.repository.entities.Article;
import io.github.spair.service.exceptions.ArticleNotFoundException;
import io.github.spair.service.services.ArticleService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = ArticleRestController.class, secure = false)
public class ArticleRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ArticleService articleService;

    @Before
    public void setUp() {
        when(articleService.create(any())).thenReturn(new Article());

        when(articleService.getById(any())).thenReturn(new Article());
        when(articleService.getById(2L)).thenThrow(new ArticleNotFoundException(2L));

        doNothing().when(articleService).update(any());
        doNothing().when(articleService).deleteById(any());
    }

    @Test
    public void testCreate() throws Exception {
        mockMvc.perform(
                post("/api/articles")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsBytes(new Article()))
        ).andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));
    }

    @Test
    public void testGetById() throws Exception {
        mockMvc.perform(get("/api/articles/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));
    }

    @Test
    public void testGetByIdNotFound() throws Exception {
        mockMvc.perform(get("/api/articles/2"))
                .andExpect(status().isNotFound())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().string("{\"code\":404,\"message\":\"Article [2] not found\"}"));
    }

    @Test
    public void testUpdate() throws Exception {
        mockMvc.perform(
                put("/api/articles/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsBytes(new Article()))
        ).andExpect(status().isOk());
    }

    @Test
    public void testDeleteById() throws Exception {
        mockMvc.perform(delete("/api/articles/1")).andExpect(status().isOk());
    }
}
