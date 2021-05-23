const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

/**
 * Use this to explain that 
 * you have to subscribe first in order to listen an event
 * 
 * const myEmitter = new EventEmitter();
 *
 * setInmediate(()=> {
 *  myEmitter.emit('TEST_EVENT');
 * })
 *
 * myEmitter.on('TEST_EVENT', () => console.log('Event fired!'))
 * myEmitter.on('TEST_EVENT', () => console.log('Event fired!'))
 * myEmitter.on('TEST_EVENT', () => console.log('Event fired!'))
 */
