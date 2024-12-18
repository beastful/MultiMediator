# MultiMediator

MultiMediator is a lightweight npm package that provides an EventEmitter interface, allowing you to manage events across different channels. This package enables you to create isolated event channels, making it easier to organize and handle events in your application.

## Installation

You can install MultiMediator via npm:

```bash
npm install multimediator
```

## Usage

To use MultiMediator, you need to initialize it with a channel name. Each channel operates independently, allowing you to emit and listen for events without interference from other channels.

### Basic Example

```js
const MultiMediator = require('multimediator');
// Initialize a new MultiMediator instance with a channel name
const channelA = new MultiMediator('channelA');

// Listen for an event on channelA
channelA.on('event', (data) => {
    console.log('Received on channelA:', data);
});

// Emit an event on channelA
channelA.emit('event', { message: 'Hello from channelA!' });

Multiple Channels

You can create multiple instances of MultiMediator for different channels:

JavaScript
Копировать
const channelB = new MultiMediator('channelB');

channelB.on('event', (data) => {
    console.log('Received on channelB:', data);
});

// Emit an event on channelB
channelB.emit('event', { message: 'Hello from channelB!' });
```

## Key Features
- Independent Channels: Each channel is isolated, preventing event conflicts.
- Event Handling: Use the standard EventEmitter methods (on, emit, off) to manage events.
- Lightweight: Minimal footprint, making it suitable for performance-sensitive applications.

## API
### new MultiMediator(channelName)

- Creates a new MultiMediator instance for the specified channel.

#### Parameters:

- channelName(string): The name of the channel.

### emit(eventName, data): Emits an event on the channel.

#### Parameters:
- eventName(string): The name of the event to emit.
- data(any): The data to pass to the event listeners.


### on(eventName, listener)

Adds a listener for the specified event.

#### Parameters:
- eventName (string): The name of the event to listen for.
- listener (function): The function to call when the event is emitted.

### off(eventName, listener)

Removes a listener for the specified event.

#### Parameters:
- eventName (string): The name of the event.
- listener (function): The function to remove from the event listeners.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments

Thanks to the Node.js community for the inspiration and support in building this package.