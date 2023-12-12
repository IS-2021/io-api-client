import { defineConfig } from "tsup";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	minify: true,
	entry: ["src/index.ts"],
	target: "esnext",
	dts: true,
	format: ["esm"],
});
