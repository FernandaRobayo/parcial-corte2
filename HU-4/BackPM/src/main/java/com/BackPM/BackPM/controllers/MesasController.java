package com.BackPM.BackPM.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BackPM.BackPM.models.Mesas;
import com.BackPM.BackPM.services.IService.IMesaService;

@RestController
@RequestMapping("/mesas")
public class MesasController extends ABaseController<Mesas, IMesaService> {

    public MesasController(IMesaService service) {
        super(service, "Mesa");
    }
}
