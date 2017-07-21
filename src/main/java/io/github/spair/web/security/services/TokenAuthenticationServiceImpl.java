package io.github.spair.web.security.services;

import io.github.spair.web.security.exceptions.IllegalAuthorizationTokenException;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Service
public class TokenAuthenticationServiceImpl implements TokenAuthenticationService {

    private final static Logger LOGGER = LoggerFactory.getLogger(TokenAuthenticationServiceImpl.class);

    @Autowired
    private ServiceProperties props;

    @Override
    public void addAuthentication(HttpServletResponse response, String username) {
        String JWT = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + props.getExpirationTime()))
                .signWith(SignatureAlgorithm.HS512, props.getSecretWord())
                .compact();

        response.addHeader("Authorization", "Bearer" + " " + JWT);
    }

    @Override
    public Authentication getAuthentication(HttpServletRequest request) {
        Authentication authentication = null;
        String token = request.getHeader("Authorization");

        if (token != null) {
            try {
                String user = Jwts.parser().setSigningKey(props.getSecretWord())
                        .parseClaimsJws(sanitizeToken(token)).getBody().getSubject();

                if (user != null) {
                    authentication = new UsernamePasswordAuthenticationToken(user, null, getAuthorities());
                }
            } catch (ExpiredJwtException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException | SignatureException ignored) {
            } catch (Exception e) {
                LOGGER.warn(e.getMessage());
            }
        }

        return authentication;
    }

    @Override
    public void isAuthorized(String token) throws IllegalAuthorizationTokenException {
        try {
            Jwts.parser().setSigningKey(props.getSecretWord()).parseClaimsJws(sanitizeToken(token));
        } catch (ExpiredJwtException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException | SignatureException e) {
            throw new IllegalAuthorizationTokenException();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
    }

    private String sanitizeToken(String tokenToSanitize) {
        return tokenToSanitize.replace("Bearer", "");
    }

    private Collection<GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return grantedAuthorities;
    }
}
