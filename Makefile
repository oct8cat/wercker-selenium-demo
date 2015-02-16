.PHONY: test

all: jshint test

test:
	@node_modules/.bin/mocha -R spec -t 60000 -s 10000

jshint:
	@jshint server.js test/test.js
