package io.github.spair.web.security.services;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Util class to provide immutable properties.
 */
@Component
@Getter
public final class ServiceProperties {

    @Value("${secret.word}")
    private final String secretWord = null;

    @Value("#{new Long(${token.expiration_time})}")
    private final Long expirationTime = null;
}
