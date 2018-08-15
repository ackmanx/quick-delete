import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//Enzyme isn't compatible with React 16 natively (yet), so we have to use an adapter
configure({adapter: new Adapter()})
