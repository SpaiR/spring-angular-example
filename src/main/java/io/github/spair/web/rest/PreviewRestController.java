package io.github.spair.web.rest;

import io.github.spair.repository.entities.Preview;
import io.github.spair.service.services.PreviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PreviewRestController {

    @Autowired
    private PreviewService previewService;

    @GetMapping("/previews/range")
    public List<Preview> getLastInRange(@PathParam("start") int start, @PathParam("limit") int limit) {
        return previewService.getLastInRange(start, limit);
    }

    @GetMapping("/previews")
    public List<Preview> getAll() {
        return previewService.getAll();
    }
}
