package io.github.spair.web.rest;

import io.github.spair.service.services.PreviewService;
import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = PreviewRestController.class, secure = false)
public class PreviewRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PreviewService previewService;

    @Before
    public void setUp() {
        when(previewService.getLastInRange(anyInt(), anyInt())).thenReturn(Lists.emptyList());
        when(previewService.getAll()).thenReturn(Lists.emptyList());
    }

    @Test
    public void testGetLastInRange() throws Exception {
        mockMvc.perform(
                get("/api/previews/range")
                        .param("start", "0")
                        .param("limit", "2")
        ).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));
    }

    @Test
    public void testGetAll() throws Exception {
        mockMvc.perform(get("/api/previews"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));
    }
}
