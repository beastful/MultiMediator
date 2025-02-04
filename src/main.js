import './style.css'
import { QueueEventEmitter } from '@voxelful/queueeventemitter'

export class MultiMediator extends QueueEventEmitter {
  static instances = []
  constructor(name) {
    super()
    this.name = name
    this.instance = MultiMediator.instances.filter(i => i.name == name) // Array
    if(this.instance.length > 0) return this.instance[0]
    MultiMediator.instances.push(this)
    return this
  }
}
