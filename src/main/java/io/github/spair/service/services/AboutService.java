package io.github.spair.service.services;

public interface AboutService {

    /**
     * Get about text from database.
     * @return about text
     */
    String getText();

    /**
     * Update about text in database.
     * @param newText text to update for
     */
    void updateText(String newText);
}
