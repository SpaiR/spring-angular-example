package io.github.spair.service.services.impl;

import io.github.spair.repository.repositories.SequenceRepository;
import io.github.spair.service.services.SequenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SequenceServiceImpl implements SequenceService {

    @Autowired
    private SequenceRepository sequenceRepository;

    @Override
    public Long getNextSequence(String seqName) {
        return sequenceRepository.getNextSequence(seqName);
    }
}
