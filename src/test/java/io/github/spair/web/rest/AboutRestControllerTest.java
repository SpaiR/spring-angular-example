package io.github.spair.web.rest;

import io.github.spair.service.services.AboutService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = AboutRestController.class, secure = false)
public class AboutRestControllerTest {

    private final static String TEXT_FOR_RESPONSE = "text for response";
    private String fieldForFilling = null;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AboutService aboutService;

    @Before
    public void setUp() {
        when(aboutService.getText()).thenReturn(TEXT_FOR_RESPONSE);
        doAnswer(answer -> fieldForFilling = (String) answer.getArguments()[0])
                .when(aboutService).updateText(any(String.class));
    }

    @Test
    public void testGetText() throws Exception {
        mockMvc.perform(get("/api/about"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string(containsString(TEXT_FOR_RESPONSE)));
    }

    @Test
    public void testUpdateText() throws Exception {
        mockMvc.perform(
                post("/api/about").contentType(MediaType.TEXT_PLAIN).content("text_for_request")
        ).andExpect(status().isOk());

        assertEquals("text_for_request", fieldForFilling);
    }
}
