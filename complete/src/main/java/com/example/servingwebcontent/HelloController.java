package com.example.servingwebcontent;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
class HelloController {

    /*@RequestMapping("/")
    public String index() {
        return "GfQn3hVmLuVa95ogAyiK";
    }*/

    @RequestMapping("/suma")
    public int index(int x, int y) {
        return x + y;
    }

}