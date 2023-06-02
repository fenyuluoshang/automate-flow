import init from './init'
import expressApp from './app'
import 'reflect-metadata'

void init()

expressApp.listen(3000, () => {})
