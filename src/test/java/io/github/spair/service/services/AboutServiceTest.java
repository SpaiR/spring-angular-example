package io.github.spair.service.services;

import io.github.spair.repository.entities.PlainTextHolder;
import io.github.spair.repository.repositories.PlainTextHolderRepository;
import io.github.spair.service.services.impl.AboutServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
public class AboutServiceTest {

    private final static String TEXT_FOR_RETURN = "text from holder";
    private String fieldForFilling = null;

    @TestConfiguration
    static class AboutServiceTestContextConfig {
        @Bean
        public AboutService aboutService() {
            return new AboutServiceImpl();
        }
    }

    @Autowired
    private AboutService aboutService;

    @MockBean
    private PlainTextHolderRepository repository;

    @Before
    public void setUp() {
        when(repository.findOne("about"))
                .thenReturn(new PlainTextHolder("about", TEXT_FOR_RETURN));

        doAnswer(answer -> fieldForFilling = ((PlainTextHolder) answer.getArguments()[0]).getText())
                .when(repository).save(any(PlainTextHolder.class));
    }

    @Test
    public void testGetText() {
        assertEquals(TEXT_FOR_RETURN, aboutService.getText());
    }

    @Test
    public void testUpdateText() {
        assertNull(fieldForFilling);

        aboutService.updateText("test_string_12345");
        assertEquals("test_string_12345", fieldForFilling);
    }
}
