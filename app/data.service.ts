import {DATA} from './mock-data'
import {Injectable} from 'angular2/core'

@Injectable()
export class DataService {
    getData() {
        return DATA;
    }
}