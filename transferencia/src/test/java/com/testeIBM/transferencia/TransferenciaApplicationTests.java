package com.testeIBM.transferencia;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TransferenciaApplicationTests {

	@Test
	public void contextLoads() {
		String value = "test";
		assertEquals("test", value);
	}

}
