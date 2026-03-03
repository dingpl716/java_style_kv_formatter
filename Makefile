VSIX_FILE = java-style-kv-formatter-0.0.1.vsix

.PHONY: install compile package test install-extension install-cursor install-code clean

install:
	@npm install

compile:
	@npm run compile

package: compile
	@npx @vscode/vsce package --allow-missing-repository

test: compile
	@npm test

install-cursor: package
	@cursor --install-extension $(VSIX_FILE)

install-code: package
	@code --install-extension $(VSIX_FILE)

clean:
	@rm -rf out node_modules $(VSIX_FILE)
