LICENSE_COMMENT="/*! scrop 0.1.1 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */"

cover: lint
	@./node_modules/.bin/istanbul cover -x "**/spec/**" \
		./node_modules/mocha/bin/_mocha --report lcov spec/ -- -R spec

coveralls:
	@./node_modules/.bin/istanbul cover -x "**/spec/**" \
		./node_modules/mocha/bin/_mocha --report lcovonly spec/ -- -R spec && \
		cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
	@rm -rf ./coverage

test: lint
	@./node_modules/.bin/mocha \
		--growl \
		--reporter spec \
		spec/*.spec.js

clean:
	@rm -rf dist

dist/vendor: clean
	@mkdir -p dist/vendor

dist/scrop.js: dist/vendor
	@echo $(LICENSE_COMMENT) > dist/scrop.js
	@cat src/scrop.js >> dist/scrop.js

dist/scrop.globals.js: dist/vendor
	@echo $(LICENSE_COMMENT) > dist/scrop.globals.js
	@echo "(function(root){\
	var require=function(key){return root[key];},\
	module={};" >> dist/scrop.globals.js
	@cat src/scrop.js >> dist/scrop.globals.js
	@echo "root.scrop = module.exports;\
	}(this));" >> dist/scrop.globals.js

dist/scrop.amd.js: dist/vendor
	@echo $(LICENSE_COMMENT) > dist/scrop.amd.js
	@echo "define(function(require, exports, module) {" >> dist/scrop.amd.js
	@cat src/scrop.js >> dist/scrop.amd.js
	@echo "return module.exports;});" >> dist/scrop.amd.js

dist/scrop.min.js: dist/scrop.js
	@./node_modules/.bin/uglifyjs dist/scrop.js --comments -m > dist/scrop.min.js

dist/scrop.globals.min.js: dist/scrop.globals.js
	@./node_modules/.bin/uglifyjs dist/scrop.globals.js --comments -m > dist/scrop.globals.min.js

dist/scrop.amd.min.js: dist/scrop.amd.js
	@./node_modules/.bin/uglifyjs dist/scrop.amd.js --comments > dist/scrop.amd.min.js

dist: dist/scrop.min.js dist/scrop.globals.min.js dist/scrop.amd.min.js

lint:
	@./node_modules/.bin/jshint src/scrop.js spec

.PHONY: lint test clean