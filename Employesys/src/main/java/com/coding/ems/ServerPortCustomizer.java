package com.coding.ems;

import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;

import org.springframework.stereotype.Component;

@Component
public class ServerPortCustomizer implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

	@Override
	public void customize(ConfigurableServletWebServerFactory factory) {
		
		String port = System.getenv("X_ZOHO_CATALYST_LISTEN_PORT");
		int listenPort;
		if(port != null && !port.isEmpty()) {
			listenPort = Integer.parseInt(port);
			
		} else {
			listenPort = 4500;
		}
		 System.out.println("Starting server on port: " + listenPort);
		factory.setPort(listenPort);
		
	}


}
