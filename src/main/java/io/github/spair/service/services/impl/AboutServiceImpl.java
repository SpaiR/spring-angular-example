package io.github.spair.service.services.impl;

import io.github.spair.repository.entities.PlainTextHolder;
import io.github.spair.repository.repositories.PlainTextHolderRepository;
import io.github.spair.service.services.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AboutServiceImpl implements AboutService {

    private final static String ABOUT_HOLDER_ID = "about";

    @Autowired
    private PlainTextHolderRepository plainTextHolderRepository;

    @Override
    public String getText() {
        return plainTextHolderRepository.findOne(ABOUT_HOLDER_ID).getText();
    }

    @Override
    public void updateText(String newText) {
        plainTextHolderRepository.save(new PlainTextHolder(ABOUT_HOLDER_ID, newText));
    }
}
