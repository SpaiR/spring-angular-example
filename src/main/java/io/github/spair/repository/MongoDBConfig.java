package io.github.spair.repository;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

@Configuration
@PropertySource("classpath:mongodb.properties")
public class MongoDBConfig extends AbstractMongoConfiguration {

    @Value("${db.name}")
    private String databaseName;

    @Value("${db.uri}")
    private String clientUri;

    @Override
    protected String getDatabaseName() {
        return databaseName;
    }

    @Bean
    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(new MongoClientURI(clientUri));
    }
}
