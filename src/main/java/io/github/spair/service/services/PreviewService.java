package io.github.spair.service.services;

import io.github.spair.repository.entities.Preview;

import java.util.List;

public interface PreviewService {

    /**
     * Get preview list in given range, created from last articles in database.
     * @param start position to find from
     * @param limit number of previews to return
     * @return previews list
     */
    List<Preview> getLastInRange(int start, int limit);

    /**
     * Get all previews created from all articles in database.
     * @return all possible previews
     */
    List<Preview> getAll();
}
