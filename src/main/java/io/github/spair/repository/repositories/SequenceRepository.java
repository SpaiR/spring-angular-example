package io.github.spair.repository.repositories;

/**
 * Used to generate autoincremented ID for certain sequence.
 * Implemented because standard MongoDB `ObjectId` is to complicated and doesn't fit to purpose of application.
 */
public interface SequenceRepository {

    /**
     * Return next ID for given sequence.
     * @param seqName sequence name
     * @return next ID
     */
    Long getNextSequence(String seqName);
}
