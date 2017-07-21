package io.github.spair.repository.repositories;

import io.github.spair.repository.repositories.impl.SequenceRepositoryImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

@RunWith(SpringRunner.class)
@DataMongoTest
public class SequenceRepositoryTest {

    @TestConfiguration
    static class SequenceRepositoryTestConfig {
        @Bean
        public SequenceRepository sequenceRepository() {
            return new SequenceRepositoryImpl();
        }
    }

    @Autowired
    private SequenceRepository sequenceRepository;

    @Test
    public void testGetNextSequence() {
        assertEquals(1L, sequenceRepository.getNextSequence("test_sequence").longValue());
        assertEquals(2L, sequenceRepository.getNextSequence("test_sequence").longValue());

        assertNotEquals(3L, sequenceRepository.getNextSequence("##sequence_test").longValue());
    }
}
