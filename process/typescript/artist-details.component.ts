import {Component} from 'angular2/core'
import {Artist} from './artist.ts'

@Component ({
	selector: 'artist-details',
	templateUrl: 'partials/artistdetails.html',
	inputs: ['artist'],
	styleUrls: ['css/app-details.css']
})

export class ArtistDetailsComponent {

}