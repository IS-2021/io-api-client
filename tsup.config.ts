import { defineConfig } from "tsup";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	entry: ["src/index.ts"],
	clean: true,
	target: "esnext",
	dts: true,
	// experimentalDts: true,
	format: ["esm"],
	// noExternal: ["untypeable"],
});
