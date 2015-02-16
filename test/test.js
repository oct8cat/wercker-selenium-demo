'use strict';

/* global describe, it, before, after */

var listen = require('../server'),
    webdriverio = require('webdriverio'),
    assert = require('assert'),
    TITLE = 'wercker-selenium-demo'

before(listen)

describe('title', function() {
    var client
    before(function(done) {
        client = webdriverio.remote({desiredCapabilities: {browserName: 'firefox'}})
        .init()
        .setViewportSize({width: 1920, height: 1080})
        .call(done)
    })
    after(function(done) {
        client.end(done)
    })

    it('Should be equal "' + TITLE + '"', function(done) {
        client
        .url('http://localhost:3000')
        .getTitle(function(err, title) {
            if (err) { done(err); return }
            assert.equal(title, TITLE)
            done()
        })
    })
})
