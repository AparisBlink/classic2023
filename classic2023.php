<?php
if (ObjectFactory::invokeStatic(ObjectFactory::Style)->requireFatherStyle('classic')) {
	class Style_classic2023 extends Style_classic {
		const PARENT = 'classic';
	}
}